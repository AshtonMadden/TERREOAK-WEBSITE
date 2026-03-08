"use client";

import { useState, useEffect, useRef } from "react";

interface JobberLeadFormProps {
    clienthubId?: string;
    formUrl?: string;
}

/**
 * JobberLeadForm Component
 */
export default function JobberLeadForm({
    clienthubId = "41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2232203",
    formUrl = "https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2232203"
}: JobberLeadFormProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!containerRef.current) return;

        let isMounted = true;
        let script: HTMLScriptElement | null = null;

        // Clean up previous content to avoid multiple forms during re-renders
        containerRef.current.innerHTML = "";
        setIsLoading(true);

        const timer = setTimeout(() => {
            if (!isMounted || !containerRef.current) return;

            // 1. Load Jobber CSS
            if (!document.querySelector('link[href*="work_request_embed.css"]')) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
                link.className = "jobber-css";
                document.head.appendChild(link);
            }

            // 2. Create the Script
            script = document.createElement("script");
            script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";

            script.setAttribute("clienthub_id", clienthubId);
            script.setAttribute("form_url", formUrl);
            script.async = true;

            script.onload = () => {
                // Give it a moment to inject the iframe
                setTimeout(() => {
                    if (isMounted) setIsLoading(false);
                }, 2000);
            };

            containerRef.current.appendChild(script);
        }, 100);

        return () => {
            isMounted = false;
            clearTimeout(timer);
            if (containerRef.current) containerRef.current.innerHTML = "";
        };
    }, [clienthubId, formUrl]);

    return (
        <div className="w-full mt-8 bg-white rounded-3xl p-4 md:p-10 border border-black/5 shadow-2xl min-h-[600px] relative transition-all max-w-5xl mx-auto flex flex-col">
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-50 rounded-3xl">
                    <div className="w-12 h-12 border-4 border-[#01fa6d]/20 border-t-[#01fa6d] rounded-full animate-spin mb-4"></div>
                    <p className="text-sm font-bold text-black/40 uppercase tracking-widest italic">Syncing with Jobber...</p>
                </div>
            )}

            {/* Form Container */}
            <div
                ref={containerRef}
                id={clienthubId}
                className="jobber-embed-container w-full min-h-[600px] block"
            ></div>

            {/* Fallback if form is blocked by browser extensions/cors */}
            <div className="mt-8 text-center pt-8 border-t border-black/5 opacity-50 hover:opacity-100 transition-opacity">
                <p className="text-xs text-black/40 font-medium">Form blocked by your browser extensions? </p>
                <a
                    href={formUrl.replace("embedded_work_request_form", "work_request/new")}
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="text-black font-bold underline text-xs hover:text-[#01fa6d]"
                >
                    Open request form in new tab
                </a>
            </div>

            <style jsx global>{`
                .jobber-embed-container iframe {
                    width: 100% !important;
                    min-height: 800px !important;
                    border: none !important;
                }
            `}</style>
        </div>
    );
}

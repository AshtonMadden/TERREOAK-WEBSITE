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
        <div className="w-full relative transition-all">
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 z-50">
                    <div className="w-12 h-12 border-4 border-[#01fa6d]/20 border-t-[#01fa6d] rounded-full animate-spin"></div>
                </div>
            )}

            {/* Form Container */}
            <div
                ref={containerRef}
                id={clienthubId}
                className="jobber-embed-container w-full block"
            ></div>

            {/* Fallback contact line */}
            <p className="mt-6 border-t border-black/10 pt-5 text-[1.05rem] text-[#50565b]">
                Form not loading? Email{" "}
                <a href="mailto:services@terreoak.ca" className="font-semibold text-[#017a6d] underline underline-offset-4">
                    services@terreoak.ca
                </a>{" "}
                or call{" "}
                <a href="tel:+15877077648" className="font-semibold text-[#017a6d] underline underline-offset-4">
                    587-707-7648
                </a>
                .
            </p>
        </div>
    );
}

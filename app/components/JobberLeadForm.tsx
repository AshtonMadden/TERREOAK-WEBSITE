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
        const container = containerRef.current;
        container.innerHTML = "";

        // The form is a heavy third-party embed. It starts loading in the background the moment the
        // visitor first scrolls, taps or moves the mouse (or a few seconds after the page has loaded),
        // so it is ready and waiting by the time they reach it, without slowing the first paint.
        let started = false;
        const load = () => {
            if (started) return;
            started = true;
            stop();
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
        };

        const events = ["scroll", "pointerdown", "pointermove", "touchstart", "keydown"] as const;
        let timer: ReturnType<typeof setTimeout> | undefined;
        const afterLoad = () => {
            timer = setTimeout(load, 4000);
        };
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) load();
            },
            { rootMargin: "1200px" }
        );
        function stop() {
            events.forEach((name) => window.removeEventListener(name, load));
            window.removeEventListener("load", afterLoad);
            clearTimeout(timer);
            observer.disconnect();
        }

        events.forEach((name) => window.addEventListener(name, load, { once: true, passive: true }));
        if (document.readyState === "complete") afterLoad();
        else window.addEventListener("load", afterLoad, { once: true });
        observer.observe(container);

        return () => {
            isMounted = false;
            stop();
            container.innerHTML = "";
        };
    }, [clienthubId, formUrl]);

    return (
        <div className="w-full relative transition-all">
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 z-50">
                    <div className="w-12 h-12 border-4 border-[#019587]/20 border-t-[#019587] rounded-full animate-spin"></div>
                </div>
            )}

            {/* Form Container */}
            <div
                ref={containerRef}
                id={clienthubId}
                className="jobber-embed-container block min-h-[420px] w-full"
            ></div>

            {/* Fallback contact line */}
            <p className="mt-6 border-t border-black/10 pt-5 text-[1.05rem] text-[#50565b]">
                Form not loading? Email{" "}
                <a href="mailto:services@terreoak.ca" className="font-semibold text-[#005148] underline underline-offset-4">
                    services@terreoak.ca
                </a>{" "}
                or call{" "}
                <a href="tel:+15877077648" className="font-semibold text-[#005148] underline underline-offset-4">
                    587-707-7648
                </a>
                .
            </p>
        </div>
    );
}

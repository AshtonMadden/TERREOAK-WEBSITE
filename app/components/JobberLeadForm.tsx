"use client";

import { useEffect, useRef } from "react";

interface JobberLeadFormProps {
    clienthubId?: string;
    formUrl?: string;
}

export default function JobberLeadForm({
    clienthubId = "41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2232203",
    formUrl = "https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2232203"
}: JobberLeadFormProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Prevent double injection if component re-renders
        if (containerRef.current && containerRef.current.innerHTML === "") {
            const script = document.createElement("script");
            script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
            script.async = true;

            // These attributes are exactly as Jobber provides in their snippet
            script.setAttribute("clienthub_id", clienthubId);
            script.setAttribute("form_url", formUrl);

            containerRef.current.appendChild(script);
        }
    }, [clienthubId, formUrl]);

    return (
        <div className="w-full mt-12 bg-white rounded-xl p-4 md:p-8 border border-black/5 shadow-sm min-h-[600px]">
            <link
                rel="stylesheet"
                href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
                media="screen"
            />
            <div
                ref={containerRef}
                id={clienthubId}
                className="jobber-embed-container"
            ></div>
        </div>
    );
}

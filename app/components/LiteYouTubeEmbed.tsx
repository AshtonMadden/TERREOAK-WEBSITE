"use client";

import { useState } from "react";
import Image from "next/image";

interface LiteYouTubeEmbedProps {
    videoId: string;
    title: string;
    isShort?: boolean;
}

export default function LiteYouTubeEmbed({ videoId, title, isShort = false }: LiteYouTubeEmbedProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    // Using maxresdefault or hqdefault for thumbnail
    // For shorts, the thumbnail might be cropped or we can use another quality. maxresdefault usually works if available.
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    // Also falling back to hqdefault in case maxresdefault doesn't exist
    // However for typical usage maxres is fine if it's a 720p+ video.

    return (
        <div
            className={`relative w-full rounded-2xl overflow-hidden cursor-pointer group bg-black shadow-lg mx-auto ${isShort ? 'aspect-[9/16] max-w-sm' : 'aspect-video'}`}
            onClick={() => setIsLoaded(true)}
            title={`Play: ${title}`}
        >
            {!isLoaded ? (
                <>
                    {/* Thumbnail */}
                    <Image
                        src={thumbnailUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized // Next.js image optimization is good but unoptimized is fine for external img
                    />

                    {/* Dark gradient overlay so play button pops */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-black/50 group-hover:bg-red-500 transition-colors transform group-hover:scale-110 duration-300">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </>
            ) : (
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
}

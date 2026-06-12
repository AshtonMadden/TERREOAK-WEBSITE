import React from 'react';

interface InstagramEmbedProps {
  url: string;
  width?: number | string;
  height?: number | string;
}

export default function InstagramEmbed({ url, width = '100%', height = 620 }: InstagramEmbedProps) {
  // Extract the base URL without query parameters to append /embed
  const baseUrl = url.split('?')[0].replace(/\/$/, '');
  const embedUrl = `${baseUrl}/embed`;

  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden rounded-[32px] shadow-xl border border-black/5 bg-white transform hover:scale-[1.02] transition-transform duration-500">
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        allow="encrypted-media"
        className="w-full"
      ></iframe>
    </div>
  );
}

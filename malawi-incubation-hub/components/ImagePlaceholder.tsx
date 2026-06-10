import React from "react";

interface PlaceholderProps {
  text: string;
  className?: string;
  landscape?: boolean;
}

export default function ImagePlaceholder({ text, className = "", landscape = false }: PlaceholderProps) {
  return (
    <div
      className={`relative w-full border-2 border-dashed border-slate-300 bg-slate-100 rounded-2xl flex flex-col items-center justify-center p-8 text-center transition-colors hover:bg-slate-200 group ${
        landscape ? "aspect-[21/9]" : "aspect-[4/3]"
      } ${className}`}
    >
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 mb-4 shadow-sm group-hover:scale-110 transition-transform">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
      <p className="text-slate-500 font-bold text-sm tracking-tight leading-relaxed max-w-[280px]">
        {text}
      </p>
    </div>
  );
}

"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopy?: boolean;
}

export default function CodeBlock({ code, language, showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative group my-6">
      {/* Header with language label and copy button */}
      <div className="flex items-center justify-between px-4 py-2.5 rounded-t-xl border overflow-hidden" style={{ backgroundColor: '#110F19', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
          {language || "code"}
        </span>
        {showCopy && (
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 text-slate-300 border hover:opacity-80 hover:text-white"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
            aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        )}
      </div>

      {/* Code content */}
      <div className="rounded-b-xl border-x border-b overflow-hidden" style={{ backgroundColor: '#110F19', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="overflow-x-auto">
          <pre className="p-5 text-[13px] leading-relaxed">
            <code className="text-slate-200 font-mono">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}


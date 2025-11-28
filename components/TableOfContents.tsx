"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface TableOfContentsProps {
  headings?: Array<{ id: string; text: string; level: number }>;
}

export default function TableOfContents({ headings: propHeadings }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    // Reset headings when pathname changes
    setHeadings([]);
    setActiveId("");

    if (propHeadings) {
      setHeadings(propHeadings);
      return;
    }

    // Wait for page content to load
    let intersectionObserver: IntersectionObserver | null = null;

    const detectHeadings = () => {
      // Auto-detect headings from the main content area only
      const mainElement = document.querySelector("main");
      if (!mainElement) return;

      const headingElements = mainElement.querySelectorAll("h2, h3");
      const detectedHeadings: Array<{ id: string; text: string; level: number }> = [];

      headingElements.forEach((heading) => {
        const text = heading.textContent?.trim() || "";
        if (!text) return;

        // Generate ID from text if not present
        const id = heading.id || text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .trim();

        if (!heading.id) {
          heading.id = id;
        }

        const level = parseInt(heading.tagName.charAt(1));
        detectedHeadings.push({ id, text, level });
      });

      setHeadings(detectedHeadings);

      // Set up intersection observer for active heading
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-100px 0px -66%", threshold: 0 }
      );

      headingElements.forEach((heading) => intersectionObserver!.observe(heading));
    };

    // Small delay to ensure DOM is ready after route change
    const timeoutId = setTimeout(detectHeadings, 150);

    return () => {
      clearTimeout(timeoutId);
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
    };
  }, [propHeadings, pathname]);

  // Always render the container to prevent layout shift, even when headings are loading

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="w-full border-l border-[var(--border-color)] bg-white self-start sticky top-[57px] max-h-[calc(100vh-57px)] overflow-y-auto">
      <div className="p-6">
        {headings.length > 0 ? (
          <>
            <nav className="space-y-0.5">
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHeading(heading.id);
                  }}
                  className={`block py-1.5 px-3 text-sm transition-colors ${
                    heading.level === 2
                      ? `font-semibold ${
                          activeId === heading.id
                            ? "text-[var(--text-primary)] border-l-2 border-[var(--text-primary)] pl-2.5 -ml-3"
                            : "text-[var(--text-primary)]"
                        }`
                      : `ml-4 ${
                          activeId === heading.id
                            ? "text-[var(--text-primary)]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`
                  }`}
                >
                  {heading.text}
                </a>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-[var(--border-color)] space-y-3">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-gray-50 rounded transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View as Markdown
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-gray-50 rounded transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Explain with AI Assistant
              </button>
            </div>
          </>
        ) : null}
      </div>
    </aside>
  );
}


"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

type FeedbackState = "idle" | "helpful" | "not_helpful" | "issue" | "submitted";

export default function PageFeedback() {
  const pathname = usePathname();
  const [state, setState] = useState<FeedbackState>("idle");
  const [details, setDetails] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (next: FeedbackState) => {
    if (next === "issue") {
      setState("issue");
      return;
    }
    setState(next);
    // In a real app you could send this to an API with pathname and choice
  };

  const message =
    state === "helpful"
      ? "Thanks for the feedback!"
      : state === "not_helpful"
      ? "Got it — we'll use this to improve this page."
      : state === "submitted"
      ? "Issue reported — thanks for helping us improve these docs."
      : null;

  const baseButtonClasses =
    "inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium border rounded-md sm:rounded-lg transition-colors";

  return (
    <section className="mb-20 pt-12 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <span className="text-sm font-medium text-[var(--text-secondary)] whitespace-nowrap">
          Was this page helpful?
        </span>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => handleClick("helpful")}
            className={`${baseButtonClasses} ${
              state === "helpful"
                ? "bg-green-50 border-green-500 text-green-700"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-gray-200 hover:bg-gray-50"
            }`}
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            <span className="whitespace-nowrap">It was helpful</span>
          </button>

          <button
            type="button"
            onClick={() => handleClick("not_helpful")}
            className={`${baseButtonClasses} ${
              state === "not_helpful"
                ? "bg-red-50 border-red-500 text-red-700"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-gray-200 hover:bg-gray-50"
            }`}
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
              />
            </svg>
            <span className="whitespace-nowrap">It wasn't helpful</span>
          </button>

          <button
            type="button"
            onClick={() => handleClick("issue")}
            className={`${baseButtonClasses} ${
              state === "issue"
                ? "bg-yellow-50 border-yellow-500 text-yellow-700"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-gray-200 hover:bg-gray-50"
            }`}
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="whitespace-nowrap">Report issue</span>
          </button>
        </div>
      </div>

      {state === "issue" && (
        <form
          className="mt-4 space-y-3 max-w-xl"
          onSubmit={(e) => {
            e.preventDefault();
            // Here you could POST to an API with { pathname, details, email }
            setState("submitted");
            setDetails("");
            setEmail("");
          }}
        >
          <label className="block">
            <span className="text-xs font-medium text-[var(--text-secondary)]">
              What went wrong or could be better?
            </span>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
              rows={3}
              className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-[var(--text-primary)] shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
              placeholder="Missing information, confusing explanation, broken link, etc."
            />
          </label>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <label className="flex-1">
              <span className="text-xs font-medium text-[var(--text-secondary)]">
                Email (optional, if you’d like us to follow up)
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-[var(--text-primary)] shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                placeholder="you@example.com"
              />
            </label>
            <div className="flex gap-2 pt-1 sm:pt-5">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md sm:rounded-lg transition-colors"
                style={{ backgroundColor: "#110F19" }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => {
                  setState("idle");
                  setDetails("");
                  setEmail("");
                }}
                className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-[var(--text-secondary)] rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}

      {message && (
        <p className="mt-2 text-xs text-gray-500">
          {message}{" "}
          <span className="hidden sm:inline">
            (Path: <code className="bg-gray-100 px-1 py-0.5 rounded text-[10px]">{pathname}</code>)
          </span>
        </p>
      )}
    </section>
  );
}



import { ReactNode } from "react";

interface SectionBadgeProps {
  children: ReactNode;
  className?: string;
}

export default function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium sm:text-sm text-[var(--accent)] bg-blue-50 border border-blue-200 rounded-md sm:rounded-full ${className}`}
    >
      {children}
    </span>
  );
}


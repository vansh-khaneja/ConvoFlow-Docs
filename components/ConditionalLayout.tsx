"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TableOfContents from "@/components/TableOfContents";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="w-full">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 relative">
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          {/* Always reserve space for TableOfContents to prevent layout shift */}
          <div className="w-64 flex-shrink-0 hidden xl:block">
            <TableOfContents />
          </div>
        </div>
      </div>
    </div>
  );
}


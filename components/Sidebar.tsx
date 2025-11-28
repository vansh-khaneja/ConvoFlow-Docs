"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "/" },
      { name: "Installation", href: "/installation" },
      { name: "Architecture", href: "/architecture" },
      { name: "Quick Start", href: "/quick-start" },
    ],
  },
  {
    title: "Customization",
    items: [
      { name: "Adding New Nodes", href: "/customization/adding-nodes" },
      { name: "Creating Tools", href: "/customization/creating-tools" },
      { name: "Node Configuration", href: "/customization/node-config" },
      { name: "Styling Nodes", href: "/customization/styling-nodes" },
    ],
  },
  {
    title: "Guides",
    items: [
      { name: "Building Workflows", href: "/guides/workflows" },
      { name: "API Integration", href: "/guides/api-integration" },
      { name: "External Services", href: "/guides/integrations" },
      { name: "Credentials & Configuration", href: "/guides/configuration" },
      { name: "Deployment", href: "/guides/deployment" },
      { name: "Troubleshooting", href: "/guides/troubleshooting" },
    ],
  },
  {
    title: "Reference",
    items: [
      { name: "All Nodes", href: "/reference/nodes" },
      { name: "Node Types", href: "/reference/node-types" },
      { name: "QueryNode", href: "/reference/nodes/query-node" },
      { name: "LanguageModelNode", href: "/reference/nodes/language-model-node" },
      { name: "ResponseNode", href: "/reference/nodes/response-node" },
      { name: "Tool Reference", href: "/reference/tools" },
      { name: "API Reference", href: "/reference/api" },
    ],
  },
  {
    title: "Examples",
    items: [
      { name: "Basic Chatbot", href: "/examples/basic-chatbot" },
      { name: "Customer Support Bot", href: "/examples/customer-support" },
      { name: "Document Q&A", href: "/examples/document-qa" },
      { name: "Research Assistant", href: "/examples/research-assistant" },
      { name: "Intent-Based Routing", href: "/examples/intent-routing" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["Getting Started"])
  );

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <aside className="w-64 bg-[var(--sidebar-bg)] border-r border-[var(--border-color)] flex flex-col h-screen sticky top-0">
      <div className="px-4 py-3">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src="/logo.png" 
            alt="ConvoFlow" 
            className="h-8 w-auto object-contain"
          />
          <span className="font-semibold text-base text-[var(--text-primary)]">
            ConvoFlow
          </span>
          <span className="text-xs text-[var(--text-secondary)] font-medium">
            Docs
          </span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        {navigation.map((section) => (
          <div key={section.title} className="mb-4">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between text-xs font-semibold text-[var(--text-primary)] mb-2 hover:text-[var(--accent)] transition-colors uppercase tracking-wide"
            >
              <span>{section.title}</span>
              <svg
                className={`w-3 h-3 transition-transform ${
                  expandedSections.has(section.title) ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {expandedSections.has(section.title) && (
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block px-3 py-1.5 text-sm rounded transition-colors ${
                          isActive
                            ? "bg-gray-100 text-[var(--text-primary)] font-medium"
                            : "text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--text-primary)]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}


"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [showToast, setShowToast] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleTryItClick = () => {
    setShowToast(true);
    setMobileMenuOpen(false); // Close mobile menu when clicking try it
  };

  const navLinks = [
    { href: "/reference/node-types", label: "Reference" },
    { href: "/guides/workflows", label: "Guides" },
    { href: "/examples/basic-chatbot", label: "Examples" },
    { href: "/guides/deployment", label: "Deployment" },
  ];

  return (
    <>
      <header className="border-b border-[var(--border-color)] bg-white backdrop-blur-sm sticky top-0 z-50">
        <div className="px-3 sm:px-6 py-3 flex items-center justify-between">
          {/* Left side - Logo (Mobile) and Desktop Nav */}
          <nav className="flex items-center gap-3 flex-1">
            {/* Logo and Branding - Mobile (all pages) and Desktop (home page only) */}
            <a href="/" className={`flex items-center gap-2 hover:opacity-80 transition-opacity ${isHomePage ? '' : 'lg:hidden'}`}>
              <img 
                src="/logo.png" 
                alt="ConvoFlow" 
                className="h-7 w-auto object-contain"
              />
              <span className="flex items-center gap-1">
                <span className="text-base text-[var(--text-primary)] font-semibold">
                  ConvoFlow
                </span>
                <span className="text-xs text-[var(--text-secondary)] font-medium">
                  Docs
                </span>
              </span>
            </a>
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-gray-100 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Right side - Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* GitHub Link - Hidden on mobile */}
            <a
              href="https://github.com/yourusername/convoflow"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-gray-100 rounded-md transition-colors"
              aria-label="GitHub Repository"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Version Badge - Hidden on mobile */}
            <span className="hidden sm:inline-block text-xs text-[var(--text-secondary)] px-2 py-1 bg-gray-100 rounded-md font-medium">v1.0.1</span>
            {/* Try it Button */}
            <button
              onClick={handleTryItClick}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-white rounded-md sm:rounded-lg text-xs font-medium hover:opacity-90 transition-colors cursor-pointer"
              style={{ backgroundColor: '#110F19' }}
              title="Feature under development"
            >
              <span className="hidden sm:inline">Try it</span>
              <span className="sm:hidden">Try</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                if (isHomePage) {
                  setMobileMenuOpen(!mobileMenuOpen);
                } else {
                  onMenuClick?.();
                }
              }}
              className="lg:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-gray-100 rounded-md transition-colors"
              aria-label={isHomePage ? "Toggle menu" : "Toggle sidebar"}
            >
              {isHomePage && mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only show on home page */}
        {isHomePage && (
          <div
            className={`lg:hidden border-t border-[var(--border-color)] bg-white transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[var(--border-color)] mt-2">
              <a
                href="https://github.com/yourusername/convoflow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <div className="px-3 py-2.5 text-xs text-[var(--text-secondary)]">
                Version v1.0.1
              </div>
            </div>
          </nav>
          </div>
        )}
      </header>

      {/* Toast Notification */}
      <div
        className={`fixed top-16 sm:top-20 right-4 sm:right-6 left-4 sm:left-auto z-[100] transition-all duration-300 ease-in-out ${
          showToast
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-20px] pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-md sm:rounded-lg shadow-xl border border-gray-200 px-4 py-3 flex items-center gap-3 w-full sm:min-w-[280px] sm:max-w-md">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900">Coming Soon</p>
            <p className="text-xs text-gray-600 mt-0.5">This feature is under development</p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}


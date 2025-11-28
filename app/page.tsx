import CodeBlock from "@/components/CodeBlock";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section with Image */}
      <div className="mb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 sm:space-y-8 font-[var(--font-plus-jakarta)]">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-lg sm:rounded-full">
                Documentation
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
                Build AI workflows with ConvoFlow
              </h1>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
                Create powerful AI applications using our intuitive visual workflow builder. Design, deploy, and scale your RAG systems with ease.
              </p>
              
              {/* Docker Command Section */}
              <div className="mt-8">
                <p className="text-sm font-medium text-[var(--text-secondary)] mb-3">
                  Quick Start - Build Docker Image:
                </p>
                <CodeBlock code="docker build -t convoflow-app ." language="bash" />
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  Run this command to build your ConvoFlow application
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <a
                  href="/quick-start"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-white rounded-md sm:rounded-lg text-sm font-medium hover:opacity-90 transition-colors"
                  style={{ backgroundColor: '#110F19' }}
                >
                  Get started
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/examples/basic-chatbot"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-[var(--border-color)] text-[var(--text-primary)] rounded-md sm:rounded-lg text-sm font-medium hover:bg-[var(--border-color)] transition-colors"
                >
                  View Examples
                </a>
              </div>
            </div>

            {/* Right Side - Image (Hidden on mobile, shown on desktop) */}
            <div className="hidden lg:block relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-48 w-full lg:w-[60%] pointer-events-none">
              <div className="relative rounded-3xl shadow-2xl w-full overflow-hidden" 
                   style={{
                     background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)',
                     padding: '2px'
                   }}>
                <div className="relative rounded-3xl overflow-hidden bg-white/5">
                  <img 
                    src="/canvasshot.png" 
                    alt="ConvoFlow RAG Workflow Interface" 
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: '600px' }}
                  />
                  {/* Stronger fade overlay on edges */}
                  <div className="absolute inset-0 pointer-events-none" 
                       style={{
                         background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.2) 100%)',
                         maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
                         WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)'
                       }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image - Below Content */}
          <div className="mt-8 lg:hidden">
            <div className="relative rounded-lg sm:rounded-xl lg:rounded-3xl shadow-2xl w-full overflow-hidden" 
                 style={{
                   background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)',
                   padding: '2px'
                 }}>
              <div className="relative rounded-lg sm:rounded-xl lg:rounded-3xl overflow-hidden bg-white/5">
                <img 
                  src="/canvasshot.png" 
                  alt="ConvoFlow RAG Workflow Interface" 
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '400px' }}
                />
                {/* Stronger fade overlay on edges */}
                <div className="absolute inset-0 pointer-events-none" 
                     style={{
                       background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.2) 100%)',
                       maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
                       WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)'
                     }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Getting Started Links Section */}
      <div className="mb-20 pt-8 sm:pt-12 border-t border-gray-200">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          <div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
              Install ConvoFlow
            </h3>
            <div className="space-y-2">
              <a href="/quick-start" className="block text-[var(--accent)] hover:underline font-medium">
                Quick start guide
              </a>
              <a href="/installation" className="block text-[var(--accent)] hover:underline font-medium">
                Installation
              </a>
              <a href="/guides/configuration" className="block text-[var(--accent)] hover:underline font-medium">
                Configure API keys
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
              Create your first workflow
            </h3>
            <div className="space-y-2">
              <a href="/reference/nodes" className="block text-[var(--accent)] hover:underline font-medium">
                View all available nodes
              </a>
              <a href="/guides/workflows" className="block text-[var(--accent)] hover:underline font-medium">
                Building workflows
              </a>
              <a href="/examples/basic-chatbot" className="block text-[var(--accent)] hover:underline font-medium">
                Browse workflow templates
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
              Deploy to production
            </h3>
            <div className="space-y-2">
              <a href="/reference/api" className="block text-[var(--accent)] hover:underline font-medium">
                Explore the API
              </a>
              <a href="/guides/deployment" className="block text-[var(--accent)] hover:underline font-medium">
                Deployment guide
              </a>
              <a href="/guides/integrations" className="block text-[var(--accent)] hover:underline font-medium">
                Connect external services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="mb-20 pt-12 border-t border-gray-200">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium text-[var(--text-secondary)]">Use Cases</span>
            </div>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">
              ConvoFlow powers diverse AI applications
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              From customer support to research assistants, ConvoFlow provides the building blocks for any conversational AI use case.
            </p>
            <a
              href="/examples/basic-chatbot"
              className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline font-medium"
            >
              View All Examples
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a href="/examples/customer-support" className="group border border-[var(--border-color)] rounded-lg sm:rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-md sm:rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                Customer Support Bot
                <svg className="w-4 h-4 text-[var(--text-secondary)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Automate customer inquiries with AI-powered responses and intelligent routing.
              </p>
            </a>

            <a href="/examples/document-qa" className="group border border-[var(--border-color)] rounded-lg sm:rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                Document Q&A
                <svg className="w-4 h-4 text-[var(--text-secondary)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Build RAG systems that answer questions from your knowledge base with cited sources.
              </p>
            </a>

            <a href="/examples/research-assistant" className="group border border-[var(--border-color)] rounded-lg sm:rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                Research Assistant
                <svg className="w-4 h-4 text-[var(--text-secondary)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Create AI agents that search the web and synthesize information from multiple sources.
              </p>
            </a>

            <a href="/examples/intent-routing" className="group border border-[var(--border-color)] rounded-lg sm:rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                Intent-Based Routing
                <svg className="w-4 h-4 text-[var(--text-secondary)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Classify user intents and route conversations to specialized workflow branches.
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Explore Documentation Section */}
      <div className="mb-20 pt-12 border-t border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-sm font-medium text-[var(--text-secondary)]">Explore Documentation</span>
        </div>

        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
          Everything you need to build with ConvoFlow
        </h2>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-12 max-w-3xl">
          Comprehensive guides, references, and resources to help you get the most out of ConvoFlow.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <a href="/guides/configuration" className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              Credentials & Configuration
              <svg className="w-4 h-4 text-[var(--text-secondary)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Set up API keys, environment variables, and configure your ConvoFlow instance.
            </p>
          </a>

          <a href="/examples/basic-chatbot" className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              Workflow Templates
              <svg className="w-4 h-4 text-[var(--text-secondary)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Start with pre-built workflow templates and customize them for your use case.
            </p>
          </a>

          <a href="/guides/workflows" className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              Building Workflows
              <svg className="w-4 h-4 text-[var(--text-secondary)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Learn how to design and build complex workflows with nodes and connections.
            </p>
          </a>

          <a href="/reference/api" className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              API Reference
              <svg className="w-4 h-4 text-[var(--text-secondary)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Complete API documentation for integrating ConvoFlow into your applications.
            </p>
          </a>

          <a href="/customization/adding-nodes" className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              Customization Guides
              <svg className="w-4 h-4 text-[var(--text-secondary)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Create custom nodes, tools, and extend ConvoFlow to fit your specific needs.
            </p>
          </a>

          <a href="/guides/troubleshooting" className="group bg-white border border-gray-200 rounded-lg sm:rounded-xl p-6 hover:border-[var(--accent)] hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              Troubleshooting
              <svg className="w-4 h-4 text-[var(--text-secondary)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Common issues, debugging tips, and solutions to help you resolve problems quickly.
            </p>
          </a>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mb-20 pt-12 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <span className="text-sm font-medium text-[var(--text-secondary)] whitespace-nowrap">
            Was this page helpful?
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-gray-200 rounded-md sm:rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <span className="whitespace-nowrap">It was helpful</span>
            </button>
            <button className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-gray-200 rounded-md sm:rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
              </svg>
              <span className="whitespace-nowrap">It wasn't helpful</span>
            </button>
            <button className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-gray-200 rounded-md sm:rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="whitespace-nowrap">Report Issue</span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

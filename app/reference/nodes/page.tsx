export default function NodesPage() {
  const nodeCategories = {
    "AI/LLM": [
      {
        id: "language-model",
        name: "Language Model Node",
        description: "Generate AI responses using various language models like OpenAI, Anthropic, Groq, and more.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
        inputs: ["query", "context"],
        outputs: ["response"],
        credentials: ["OPENAI_API_KEY"]
      },
      {
        id: "intent-classification",
        name: "Intent Classification Node",
        description: "Automatically classify user intents and route conversations to appropriate workflow branches.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        ),
        inputs: ["text"],
        outputs: ["intent", "confidence"],
        credentials: ["OPENAI_API_KEY"]
      },
      {
        id: "summary",
        name: "Summary Node",
        description: "Generate concise summaries of long text documents using AI language models.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        ),
        inputs: ["text"],
        outputs: ["summary"],
        credentials: ["OPENAI_API_KEY"]
      }
    ],
    "Knowledge & Retrieval": [
      {
        id: "knowledge-base-retrieval",
        name: "Knowledge Base Retrieval Node",
        description: "Retrieve relevant context from vector databases for RAG (Retrieval Augmented Generation) applications.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
        inputs: ["query"],
        outputs: ["context", "sources"],
        credentials: ["QDRANT_URL", "QDRANT_API_KEY"]
      },
      {
        id: "document-loader",
        name: "Document Loader Node",
        description: "Load and process documents from various sources for knowledge base ingestion.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        inputs: ["file_path", "source_url"],
        outputs: ["content", "metadata"],
        credentials: []
      }
    ],
    "Search & Data": [
      {
        id: "web-search",
        name: "Web Search Node",
        description: "Perform real-time web searches using Tavily API and retrieve up-to-date information.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        ),
        inputs: ["query"],
        outputs: ["response", "metadata"],
        credentials: ["TAVILY_API_KEY"]
      },
      {
        id: "query",
        name: "Query Node",
        description: "Execute database queries and retrieve structured data from your workflow database.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        ),
        inputs: ["query_string"],
        outputs: ["results"],
        credentials: []
      },
      {
        id: "custom-api",
        name: "Custom API Node",
        description: "Make HTTP requests to external APIs and integrate third-party services into workflows.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        inputs: ["url", "method", "headers", "body"],
        outputs: ["response", "status_code"],
        credentials: []
      }
    ],
    "Logic & Control": [
      {
        id: "conditional",
        name: "Conditional Node",
        description: "Create branching logic based on conditions to build dynamic conversation flows.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        ),
        inputs: ["value", "condition"],
        outputs: ["true_path", "false_path"],
        credentials: []
      },
      {
        id: "merge",
        name: "Merge Node",
        description: "Combine multiple data streams into a single output for complex workflow patterns.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 12h12m-12 5h12m-12-10V4m0 4v4m0 4v4" />
          </svg>
        ),
        inputs: ["input1", "input2", "input3"],
        outputs: ["merged_output"],
        credentials: []
      }
    ],
    "Data Processing": [
      {
        id: "text-input",
        name: "Text Input Node",
        description: "Provide static text input or templates for workflow initialization.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        ),
        inputs: [],
        outputs: ["text"],
        credentials: []
      },
      {
        id: "text-transform",
        name: "Text Transform Node",
        description: "Apply transformations to text data including formatting, case changes, and templating.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        ),
        inputs: ["text", "operation"],
        outputs: ["transformed_text"],
        credentials: []
      },
      {
        id: "regex-extractor",
        name: "Regex Extractor Node",
        description: "Extract specific patterns from text using regular expressions.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        inputs: ["text", "pattern"],
        outputs: ["matches", "groups"],
        credentials: []
      }
    ],
    "Output & Notifications": [
      {
        id: "response",
        name: "Response Node",
        description: "Define final response output for your workflow to return to users or applications.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        ),
        inputs: ["message"],
        outputs: ["final_response"],
        credentials: []
      },
      {
        id: "notification",
        name: "Notification Node",
        description: "Send notifications via SMS (Twilio), email, or other messaging services.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        ),
        inputs: ["message", "recipient"],
        outputs: ["status"],
        credentials: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN"]
      },
      {
        id: "email",
        name: "Email Node",
        description: "Send emails with customizable templates and attachments.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        inputs: ["to", "subject", "body"],
        outputs: ["status"],
        credentials: ["SMTP_HOST", "SMTP_USER"]
      }
    ],
    "Development": [
      {
        id: "debug",
        name: "Debug Node",
        description: "Inspect and debug data flowing through your workflow with detailed logging.",
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        inputs: ["data"],
        outputs: ["data"],
        credentials: []
      }
    ]
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            Reference
          </div>
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
            Available Nodes
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            ConvoFlow provides a comprehensive collection of pre-built nodes to help you create powerful AI workflows.
            Each node is designed to perform specific tasks and can be connected together to build complex applications.
          </p>
        </div>

        {/* Browse Nodes Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-sm font-medium text-[var(--text-secondary)]">Browse Node Modules</span>
          </div>

          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
            All workflow features are provided as extendable nodes in ConvoFlow.
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-12 max-w-3xl">
            Click on any of the Node categories below to learn more about their capabilities, and how to extend and use them for your custom workflows.
          </p>

          {/* Category Groups */}
          <div className="space-y-12">
            <div>
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide mb-2">
                  AI & Language Processing
                </h3>
                <p className="text-lg font-semibold text-[var(--text-primary)]">
                  Language models, intent classification, and more
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {nodeCategories["AI/LLM"].map((node) => (
                  <div
                    key={node.id}
                    className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all cursor-pointer group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {node.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                        {node.name.replace(" Node", "")}
                        <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">{node.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide mb-2">
                  Knowledge & Data Retrieval
                </h3>
                <p className="text-lg font-semibold text-[var(--text-primary)]">
                  Vector databases, document loading, and search
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[...nodeCategories["Knowledge & Retrieval"], ...nodeCategories["Search & Data"]].map((node) => (
                  <div
                    key={node.id}
                    className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all cursor-pointer group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {node.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                        {node.name.replace(" Node", "")}
                        <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">{node.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide mb-2">
                  Flow Control & Processing
                </h3>
                <p className="text-lg font-semibold text-[var(--text-primary)]">
                  Conditional logic, data transformation, and merging
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[...nodeCategories["Logic & Control"], ...nodeCategories["Data Processing"]].map((node) => (
                  <div
                    key={node.id}
                    className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all cursor-pointer group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {node.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                        {node.name.replace(" Node", "")}
                        <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">{node.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide mb-2">
                  Output & Communication
                </h3>
                <p className="text-lg font-semibold text-[var(--text-primary)]">
                  Responses, notifications, and email delivery
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[...nodeCategories["Output & Notifications"], ...nodeCategories["Development"]].map((node) => (
                  <div
                    key={node.id}
                    className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all cursor-pointer group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {node.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                        {node.name.replace(" Node", "")}
                        <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">{node.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
            Ready to build your first workflow?
          </h3>
          <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
            Start combining these nodes to create powerful AI applications. Check out our examples to see these nodes in action.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/quick-start"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#110F19' }}
            >
              Get Started
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/examples/basic-chatbot"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-[var(--border-color)] text-[var(--text-primary)] rounded-lg text-sm font-medium hover:bg-[var(--border-color)] transition-colors"
            >
              View Examples
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

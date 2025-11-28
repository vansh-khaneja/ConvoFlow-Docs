export default function NodeTypes() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full mb-4">
          Reference
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Node Types
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Complete reference of all available node types in ConvoFlow.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          I/O Nodes
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-[var(--border-color)] rounded-lg p-4 hover:border-[var(--accent)] transition-colors">
            <a href="/reference/nodes/query-node" className="block">
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">QueryNode</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Entry point for user queries (required)</p>
              <span className="text-xs text-[var(--accent)] hover:underline">View documentation →</span>
            </a>
          </div>
          <div className="border border-[var(--border-color)] rounded-lg p-4 hover:border-[var(--accent)] transition-colors">
            <a href="/reference/nodes/response-node" className="block">
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">ResponseNode</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Exit point for final responses (required)</p>
              <span className="text-xs text-[var(--accent)] hover:underline">View documentation →</span>
            </a>
          </div>
          <div className="border border-[var(--border-color)] rounded-lg p-4">
            <h3 className="font-semibold text-[var(--text-primary)] mb-1">TextInputNode</h3>
            <p className="text-sm text-[var(--text-secondary)]">Accept text input in workflows</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          AI & Language Models
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-[var(--border-color)] rounded-lg p-4 hover:border-[var(--accent)] transition-colors">
            <a href="/reference/nodes/language-model-node" className="block">
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">LanguageModelNode</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Generate responses using LLMs (OpenAI, Groq, etc.)</p>
              <span className="text-xs text-[var(--accent)] hover:underline">View documentation →</span>
            </a>
          </div>
          <div className="border border-[var(--border-color)] rounded-lg p-4">
            <h3 className="font-semibold text-[var(--text-primary)] mb-1">IntentClassificationNode</h3>
            <p className="text-sm text-[var(--text-secondary)]">Classify user intent</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Knowledge & Search
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>KnowledgeBaseRetrievalNode:</strong> Retrieve context from vector databases</li>
          <li><strong>WebSearchNode:</strong> Search the web for real-time information</li>
          <li><strong>DocumentLoaderNode:</strong> Load and process documents</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Logic & Control
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>ConditionalNode:</strong> Branch workflows based on conditions</li>
          <li><strong>MergeNode:</strong> Combine outputs from multiple nodes</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Utilities
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>TextTransformNode:</strong> Transform and manipulate text</li>
          <li><strong>RegexExtractorNode:</strong> Extract data using regex patterns</li>
          <li><strong>SummaryNode:</strong> Generate summaries of content</li>
          <li><strong>DebugNode:</strong> Inspect data at any point in workflow</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Integrations
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>CustomAPINode:</strong> Make custom API calls</li>
          <li><strong>EmailNode:</strong> Send emails</li>
          <li><strong>NotificationNode:</strong> Send notifications (SMS, etc.)</li>
        </ul>

        <div className="border-l-4 border-indigo-500 pl-6 py-4 bg-indigo-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Learn More
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/customization/adding-nodes" className="text-[var(--accent)] hover:underline">Create Custom Nodes</a></li>
            <li><a href="/examples/basic-chatbot" className="text-[var(--accent)] hover:underline">See Node Examples</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default function APIIntegration() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-4">
          Guides
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          API Integration
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Learn how to integrate ConvoFlow with external APIs and services.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          ConvoFlow provides RESTful API endpoints for programmatic access to workflows and execution. This guide covers how to integrate with the ConvoFlow API.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          API Base URL
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          The API is available at:
        </p>
        <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
          <pre className="text-gray-100 text-sm">
{`http://localhost:8000/api/v1`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Available Endpoints
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">GET /nodes</code> - List all available nodes</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">{`GET /nodes/{node_name}`}</code> - Get node schema</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">POST /nodes/execute</code> - Execute a workflow</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">GET /workflows</code> - List workflows</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">POST /workflows</code> - Create a workflow</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Example: Execute Workflow
        </h2>
        <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
          <pre className="text-gray-100 text-sm">
{`curl -X POST http://localhost:8000/api/v1/nodes/execute \\
  -H "Content-Type: application/json" \\
  -d '{
    "nodes": {
      "q1": {
        "type": "QueryNode",
        "parameters": {"query": "Hello"}
      },
      "lm1": {
        "type": "LanguageModelNode",
        "parameters": {
          "service": "openai",
          "model": "gpt-3.5-turbo"
        }
      },
      "r1": {
        "type": "ResponseNode",
        "parameters": {}
      }
    },
    "edges": [
      {"from": {"node": "q1", "output": "query"}, "to": {"node": "lm1", "input": "query"}},
      {"from": {"node": "lm1", "output": "response"}, "to": {"node": "r1", "input": "response"}}
    ]
  }'`}
          </pre>
        </div>

        <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            API Documentation
          </h3>
          <p className="text-[var(--text-primary)] mb-2">
            For complete API documentation, visit:
          </p>
          <a href="http://localhost:8000/docs" className="text-[var(--accent)] hover:underline">
            http://localhost:8000/docs
          </a>
        </div>

        {/* Next Steps Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            <a
              href="/examples/basic-chatbot"
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg px-6 py-4 transition-colors shadow-sm"
            >
              <span className="text-[var(--text-primary)] font-normal">Examples</span>
              <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/reference/nodes"
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg px-6 py-4 transition-colors shadow-sm"
            >
              <span className="text-[var(--text-primary)] font-normal">All Nodes</span>
              <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}


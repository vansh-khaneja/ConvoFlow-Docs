import CodeBlock from "@/components/CodeBlock";

export default function API() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full mb-4">
          Reference
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          API Reference
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Complete API reference for ConvoFlow backend.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          ConvoFlow provides a RESTful API for programmatic access. The API is available at <code className="bg-gray-100 px-2 py-1 rounded text-sm">/api/v1</code>.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Interactive API Documentation
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          For interactive API documentation with request/response examples, visit:
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 rounded-r-lg mb-6">
          <a href="http://localhost:8000/docs" className="text-[var(--accent)] hover:underline text-lg font-medium">
            http://localhost:8000/docs
          </a>
        </div>
        <p className="text-[var(--text-primary)] mb-4">
          Here's an example of hitting a deployed endpoint using Postman:
        </p>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-xl p-4 mb-6 overflow-hidden">
          <img 
            src="/postman pic of deploted endpoint hit.png" 
            alt="Postman showing deployed endpoint being tested" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Endpoints
        </h2>
        <div className="space-y-6 mb-8">
          <div className="border border-[var(--border-color)] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              GET /api/v1/nodes
            </h3>
            <p className="text-[var(--text-secondary)] mb-3">List all available nodes</p>
            <CodeBlock
              code={`curl http://localhost:8000/api/v1/nodes`}
              language="bash"
            />
          </div>

          <div className="border border-[var(--border-color)] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              GET /api/v1/nodes/{`{node_name}`}
            </h3>
            <p className="text-[var(--text-secondary)] mb-3">Get schema for a specific node</p>
            <CodeBlock
              code={`curl http://localhost:8000/api/v1/nodes/querynode`}
              language="bash"
            />
          </div>

          <div className="border border-[var(--border-color)] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              POST /api/v1/nodes/execute
            </h3>
            <p className="text-[var(--text-secondary)] mb-3">Execute a workflow</p>
            <CodeBlock
              code={`curl -X POST http://localhost:8000/api/v1/nodes/execute \\
  -H "Content-Type: application/json" \\
  -d '{"nodes": {...}, "edges": [...]}'`}
              language="bash"
            />
          </div>
        </div>

        <div className="border-l-4 border-indigo-500 pl-6 py-4 bg-indigo-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Full Documentation
          </h3>
          <p className="text-[var(--text-primary)]">
            Visit the interactive API docs at <a href="http://localhost:8000/docs" className="text-[var(--accent)] hover:underline">http://localhost:8000/docs</a> for complete endpoint documentation, request/response schemas, and try-it-out functionality.
          </p>
        </div>
      </div>
    </div>
  );
}


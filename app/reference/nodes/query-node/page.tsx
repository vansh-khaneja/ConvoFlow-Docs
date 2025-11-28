import CodeBlock from "@/components/CodeBlock";

export default function QueryNodePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 xl:pr-0">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full mb-4">
          Reference
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          QueryNode
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Entry point for user queries in the chatbot workflow. This node receives user input and passes it through to the next nodes in the workflow.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 id="overview" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Overview
        </h2>
        <p className="text-[var(--text-primary)] mb-4 leading-relaxed">
          The <code className="bg-gray-100 px-2 py-1 rounded text-sm">QueryNode</code> is a required entry point node that serves as the starting point for all workflows. It accepts user queries and makes them available to other nodes in the workflow.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 rounded-r-lg mb-6">
          <p className="text-sm text-[var(--text-primary)]">
            <strong>Note:</strong> Every workflow must include at least one QueryNode. This is the only way to receive user input in a workflow.
          </p>
        </div>

        <h2 id="inputs" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Inputs
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          QueryNode has no inputs. It generates output from its parameter.
        </p>

        <h2 id="outputs" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Outputs
        </h2>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-lg p-6 mb-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">query</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Type: <code className="bg-gray-200 px-2 py-0.5 rounded">string</code></p>
              <p className="text-[var(--text-primary)]">
                The processed query ready for the next node. This is typically connected to LanguageModelNode, KnowledgeBaseRetrievalNode, or other processing nodes.
              </p>
            </div>
          </div>
        </div>

        <h2 id="parameters" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Parameters
        </h2>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-lg p-6 mb-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">query <span className="text-red-500">*</span></h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Type: <code className="bg-gray-200 px-2 py-0.5 rounded">string</code> | Required: Yes</p>
              <p className="text-[var(--text-primary)] mb-2">
                The user's input query or message. This is the text that will be processed by the workflow.
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Default: <code className="bg-gray-200 px-2 py-0.5 rounded">"Hi there!"</code></p>
            </div>
          </div>
        </div>

        <h2 id="example-usage" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Example Usage
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Here's a basic workflow using QueryNode:
        </p>
        <CodeBlock
          code={`// Workflow structure:
QueryNode (query: "Hello, how are you?")
  ↓ [query output]
LanguageModelNode (service: "openai", model: "gpt-3.5-turbo")
  ↓ [response output]
ResponseNode
  → Final response: "Hello! I'm doing well, thank you for asking..."`}
          language="javascript"
        />

        <h2 id="tools-used" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Tools Used
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          QueryNode does not use any tools. It simply passes through the query parameter as output.
        </p>

        <h2 id="styling" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Styling
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          QueryNode has a distinctive pill-shaped design with a cyan border to indicate it's a start point:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Shape:</strong> Pill (rounded ends)</li>
          <li><strong>Border Color:</strong> Cyan (#06b6d4)</li>
          <li><strong>Background:</strong> Dark (#1f1f1f)</li>
          <li><strong>Subtitle:</strong> "START POINT"</li>
        </ul>

        <div className="border-l-4 border-indigo-500 pl-6 py-4 bg-indigo-50 rounded-r-lg mb-8">
          <h3 id="related-nodes" className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Related Nodes
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/reference/nodes/language-model-node" className="text-[var(--accent)] hover:underline">LanguageModelNode</a> - Process queries with AI</li>
            <li><a href="/reference/nodes/knowledge-base-retrieval-node" className="text-[var(--accent)] hover:underline">KnowledgeBaseRetrievalNode</a> - Search knowledge base</li>
            <li><a href="/reference/nodes/response-node" className="text-[var(--accent)] hover:underline">ResponseNode</a> - Output final response</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


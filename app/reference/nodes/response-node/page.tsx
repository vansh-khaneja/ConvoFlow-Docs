import CodeBlock from "@/components/CodeBlock";
import PageFeedback from "@/components/PageFeedback";
import SectionBadge from "@/components/SectionBadge";

export default function ResponseNodePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 xl:pr-0">
      <div className="mb-8">
        <SectionBadge className="mb-4">Reference</SectionBadge>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          ResponseNode
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Final output node for chatbot responses. This node formats and returns the final response to the user.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 id="overview" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Overview
        </h2>
        <p className="text-[var(--text-primary)] mb-4 leading-relaxed">
          The <code className="bg-gray-100 px-2 py-1 rounded text-sm">ResponseNode</code> is a required exit point node that serves as the final output for all workflows. It accepts processed data from other nodes and formats it as the final response.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 rounded-r-lg mb-6">
          <p className="text-sm text-[var(--text-primary)]">
            <strong>Note:</strong> Every workflow must include at least one ResponseNode. This is the only way to output final responses to users.
          </p>
        </div>

        <h2 id="inputs" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Inputs
        </h2>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-lg p-6 mb-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">input_data <span className="text-red-500">*</span></h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Type: <code className="bg-gray-200 px-2 py-0.5 rounded">string</code> | Required: Yes</p>
              <p className="text-[var(--text-primary)]">
                Combined input data from multiple connections. This can be connected from LanguageModelNode's response output, or from any other node that produces text output. If multiple nodes are connected, their outputs are automatically combined.
              </p>
            </div>
          </div>
        </div>

        <h2 id="outputs" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Outputs
        </h2>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-lg p-6 mb-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">final_response</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Type: <code className="bg-gray-200 px-2 py-0.5 rounded">string</code></p>
              <p className="text-[var(--text-primary)]">
                The final processed response that will be displayed to the user. This is the output that gets returned from the workflow execution.
              </p>
            </div>
          </div>
        </div>

        <h2 id="parameters" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Parameters
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          ResponseNode has no configurable parameters. It simply passes through the input data as the final response.
        </p>

        <h2 id="multiple-input-connections" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Multiple Input Connections
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          ResponseNode can accept multiple input connections. When multiple nodes are connected to ResponseNode, their outputs are automatically combined:
        </p>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-lg p-6 mb-6">
          <p className="text-sm text-[var(--text-primary)] mb-2">
            If you connect both a LanguageModelNode and a KnowledgeBaseRetrievalNode to ResponseNode, the outputs will be combined as:
          </p>
          <CodeBlock
            code={`"Combined inputs: [LanguageModelNode output] [KnowledgeBaseRetrievalNode output]"`}
            language="javascript"
          />
        </div>

        <h2 id="tools-used" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Tools Used
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          ResponseNode does not use any tools. It simply formats and returns the input data.
        </p>

        <h2 id="example-usage" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Example Usage
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Here's how ResponseNode is typically used in workflows:
        </p>
        <CodeBlock
          code={`// Simple workflow:
QueryNode (query: "Hello")
  ↓ [query]
LanguageModelNode
  ↓ [response]
ResponseNode
  → Final output: "Hello! How can I help you today?"`}
          language="javascript"
        />

        <CodeBlock
          code={`// Multiple inputs:
QueryNode (query: "What is ConvoFlow?")
  ↓ [query]
LanguageModelNode
  ↓ [response]
ResponseNode ← Also receives input from DebugNode
  → Final output: Combined response`}
          language="javascript"
        />

        <h2 id="error-handling" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Error Handling
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          ResponseNode automatically detects error patterns in input data and handles them gracefully:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>If input contains error prefixes like "Error:", "ERROR:", or "error:", it returns an error message</li>
          <li>If input contains error phrases like "failed to", "not configured", "not found", it flags as error</li>
          <li>Error responses are formatted as: "An error occurred in the workflow. Please check the error details."</li>
        </ul>

        <h2 id="styling" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Styling
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          ResponseNode has a distinctive pill-shaped design with a cyan border to indicate it's an end point:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Shape:</strong> Pill (rounded ends)</li>
          <li><strong>Border Color:</strong> Cyan (#06b6d4)</li>
          <li><strong>Background:</strong> Dark (#1f1f1f)</li>
          <li><strong>Subtitle:</strong> "END POINT"</li>
          <li><strong>Output Handles:</strong> Hidden (terminal node)</li>
          <li><strong>Icon:</strong> Send icon (📤)</li>
        </ul>

        <div className="border-l-4 border-indigo-500 pl-6 py-4 bg-indigo-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Related Nodes
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/reference/nodes/query-node" className="text-[var(--accent)] hover:underline">QueryNode</a> - Start of workflow</li>
            <li><a href="/reference/nodes/language-model-node" className="text-[var(--accent)] hover:underline">LanguageModelNode</a> - Generate responses</li>
            <li><a href="/reference/nodes/merge-node" className="text-[var(--accent)] hover:underline">MergeNode</a> - Combine multiple outputs</li>
          </ul>
        </div>
        <PageFeedback />
      </div>
    </div>
  );
}


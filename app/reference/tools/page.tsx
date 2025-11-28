import CodeBlock from "@/components/CodeBlock";

export default function Tools() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full mb-4">
          Reference
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Tool Reference
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Reference guide for all available tools in ConvoFlow.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Language Model Tool
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Unified interface for multiple LLM providers.
        </p>
        <CodeBlock
          code={`from tools.language_model_tool.language_model_tool import LanguageModelTool

tool = LanguageModelTool()
result = tool.generate_response(
    query="Hello",
    service="openai",
    model="gpt-3.5-turbo",
    system_prompt="You are a helpful assistant"
)`}
          language="python"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Web Search Tool
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Search the web for real-time information.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Knowledge Base Tools
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>KnowledgeBaseRetrieverTool:</strong> Retrieve context from vector databases</li>
          <li><strong>KnowledgeBaseIngesterTool:</strong> Ingest documents into vector databases</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Notification Tool
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Send notifications via various channels (SMS, email, etc.).
        </p>

        <div className="border-l-4 border-indigo-500 pl-6 py-4 bg-indigo-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Learn More
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/customization/creating-tools" className="text-[var(--accent)] hover:underline">Create Custom Tools</a></li>
            <li><a href="/customization/adding-nodes" className="text-[var(--accent)] hover:underline">Use Tools in Nodes</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


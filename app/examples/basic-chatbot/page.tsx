export default function BasicChatbot() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full mb-4">
          Examples
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Basic Chatbot
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Build a simple chatbot that responds to user queries using a language model.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          This example demonstrates how to create a basic chatbot workflow that takes user input, processes it through a language model, and returns a response.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Workflow Structure
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Here's a basic chatbot flow running in action:
        </p>
        <img 
          src="/very basic chabtot flow running.png" 
          alt="Basic chatbot flow running showing the workflow execution" 
          className="w-full h-auto rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Step-by-Step Instructions
        </h2>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 1: Add QueryNode
        </h3>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Add a QueryNode to the canvas</li>
          <li>Configure it with a default query: "Hello, how can you help me?"</li>
          <li>This node will serve as the entry point for user input</li>
        </ol>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 2: Add LanguageModelNode
        </h3>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Add a LanguageModelNode to the canvas</li>
          <li>Configure it:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Service:</strong> OpenAI (or your preferred provider)</li>
              <li><strong>Model:</strong> gpt-3.5-turbo or gpt-4</li>
              <li><strong>System Prompt:</strong> "You are a helpful AI assistant."</li>
              <li><strong>Temperature:</strong> 0.7</li>
              <li><strong>Max Tokens:</strong> 500</li>
            </ul>
          </li>
        </ol>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 3: Add ResponseNode
        </h3>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Add a ResponseNode to the canvas</li>
          <li>This node will output the final response to the user</li>
        </ol>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 4: Connect the Nodes
        </h3>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Connect QueryNode's "query" output → LanguageModelNode's "query" input</li>
          <li>Connect LanguageModelNode's "response" output → ResponseNode's "response" input</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Configuration Details
        </h2>
        <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
          <pre className="text-gray-100 text-sm">
{`QueryNode Configuration:
  - query: "Hello, how can you help me?"

LanguageModelNode Configuration:
  - service: "openai"
  - model: "gpt-3.5-turbo"
  - system_prompt: "You are a helpful AI assistant."
  - temperature: 0.7
  - max_tokens: 500

ResponseNode Configuration:
  - (No configuration needed)`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Testing the Workflow
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          You can also start with pre-built templates from the templates page:
        </p>
        <img 
          src="/templates page.png" 
          alt="Templates page showing available workflow templates" 
          className="w-full h-auto rounded-lg mb-6"
        />
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Click the "Execute" button</li>
          <li>Watch as the workflow processes:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>QueryNode outputs the user query</li>
              <li>LanguageModelNode processes the query and generates a response</li>
              <li>ResponseNode displays the final response</li>
            </ul>
          </li>
          <li>Check the ResponseNode to see the AI's response</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Enhancing the Chatbot
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          You can enhance this basic chatbot by adding:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Intent Classification:</strong> Add an IntentClassificationNode to categorize user queries</li>
          <li><strong>Knowledge Base:</strong> Add a KnowledgeBaseRetrievalNode to provide context-aware responses</li>
          <li><strong>Web Search:</strong> Add a WebSearchNode to fetch real-time information</li>
          <li><strong>Conditional Logic:</strong> Add a ConditionalNode to handle different conversation paths</li>
        </ul>

        <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Next Steps
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/examples/knowledge-base" className="text-[var(--accent)] hover:underline">Build a Knowledge Base Bot</a></li>
            <li><a href="/examples/multi-step" className="text-[var(--accent)] hover:underline">Create a Multi-Step Workflow</a></li>
            <li><a href="/guides/workflows" className="text-[var(--accent)] hover:underline">Learn Advanced Workflow Patterns</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


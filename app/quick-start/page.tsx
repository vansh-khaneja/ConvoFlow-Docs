export default function QuickStart() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
          Getting Started
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Quick Start
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Get up and running with ConvoFlow in minutes.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          This guide will walk you through creating your first chatbot workflow in ConvoFlow.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Prerequisites
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Make sure you have ConvoFlow installed and running. If not, follow the <a href="/installation" className="text-[var(--accent)] hover:underline">Installation Guide</a> first.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Step 1: Create a New Workflow
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-[var(--text-primary)]">
          <li>Open ConvoFlow in your browser (typically <code className="bg-gray-100 px-2 py-1 rounded text-sm">http://localhost:3000</code>)</li>
          <li>Click the "New Workflow" button or start with an empty canvas</li>
          <li>You'll see the workflow builder interface with a node sidebar</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Step 2: Add Nodes
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Every workflow needs at least two nodes:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>QueryNode:</strong> Entry point for user input (required)</li>
          <li><strong>ResponseNode:</strong> Exit point that returns the final response (required)</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 rounded-r-lg mb-6">
          <p className="text-[var(--text-primary)]">
            <strong>Tip:</strong> Click the "+" button or open the node sidebar to see all available nodes.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Adding a QueryNode
        </h3>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Click "Add Node" or open the node sidebar</li>
          <li>Find "QueryNode" in the "I/O" category</li>
          <li>Click on it to add it to the canvas</li>
          <li>Click on the node to configure it - set a default query like "Hello!"</li>
        </ol>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Adding a Language Model Node
        </h3>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Add a "LanguageModelNode" from the "AI & Language Models" category</li>
          <li>Configure it:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Select a service (OpenAI, Groq, etc.)</li>
              <li>Choose a model</li>
              <li>Optionally set a system prompt</li>
            </ul>
          </li>
        </ol>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Adding a ResponseNode
        </h3>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Add a "ResponseNode" from the "I/O" category</li>
          <li>This node will output the final response</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Step 3: Connect Nodes
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Connect nodes to create a flow:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Hover over the QueryNode - you'll see output handles</li>
          <li>Click and drag from the "query" output to the LanguageModelNode's "query" input</li>
          <li>Connect the LanguageModelNode's "response" output to the ResponseNode's "response" input</li>
        </ol>

        <p className="text-[var(--text-primary)] mb-4">
          Your workflow should look like this:
        </p>
        <img 
          src="/basic workflow and side bar.png" 
          alt="Basic workflow with sidebar showing node connections" 
          className="w-full h-auto rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Step 4: Configure API Keys
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          If you're using AI services, make sure to configure API keys. Here's the credentials page where you can manage all your API keys:
        </p>
        <img 
          src="/credentals page.png" 
          alt="Credentials page for configuring API keys" 
          className="w-full h-auto rounded-lg mb-6"
        />
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Go to Settings (usually in the top navigation)</li>
          <li>Navigate to "Credentials" or "API Keys"</li>
          <li>Add your API keys (OpenAI, Groq, etc.)</li>
          <li>Save the configuration</li>
        </ol>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 pl-6 py-4 rounded-r-lg mb-6">
          <p className="text-[var(--text-primary)]">
            <strong>Note:</strong> You can also set API keys via environment variables in your <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env</code> file.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Step 5: Execute the Workflow
        </h2>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Click the "Execute" or "Run" button in the workflow builder</li>
          <li>Watch as nodes execute in order (you'll see visual indicators)</li>
          <li>Check the ResponseNode to see the final output</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Step 6: Save Your Workflow
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Save your workflow for later use:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Click "Save Workflow" or use the save icon</li>
          <li>Give your workflow a name and description</li>
          <li>Your workflow is now saved and can be loaded later</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Next Steps
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Now that you've created your first workflow, explore more advanced features:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><a href="/examples/basic-chatbot" className="text-[var(--accent)] hover:underline">Build a more complex chatbot</a></li>
          <li><a href="/examples/knowledge-base" className="text-[var(--accent)] hover:underline">Add knowledge base retrieval</a></li>
          <li><a href="/guides/workflows" className="text-[var(--accent)] hover:underline">Learn about advanced workflow patterns</a></li>
          <li><a href="/customization/adding-nodes" className="text-[var(--accent)] hover:underline">Create custom nodes</a></li>
        </ul>

        <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Congratulations! 🎉
          </h3>
          <p className="text-[var(--text-primary)]">
            You've successfully created your first ConvoFlow workflow! Explore the documentation to learn about more advanced features and customization options.
          </p>
        </div>
      </div>
    </div>
  );
}


export default function CustomerSupport() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
          Examples
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Customer Support Bot
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Automate customer inquiries with AI-powered responses and intelligent routing.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          This example demonstrates how to build a customer support bot that can handle inquiries, 
          route conversations to appropriate workflows, and provide intelligent responses using AI.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Example Workflow
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Here's an example of a customer support workflow that handles various customer inquiries:
        </p>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-xl p-4 mb-6 overflow-hidden">
          <img 
            src="/customer-support.png" 
            alt="Customer support bot workflow showing query, intent classification, routing, and response nodes" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Intent Classification:</strong> Automatically categorize customer inquiries (billing, technical support, general questions, etc.)</li>
          <li><strong>Intelligent Routing:</strong> Route conversations to specialized workflow branches based on intent</li>
          <li><strong>Knowledge Base Integration:</strong> Retrieve relevant information from your knowledge base to provide accurate answers</li>
          <li><strong>Multi-Step Processing:</strong> Handle complex queries that require multiple processing stages</li>
          <li><strong>Context-Aware Responses:</strong> Use language models to generate personalized, context-aware responses</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Workflow Components
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-[var(--text-primary)]">
          <li><strong>QueryNode:</strong> Captures customer inquiries and questions</li>
          <li><strong>IntentClassificationNode:</strong> Analyzes the query to determine the customer's intent</li>
          <li><strong>ConditionalNode:</strong> Routes the conversation to different branches based on intent classification</li>
          <li><strong>KnowledgeBaseRetrievalNode:</strong> Retrieves relevant information from your knowledge base</li>
          <li><strong>LanguageModelNode:</strong> Generates intelligent responses using the retrieved context</li>
          <li><strong>ResponseNode:</strong> Returns the final response to the customer</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Use Cases
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Handle common customer questions 24/7</li>
          <li>Route complex issues to appropriate departments</li>
          <li>Provide instant answers from your documentation</li>
          <li>Escalate issues that require human intervention</li>
          <li>Track and analyze customer inquiry patterns</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Configuration Tips
        </h2>
        <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
          <pre className="text-gray-100 text-sm">
{`Intent Classification Setup:
  - Configure intent categories (billing, support, sales, etc.)
  - Set confidence thresholds for routing decisions
  - Define fallback behavior for unclear intents

Knowledge Base Configuration:
  - Connect your vector database
  - Set retrieval parameters (top_k, similarity threshold)
  - Configure chunking and embedding strategies

Language Model Settings:
  - Use appropriate system prompts for customer support
  - Set temperature for consistent responses
  - Configure max tokens for response length`}
          </pre>
        </div>

        <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Learn More
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/examples/intent-routing" className="text-[var(--accent)] hover:underline">Intent-Based Routing</a></li>
            <li><a href="/examples/document-qa" className="text-[var(--accent)] hover:underline">Document Q&A</a></li>
            <li><a href="/guides/workflows" className="text-[var(--accent)] hover:underline">Workflow Patterns</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


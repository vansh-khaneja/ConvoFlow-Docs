export default function IntentRouting() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-4">
          Examples
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Intent-Based Routing
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Classify user intents and route conversations to specialized workflow branches.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          This example demonstrates how to build an intent-based routing system that automatically 
          classifies user queries and routes them to specialized workflow branches for optimal handling.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Example Workflow
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Here's an example of an intent-based routing workflow that classifies and routes conversations:
        </p>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-xl p-4 mb-6 overflow-hidden">
          <img 
            src="/intent cloassify.png" 
            alt="Intent-based routing workflow showing query, intent classification, conditional routing, and specialized branches" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Intent Classification:</strong> Automatically identify user intent from natural language queries</li>
          <li><strong>Smart Routing:</strong> Route conversations to specialized workflow branches based on intent</li>
          <li><strong>Multiple Branches:</strong> Handle different intents with dedicated processing paths</li>
          <li><strong>Fallback Handling:</strong> Manage unclear or unclassified intents gracefully</li>
          <li><strong>Confidence Scoring:</strong> Use confidence thresholds to ensure accurate routing</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Workflow Components
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-[var(--text-primary)]">
          <li><strong>QueryNode:</strong> Captures user queries and questions</li>
          <li><strong>IntentClassificationNode:</strong> Analyzes the query to determine user intent</li>
          <li><strong>ConditionalNode:</strong> Routes the conversation based on classified intent</li>
          <li><strong>Specialized Branches:</strong> Different workflow paths for each intent type:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Billing inquiries → Billing support workflow</li>
              <li>Technical issues → Technical support workflow</li>
              <li>Product questions → Sales/product information workflow</li>
              <li>General questions → General FAQ workflow</li>
            </ul>
          </li>
          <li><strong>ResponseNode:</strong> Returns the appropriate response from the selected branch</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Use Cases
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Route customer support inquiries to appropriate departments</li>
          <li>Direct user queries to specialized knowledge bases</li>
          <li>Handle different types of requests with optimized workflows</li>
          <li>Scale support operations by automating routing decisions</li>
          <li>Improve response accuracy by using specialized processing paths</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Configuration Tips
        </h2>
        <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
          <pre className="text-gray-100 text-sm">
{`Intent Classification Setup:
  - Define intent categories (billing, support, sales, etc.)
  - Configure classification model or rules
  - Set confidence thresholds for routing

Intent Categories Example:
  - billing: Payment, subscription, refund questions
  - support: Technical issues, troubleshooting
  - sales: Product information, pricing, features
  - general: FAQs, general inquiries

Conditional Routing:
  - Map intents to workflow branches
  - Configure fallback behavior
  - Handle edge cases and ambiguous queries

Branch Configuration:
  - Each branch can have specialized nodes
  - Use appropriate knowledge bases per branch
  - Configure branch-specific prompts`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Best Practices
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Start with a small set of well-defined intent categories</li>
          <li>Use training examples to improve classification accuracy</li>
          <li>Set appropriate confidence thresholds to avoid misrouting</li>
          <li>Implement a fallback branch for unclear intents</li>
          <li>Monitor and refine intent categories based on real usage</li>
          <li>Test routing logic with diverse query types</li>
        </ul>

        <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Learn More
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/examples/customer-support" className="text-[var(--accent)] hover:underline">Customer Support Bot</a></li>
            <li><a href="/examples/multi-step" className="text-[var(--accent)] hover:underline">Multi-Step Workflows</a></li>
            <li><a href="/guides/workflows" className="text-[var(--accent)] hover:underline">Workflow Patterns</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


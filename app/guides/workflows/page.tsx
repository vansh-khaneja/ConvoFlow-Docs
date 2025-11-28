export default function Workflows() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-4">
          Guides
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Building Workflows
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Learn how to design and build effective chatbot workflows.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          Workflows in ConvoFlow are visual representations of conversation flows. This guide covers best practices and patterns for building effective workflows.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Workflow Basics
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Every workflow must include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>QueryNode:</strong> Entry point for user input (exactly one required)</li>
          <li><strong>ResponseNode:</strong> Exit point for final output (exactly one required)</li>
          <li><strong>Processing Nodes:</strong> One or more nodes that process the data</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Common Workflow Patterns
        </h2>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Linear Flow
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Simple sequential processing. Here's an example of a basic workflow with sidebar:
        </p>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-xl p-4 mb-6 overflow-hidden">
          <img 
            src="/basic workflow and side bar.png" 
            alt="Basic workflow with sidebar showing node connections" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Conditional Branching
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Use ConditionalNode to create different paths based on conditions. Here's an example of a condition-based workflow:
        </p>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-xl p-4 mb-6 overflow-hidden">
          <img 
            src="/condtion based workflow.png" 
            alt="Condition-based workflow showing branching logic" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Parallel Processing
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Process multiple paths simultaneously and merge results. Here's an example of a parallel workflow:
        </p>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-xl p-4 mb-6 overflow-hidden">
          <img 
            src="/parllel workflow.png" 
            alt="Parallel workflow showing multiple paths processed simultaneously" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Best Practices
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Keep it simple:</strong> Start with simple workflows and add complexity gradually</li>
          <li><strong>Use meaningful names:</strong> Name your workflows and nodes clearly</li>
          <li><strong>Handle errors:</strong> Consider error paths and edge cases</li>
          <li><strong>Test frequently:</strong> Test your workflow as you build it</li>
          <li><strong>Document:</strong> Add comments or documentation for complex logic</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Tips for Complex Workflows
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Break complex workflows into smaller, reusable sub-workflows</li>
          <li>Use MergeNode to combine outputs from multiple nodes</li>
          <li>Use DebugNode to inspect data at different points</li>
          <li>Save intermediate results for debugging</li>
        </ul>

        <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Learn More
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/examples/basic-chatbot" className="text-[var(--accent)] hover:underline">Basic Chatbot Example</a></li>
            <li><a href="/examples/multi-step" className="text-[var(--accent)] hover:underline">Multi-Step Workflow</a></li>
            <li><a href="/reference/node-types" className="text-[var(--accent)] hover:underline">Node Reference</a></li>
          </ul>
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


import PageFeedback from "@/components/PageFeedback";
import SectionBadge from "@/components/SectionBadge";

export default function MultiStep() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <SectionBadge className="mb-4">Examples</SectionBadge>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Multi-Step Workflow
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Create complex workflows with multiple processing steps.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          This example demonstrates building a multi-step workflow that processes user input through several stages.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Example Workflow
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Here's an example of a multi-step workflow with multiple processing stages:
        </p>
        <img 
          src="/multistep workflow.png" 
          alt="Multi-step workflow showing multiple processing stages" 
          className="w-full h-auto rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Key Concepts
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Use ConditionalNode for branching logic</li>
          <li>Use MergeNode to combine multiple data sources</li>
          <li>Process data through multiple stages</li>
          <li>Handle different conversation paths</li>
        </ul>

        <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Learn More
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/guides/workflows" className="text-[var(--accent)] hover:underline">Workflow Patterns</a></li>
            <li><a href="/examples/basic-chatbot" className="text-[var(--accent)] hover:underline">Basic Chatbot</a></li>
          </ul>
        </div>
        <PageFeedback />
      </div>
    </div>
  );
}


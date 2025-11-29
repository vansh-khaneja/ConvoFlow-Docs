import CodeBlock from "@/components/CodeBlock";
import PageFeedback from "@/components/PageFeedback";
import SectionBadge from "@/components/SectionBadge";

export default function ResearchAssistant() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <SectionBadge className="mb-4">Examples</SectionBadge>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Research Assistant
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Create AI agents that search the web and synthesize information from multiple sources.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          This example demonstrates how to build a research assistant that can search the web, 
          gather information from multiple sources, and synthesize comprehensive answers.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Example Workflow
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Here's an example of a research assistant workflow that searches and synthesizes information:
        </p>
        <img 
          src="/research assitant.png" 
          alt="Research assistant workflow showing query, web search, information synthesis, and response nodes" 
          className="w-full h-auto rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Web Search:</strong> Search the internet for real-time information on any topic</li>
          <li><strong>Multi-Source Aggregation:</strong> Gather information from multiple web sources</li>
          <li><strong>Information Synthesis:</strong> Combine and analyze information from different sources</li>
          <li><strong>Source Attribution:</strong> Provide citations and links to original sources</li>
          <li><strong>Comprehensive Answers:</strong> Generate detailed responses based on multiple data points</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Workflow Components
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-[var(--text-primary)]">
          <li><strong>QueryNode:</strong> Captures research questions and topics</li>
          <li><strong>WebSearchNode:</strong> Searches the web for relevant information</li>
          <li><strong>ContentExtractionNode:</strong> Extracts and processes content from web pages</li>
          <li><strong>MergeNode:</strong> Combines information from multiple sources</li>
          <li><strong>LanguageModelNode:</strong> Synthesizes information into comprehensive answers</li>
          <li><strong>ResponseNode:</strong> Returns the research findings with source citations</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Use Cases
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Research current events and news topics</li>
          <li>Gather information about products and services</li>
          <li>Compare information from multiple sources</li>
          <li>Stay updated on industry trends and developments</li>
          <li>Answer questions requiring up-to-date information</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Configuration Tips
        </h2>
        <CodeBlock
          code={`Web Search Configuration:
  - Configure search API (Google, Bing, etc.)
  - Set number of results to retrieve
  - Filter by date, domain, or language

Content Extraction:
  - Set up web scraping parameters
  - Configure content cleaning and filtering
  - Handle different content formats

Information Synthesis:
  - Configure how to combine multiple sources
  - Set up fact-checking and verification
  - Define citation format

Response Generation:
  - Use prompts that emphasize synthesis
  - Include source attribution requirements
  - Configure response length and detail level`}
          language="text"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Best Practices
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Use multiple search queries to get comprehensive coverage</li>
          <li>Filter and rank sources by reliability and relevance</li>
          <li>Cross-reference information from multiple sources</li>
          <li>Always provide source citations for transparency</li>
          <li>Handle cases where information is conflicting or unavailable</li>
        </ul>

        <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Learn More
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/examples/multi-step" className="text-[var(--accent)] hover:underline">Multi-Step Workflows</a></li>
            <li><a href="/examples/document-qa" className="text-[var(--accent)] hover:underline">Document Q&A</a></li>
            <li><a href="/guides/workflows" className="text-[var(--accent)] hover:underline">Workflow Patterns</a></li>
          </ul>
        </div>
        <PageFeedback />
      </div>
    </div>
  );
}


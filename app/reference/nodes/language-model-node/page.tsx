import CodeBlock from "@/components/CodeBlock";
import PageFeedback from "@/components/PageFeedback";
import SectionBadge from "@/components/SectionBadge";

export default function LanguageModelNodePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 xl:pr-0">
      <div className="mb-8">
        <SectionBadge className="mb-4">Reference</SectionBadge>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          LanguageModelNode
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Generates AI responses using language models from OpenAI, Groq, Anthropic, and more. This is the core AI node for generating conversational responses.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 id="overview" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Overview
        </h2>
        <p className="text-[var(--text-primary)] mb-4 leading-relaxed">
          The <code className="bg-gray-100 px-2 py-1 rounded text-sm">LanguageModelNode</code> is one of the most commonly used nodes in ConvoFlow. It takes a query (and optional context) and generates AI-powered responses using various language model services.
        </p>

        <h2 id="inputs" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Inputs
        </h2>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-lg p-6 mb-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">query <span className="text-red-500">*</span></h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Type: <code className="bg-gray-200 px-2 py-0.5 rounded">string</code> | Required: Yes</p>
              <p className="text-[var(--text-primary)]">
                The main text query to send to the language model. Typically connected from QueryNode's output.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">context</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Type: <code className="bg-gray-200 px-2 py-0.5 rounded">string</code> | Required: No</p>
              <p className="text-[var(--text-primary)]">
                Additional context from knowledge base or other sources. This is often connected from KnowledgeBaseRetrievalNode's output to provide relevant information for the AI to use in its response.
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
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">response</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Type: <code className="bg-gray-200 px-2 py-0.5 rounded">string</code></p>
              <p className="text-[var(--text-primary)]">
                The generated response from the language model. This is typically connected to ResponseNode for final output.
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
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">service <span className="text-red-500">*</span></h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Type: <code className="bg-gray-200 px-2 py-0.5 rounded">string</code> | Required: Yes</p>
              <p className="text-[var(--text-primary)] mb-2">
                Language model service to use. Available options:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-[var(--text-primary)] mb-2">
                <li><code className="bg-gray-200 px-1.5 py-0.5 rounded">openai</code> - OpenAI models (GPT-3.5, GPT-4, etc.)</li>
                <li><code className="bg-gray-200 px-1.5 py-0.5 rounded">groq</code> - Groq models (fast inference)</li>
                <li><code className="bg-gray-200 px-1.5 py-0.5 rounded">ollama</code> - Local Ollama models</li>
              </ul>
              <p className="text-sm text-[var(--text-secondary)]">Default: <code className="bg-gray-200 px-2 py-0.5 rounded">"openai"</code></p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">model</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Type: <code className="bg-gray-200 px-2 py-0.5 rounded">string</code> | Required: No</p>
              <p className="text-[var(--text-primary)] mb-2">
                Specific model to use. If left empty, the default model for the selected service will be used.
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Default: <code className="bg-gray-200 px-2 py-0.5 rounded">""</code> (uses service default)</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">system_prompt</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Type: <code className="bg-gray-200 px-2 py-0.5 rounded">string</code> | Required: No</p>
              <p className="text-[var(--text-primary)] mb-2">
                System/base prompt to set AI behavior. This defines the role and personality of the AI assistant.
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Default: <code className="bg-gray-200 px-2 py-0.5 rounded">"You are a helpful AI assistant."</code></p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">temperature</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Type: <code className="bg-gray-200 px-2 py-0.5 rounded">float</code> | Required: No</p>
              <p className="text-[var(--text-primary)] mb-2">
                Creativity/randomness level. Range: 0.0 to 1.0. Lower values (0.0-0.5) produce more focused and consistent responses. Higher values (0.6-1.0) produce more creative and varied responses.
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Default: <code className="bg-gray-200 px-2 py-0.5 rounded">0.7</code></p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">max_tokens</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">Type: <code className="bg-gray-200 px-2 py-0.5 rounded">integer</code> | Required: No</p>
              <p className="text-[var(--text-primary)] mb-2">
                Maximum number of tokens in the response. Controls the length of the generated text.
              </p>
              <p className="text-sm text-[var(--text-secondary)]">Default: <code className="bg-gray-200 px-2 py-0.5 rounded">500</code></p>
            </div>
          </div>
        </div>

        <h2 id="tools-used" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Tools Used
        </h2>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-lg p-6 mb-6">
          <p className="text-[var(--text-primary)] mb-4">
            LanguageModelNode uses the <code className="bg-gray-200 px-2 py-1 rounded text-sm">LanguageModelTool</code> to interact with language model APIs.
          </p>
          <CodeBlock
            code={`from tools.language_model_tool.language_model_tool import LanguageModelTool

tool = LanguageModelTool()
result = tool.generate_response(
    query="Hello, how are you?",
    service="openai",
    model="gpt-3.5-turbo",
    system_prompt="You are a helpful assistant.",
    temperature=0.7,
    max_tokens=500
)`}
            language="python"
          />
          <p className="text-sm text-[var(--text-secondary)]">
            Learn more about creating tools: <a href="/customization/creating-tools" className="text-[var(--accent)] hover:underline">Creating Tools</a>
          </p>
        </div>

        <h2 id="required-credentials" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Required Credentials
        </h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 pl-6 py-4 rounded-r-lg mb-6">
          <p className="text-sm text-[var(--text-primary)] mb-2">
            <strong>Required API Keys:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-[var(--text-primary)]">
            <li><code className="bg-gray-200 px-2 py-0.5 rounded">OPENAI_API_KEY</code> - Required for OpenAI service</li>
            <li><code className="bg-gray-200 px-2 py-0.5 rounded">GROQ_API_KEY</code> - Required for Groq service</li>
            <li><code className="bg-gray-200 px-2 py-0.5 rounded">ANTHROPIC_API_KEY</code> - Required for Anthropic service</li>
          </ul>
          <p className="text-sm text-[var(--text-secondary)] mt-2">
            Configure these in your environment variables or through the ConvoFlow admin interface.
          </p>
        </div>

        <h2 id="example-usage" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Example Usage
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Here's a common workflow pattern using LanguageModelNode:
        </p>
        <CodeBlock
          code={`// Basic AI Chatbot:
QueryNode (query: "What is AI?")
  ↓ [query]
LanguageModelNode (
  service: "openai",
  model: "gpt-3.5-turbo",
  system_prompt: "You are a helpful assistant.",
  temperature: 0.7
)
  ↓ [response]
ResponseNode
  → "AI, or Artificial Intelligence, is..."`}
          language="javascript"
        />

        <CodeBlock
          code={`// RAG (Retrieval-Augmented Generation):
QueryNode (query: "How do I install ConvoFlow?")
  ↓ [query]
KnowledgeBaseRetrievalNode (collection: "docs")
  ↓ [response as context]
LanguageModelNode (
  service: "openai",
  system_prompt: "Answer based on the provided context.",
  temperature: 0.3
)
  ↓ [response]
ResponseNode
  → "To install ConvoFlow, first..."`}
          language="javascript"
        />

        <h2 id="styling" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Styling
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          LanguageModelNode has a distinctive design to indicate it's an AI node:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Shape:</strong> Rounded rectangle</li>
          <li><strong>Border Color:</strong> Purple (#a78bfa)</li>
          <li><strong>Background:</strong> Dark (#1f1f1f)</li>
          <li><strong>Subtitle:</strong> "GENERATES TEXT"</li>
          <li><strong>Icon:</strong> Sparkles icon (✨)</li>
        </ul>

        <div className="border-l-4 border-indigo-500 pl-6 py-4 bg-indigo-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Related Nodes
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/reference/nodes/query-node" className="text-[var(--accent)] hover:underline">QueryNode</a> - Provide input queries</li>
            <li><a href="/reference/nodes/knowledge-base-retrieval-node" className="text-[var(--accent)] hover:underline">KnowledgeBaseRetrievalNode</a> - Provide context</li>
            <li><a href="/reference/nodes/response-node" className="text-[var(--accent)] hover:underline">ResponseNode</a> - Output final response</li>
          </ul>
        </div>
        <PageFeedback />
      </div>
    </div>
  );
}


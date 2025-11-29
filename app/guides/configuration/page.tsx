import CodeBlock from "@/components/CodeBlock";
import PageFeedback from "@/components/PageFeedback";
import SectionBadge from "@/components/SectionBadge";

export default function Configuration() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <SectionBadge className="mb-4">Guides</SectionBadge>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Credentials & Configuration
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Set up API keys, environment variables, and configure your ConvoFlow instance.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          ConvoFlow requires API keys for various AI services and external integrations. This guide covers how to configure credentials through the UI and environment variables.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Using the Credentials Page
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          The easiest way to configure API keys is through the ConvoFlow credentials page. This provides a secure interface for managing all your API keys:
        </p>
        <img 
          src="/credentals page.png" 
          alt="Credentials page for configuring API keys" 
          className="w-full h-auto rounded-lg mb-6"
        />
        <p className="text-[var(--text-primary)] mb-4">
          On the credentials page, you can:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Add and manage API keys for different services</li>
          <li>Update existing credentials</li>
          <li>View which services are configured</li>
          <li>Test API key connections</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Required API Keys
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Depending on which nodes you use, you'll need different API keys:
        </p>

        <div className="bg-gray-50 border border-[var(--border-color)] rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
            AI/LLM Services
          </h3>
          <ul className="space-y-3 text-[var(--text-primary)]">
            <li>
              <strong>OpenAI:</strong> Required for LanguageModelNode when using GPT models
              <CodeBlock
                code={`OPENAI_API_KEY=sk-your-key-here`}
                language="bash"
              />
            </li>
            <li>
              <strong>Anthropic:</strong> Required for Claude models
              <CodeBlock
                code={`ANTHROPIC_API_KEY=your-anthropic-key`}
                language="bash"
              />
            </li>
            <li>
              <strong>Groq:</strong> Required for fast inference with Groq models
              <CodeBlock
                code={`GROQ_API_KEY=your-groq-key`}
                language="bash"
              />
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-[var(--border-color)] rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
            Database & Storage
          </h3>
          <ul className="space-y-3 text-[var(--text-primary)]">
            <li>
              <strong>PostgreSQL:</strong> Database connection string
              <CodeBlock
                code={`DATABASE_URL=postgresql://user:password@host:5432/convoflow`}
                language="bash"
              />
            </li>
            <li>
              <strong>Vector Database:</strong> For knowledge base features (if using external vector DB)
              <CodeBlock
                code={`VECTOR_DB_URL=your-vector-db-connection-string`}
                language="bash"
              />
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Environment Variables
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          You can also configure credentials using environment variables. Create a <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env</code> file in your project root:
        </p>
        <CodeBlock
          code={`# AI Service API Keys
OPENAI_API_KEY=sk-your-key-here
ANTHROPIC_API_KEY=your-anthropic-key
GROQ_API_KEY=your-groq-key

# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/convoflow
POSTGRES_PASSWORD=your-secure-password

# Optional: Other Service Keys
CUSTOM_API_KEY=your-custom-service-key

# Application Settings
NODE_ENV=development
PORT=8000`}
          language="bash"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Security Best Practices
        </h2>
        <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Important Security Guidelines
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li>Never commit API keys or secrets to version control</li>
            <li>Use environment variables or the credentials UI for sensitive data</li>
            <li>Rotate API keys regularly, especially if they're exposed</li>
            <li>Use different keys for development and production environments</li>
            <li>Restrict API key permissions to only what's necessary</li>
            <li>Monitor API usage to detect unauthorized access</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Verifying Configuration
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          After configuring your API keys, you can verify they're working:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Check the credentials page - configured services should show as active</li>
          <li>Test a workflow that uses the configured service</li>
          <li>Check the browser console or logs for any authentication errors</li>
          <li>Verify API key permissions match your workflow requirements</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Troubleshooting
        </h2>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
            Common Issues
          </h3>
          <ul className="space-y-3 text-[var(--text-primary)]">
            <li>
              <strong>API key not working:</strong> Verify the key is correct and has the right permissions. Check for extra spaces or characters.
            </li>
            <li>
              <strong>Environment variables not loading:</strong> Make sure your <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env</code> file is in the root directory and restart the application.
            </li>
            <li>
              <strong>Credentials page not accessible:</strong> Ensure you're logged in and have the necessary permissions.
            </li>
            <li>
              <strong>Rate limiting errors:</strong> Check your API key usage limits and consider upgrading your plan if needed.
            </li>
          </ul>
        </div>

        {/* Next Steps Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            <a
              href="/installation"
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg px-6 py-4 transition-colors shadow-sm"
            >
              <span className="text-[var(--text-primary)] font-normal">Installation</span>
              <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/quick-start"
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg px-6 py-4 transition-colors shadow-sm"
            >
              <span className="text-[var(--text-primary)] font-normal">Quick Start</span>
              <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
        <PageFeedback />
      </div>
    </div>
  );
}



import CodeBlock from "@/components/CodeBlock";

export default function Deployment() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-4">
          Guides
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Deployment
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Deploy ConvoFlow to production environments.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          This guide covers deploying ConvoFlow to production using Docker or traditional hosting methods.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Docker Deployment (Recommended)
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          The easiest way to deploy ConvoFlow is using Docker Compose:
        </p>
        <CodeBlock
          code={`# Build and start services
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down`}
          language="bash"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Production Considerations
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Once deployed, you'll see your workflow in the sidebar:
        </p>
        <img 
          src="/deploed workflow in sidebar.png" 
          alt="Deployed workflow shown in sidebar" 
          className="w-full h-auto rounded-lg mb-6"
        />
        <p className="text-[var(--text-primary)] mb-4 mt-6">
          The toolbar will also show the deployed status:
        </p>
        <img 
          src="/toolbar showing deployed.png"
          alt="Toolbar showing deployed status" 
          className="w-full h-auto rounded-lg mb-6"
        />
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Environment Variables:</strong> Use secure environment variable management</li>
          <li><strong>Database:</strong> Use managed PostgreSQL for production</li>
          <li><strong>SSL/TLS:</strong> Configure HTTPS for secure connections</li>
          <li><strong>Backup:</strong> Set up regular database backups</li>
          <li><strong>Monitoring:</strong> Implement logging and monitoring</li>
          <li><strong>Scaling:</strong> Consider horizontal scaling for high traffic</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Environment Configuration
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Configure production environment variables:
        </p>
        <CodeBlock
          code={`# Production .env
NODE_ENV=production
POSTGRES_PASSWORD=secure-password-here
DATABASE_URL=postgresql://user:pass@host:5432/convoflow
OPENAI_API_KEY=your-key-here
# ... other API keys`}
          language="bash"
        />

        <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Security Best Practices
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li>Never commit API keys or secrets to version control</li>
            <li>Use environment variables or secret management services</li>
            <li>Enable CORS only for trusted domains</li>
            <li>Implement rate limiting</li>
            <li>Use HTTPS in production</li>
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
              href="/guides/troubleshooting"
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg px-6 py-4 transition-colors shadow-sm"
            >
              <span className="text-[var(--text-primary)] font-normal">Troubleshooting</span>
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


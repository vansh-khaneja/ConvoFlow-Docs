import CodeBlock from "@/components/CodeBlock";

export default function Installation() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
          Getting Started
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Installation
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Get ConvoFlow up and running on your local machine or production environment.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 id="prerequisites" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Prerequisites
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Before installing ConvoFlow, ensure you have the following installed:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-[var(--text-primary)]">
          <li><strong>Docker Desktop</strong> (for Docker setup) or</li>
          <li><strong>Node.js</strong> &gt;= 18.0.0 and <strong>Python</strong> &gt;= 3.10 (for local development)</li>
          <li><strong>PostgreSQL</strong> (included in Docker setup, or install separately for local development)</li>
          <li><strong>Git</strong> for cloning the repository</li>
        </ul>

        <h2 id="docker-installation" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Docker Installation (Recommended)
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          The easiest way to get started with ConvoFlow is using Docker Compose. This method sets up all services automatically.
        </p>

        <CodeBlock
          code={`# 1. Clone the repository
git clone <repository-url>
cd convoflow-v2

# 2. Create .env file
# Copy the example .env file and configure it
cp .env.example .env

# 3. Start the application
docker-compose up --build`}
          language="bash"
        />

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Environment Variables
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Create a <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env</code> file in the root directory. You can also configure credentials through the UI:
        </p>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-xl p-4 mb-4 overflow-hidden">
          <img 
            src="/credentals page.png" 
            alt="Credentials page for configuring API keys" 
            className="w-full h-auto rounded-lg"
          />
        </div>
        <CodeBlock
          code={`# Database (PostgreSQL included in Docker)
POSTGRES_PASSWORD=your-secure-password

# API Keys (configure via UI or here)
OPENAI_API_KEY=sk-your-key-here
GROQ_API_KEY=your-groq-key
ANTHROPIC_API_KEY=your-anthropic-key

# Add other API keys as needed`}
          language="bash"
        />

        <h2 id="local-development-setup" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Local Development Setup
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          For local development, you'll need to set up both the backend and frontend separately.
        </p>

        <h3 id="step-1-install-dependencies" className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 1: Install Dependencies
        </h3>
        <CodeBlock
          code={`# Install all dependencies (frontend + backend)
npm run install:all

# Or install separately:
# Frontend
cd frontend && npm install

# Backend
cd backend && pip install -r requirements.txt`}
          language="bash"
        />

        <h3 id="step-2-set-up-database" className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 2: Set Up Database
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Make sure PostgreSQL is running and create a database:
        </p>
        <CodeBlock
          code={`# Create database
createdb convoflow

# Or using psql
psql -U postgres
CREATE DATABASE convoflow;`}
          language="bash"
        />

        <h3 id="step-3-configure-environment" className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 3: Configure Environment
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Create a <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env</code> file in the root:
        </p>
        <CodeBlock
          code={`POSTGRES_DB_URL_BASE=postgresql://convoflow:password@localhost:5432/convoflow
OPENAI_API_KEY=sk-your-key-here
GROQ_API_KEY=your-groq-key`}
          language="bash"
        />

        <h3 id="step-4-start-development-servers" className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 4: Start Development Servers
        </h3>
        <CodeBlock
          code={`# Start both backend and frontend
npm run dev

# Or start separately:
# Backend (port 8000)
npm run dev:backend

# Frontend (port 3000)
npm run dev:frontend`}
          language="bash"
        />

        <h2 id="access-the-application" className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Access the Application
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Once the servers are running, access the application:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-[var(--text-primary)]">
          <li><strong>Frontend:</strong> <a href="http://localhost:3000" className="text-[var(--accent)] hover:underline">http://localhost:3000</a></li>
          <li><strong>Backend API:</strong> <a href="http://localhost:8000" className="text-[var(--accent)] hover:underline">http://localhost:8000</a></li>
          <li><strong>API Documentation:</strong> <a href="http://localhost:8000/docs" className="text-[var(--accent)] hover:underline">http://localhost:8000/docs</a></li>
        </ul>

        <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg mb-8">
          <h3 id="next-steps" className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Next Steps
          </h3>
          <p className="text-[var(--text-primary)] mb-2">
            After installation, check out:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/quick-start" className="text-[var(--accent)] hover:underline">Quick Start Guide</a></li>
            <li><a href="/architecture" className="text-[var(--accent)] hover:underline">Architecture Overview</a></li>
            <li><a href="/guides/workflows" className="text-[var(--accent)] hover:underline">Building Your First Workflow</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


import CodeBlock from "@/components/CodeBlock";
import PageFeedback from "@/components/PageFeedback";
import SectionBadge from "@/components/SectionBadge";

export default function Architecture() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <SectionBadge className="mb-4">Getting Started</SectionBadge>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Architecture
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Understand how ConvoFlow is structured and how components interact.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          ConvoFlow follows a modular architecture with clear separation between the frontend, backend, and core components. This architecture enables easy customization and extension.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          System Overview
        </h2>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">Frontend</h3>
              <p className="text-sm text-[var(--text-secondary)]">Next.js React UI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">Backend</h3>
              <p className="text-sm text-[var(--text-secondary)]">FastAPI Python API</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">Database</h3>
              <p className="text-sm text-[var(--text-secondary)]">PostgreSQL</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Project Structure
        </h2>
        <CodeBlock
          code={`convoflow-v2/
├── frontend/              # Next.js React frontend
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx      # Home page (workflow dashboard)
│   │   └── workflow/     # Workflow builder page
│   ├── components/        # React components
│   │   ├── canvas/       # React Flow canvas components
│   │   └── workflow/     # Workflow-specific components
│   ├── hooks/            # Custom React hooks
│   │   ├── useWorkflowState.ts
│   │   ├── useWorkflowQueries.ts
│   │   └── useWorkflowExecution.ts
│   └── lib/              # Utility functions
│
├── backend/              # FastAPI Python backend
│   ├── api/              # API endpoints
│   │   └── v1/           # API version 1
│   │       ├── nodes.py  # Node-related endpoints
│   │       └── workflows.py
│   ├── nodes/            # Workflow node implementations
│   │   ├── base_node.py  # Base node class
│   │   ├── node_registry.py
│   │   ├── query_node/
│   │   ├── language_model_node/
│   │   └── ...
│   ├── tools/            # Utility tools and services
│   │   ├── language_model_tool/
│   │   ├── web_search_tool/
│   │   └── ...
│   ├── language_model_services/  # LLM integrations
│   ├── vector_store_services/    # Vector database services
│   └── main.py           # Application entry point
│
└── docker-compose.yml    # Docker configuration`}
          language="bash"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Component Architecture
        </h2>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Frontend Architecture
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          The frontend is built with Next.js 16 using the App Router:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Pages:</strong> Home dashboard and workflow builder</li>
          <li><strong>Components:</strong> Reusable UI components for nodes, canvas, and workflow management</li>
          <li><strong>Hooks:</strong> Custom React hooks for state management, data fetching, and workflow execution</li>
          <li><strong>API Client:</strong> Functions to communicate with the backend API</li>
        </ul>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Backend Architecture
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          The backend follows a modular structure:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>API Layer:</strong> FastAPI routes handling HTTP requests</li>
          <li><strong>Node System:</strong> Base node class and node registry for managing workflow nodes</li>
          <li><strong>Tools:</strong> Reusable utility classes for common operations</li>
          <li><strong>Services:</strong> Integration with external services (LLMs, vector stores, etc.)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Data Flow
        </h2>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-lg p-6 mb-6">
          <ol className="list-decimal pl-6 space-y-3 text-[var(--text-primary)]">
            <li><strong>User Interaction:</strong> User creates/edits workflow in the frontend</li>
            <li><strong>Frontend State:</strong> React state manages nodes, edges, and workflow configuration</li>
            <li><strong>API Request:</strong> Frontend sends workflow data to backend API</li>
            <li><strong>Node Execution:</strong> Backend processes workflow, executing nodes in dependency order</li>
            <li><strong>Tool Usage:</strong> Nodes use tools to perform operations (LLM calls, searches, etc.)</li>
            <li><strong>Response:</strong> Backend returns execution results to frontend</li>
            <li><strong>UI Update:</strong> Frontend displays results and updates workflow visualization</li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Node System
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          The node system is the core of ConvoFlow's extensibility:
        </p>
        <CodeBlock
          code={`BaseNode (Abstract Class)
├── _define_inputs()      # Define node inputs
├── _define_outputs()     # Define node outputs
├── _define_parameters() # Define configurable parameters
├── _define_styling()     # Define visual styling
├── execute()             # Core execution logic
└── get_schema()          # Generate node schema

NodeRegistry
├── register_node()       # Register a node class
├── create_node()         # Create node instance
└── get_node_schema()     # Get node schema`}
          language="python"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Workflow Execution
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          When a workflow is executed:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Workflow graph is parsed to build dependency map</li>
          <li>Nodes are executed in topological order (dependencies first)</li>
          <li>Each node receives inputs from connected upstream nodes</li>
          <li>Node executes its logic, potentially using tools</li>
          <li>Outputs are passed to connected downstream nodes</li>
          <li>Final result is returned from the ResponseNode</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Extension Points
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          ConvoFlow provides several extension points:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Custom Nodes:</strong> Create new node types by extending BaseNode</li>
          <li><strong>Custom Tools:</strong> Create reusable tools for use in nodes</li>
          <li><strong>Service Integrations:</strong> Add new LLM providers or vector stores</li>
          <li><strong>UI Components:</strong> Customize node appearance and configuration UI</li>
        </ul>

        <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Learn More
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/customization/adding-nodes" className="text-[var(--accent)] hover:underline">Adding Custom Nodes</a></li>
            <li><a href="/customization/creating-tools" className="text-[var(--accent)] hover:underline">Creating Tools</a></li>
            <li><a href="/quick-start" className="text-[var(--accent)] hover:underline">Quick Start Guide</a></li>
          </ul>
        </div>
        <PageFeedback />
      </div>
    </div>
  );
}


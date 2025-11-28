'use client';

import { useState } from 'react';
import CodeBlock from './CodeBlock';

interface CodeExample {
  id: string;
  label: string;
  code: string;
  language: string;
}

const codeExamples: CodeExample[] = [
  {
    id: 'execute-workflow',
    label: 'Execute Workflow',
    language: 'python',
    code: `import requests

# Execute a workflow via API
response = requests.post(
    "http://localhost:8000/api/v1/workflow/execute",
    json={
        "workflow_name": "customer-support-bot",
        "input_data": {
            "message": "How do I reset my password?",
            "user_id": "user_123"
        }
    }
)

result = response.json()
print(f"Bot Response: {result['output']}")`,
  },
  {
    id: 'create-workflow',
    label: 'Create Workflow',
    language: 'python',
    code: `import requests

# Create a new workflow
workflow_data = {
    "name": "customer-support-bot",
    "description": "Automated customer support assistant",
    "nodes": [
        {
            "id": "start",
            "type": "StartNode",
            "position": {"x": 100, "y": 100}
        },
        {
            "id": "llm",
            "type": "LLMNode",
            "position": {"x": 300, "y": 100},
            "data": {
                "provider": "openai",
                "model": "gpt-4"
            }
        }
    ],
    "edges": [
        {
            "source": "start",
            "target": "llm"
        }
    ]
}

response = requests.post(
    "http://localhost:8000/api/v1/workflows",
    json=workflow_data
)

print(f"Workflow created: {response.json()['id']}")`,
  },
  {
    id: 'add-llm-node',
    label: 'Add LLM Node',
    language: 'typescript',
    code: `import { Node } from 'reactflow';

// Define an LLM node configuration
const llmNode: Node = {
  id: 'llm-1',
  type: 'LLMNode',
  position: { x: 250, y: 100 },
  data: {
    provider: 'openai',
    model: 'gpt-4',
    systemPrompt: 'You are a helpful assistant.',
    temperature: 0.7,
    maxTokens: 500
  }
};

// Add to your workflow nodes
const nodes = [...existingNodes, llmNode];`,
  },
  {
    id: 'rag-retrieval',
    label: 'RAG Retrieval',
    language: 'python',
    code: `from qdrant_client import QdrantClient

# Initialize vector store
client = QdrantClient(url="http://localhost:6333")

# Retrieve context from knowledge base
results = client.search(
    collection_name="my_knowledge_base",
    query_vector=embedding,
    limit=5
)

# Use retrieved context in your workflow
context = "\\n".join([r.payload["text"] for r in results])
prompt = f"Context: {context}\\n\\nQuestion: {user_question}"`,
  },
  {
    id: 'web-search',
    label: 'Web Search Integration',
    language: 'python',
    code: `import requests

# Execute workflow with web search
response = requests.post(
    "http://localhost:8000/api/v1/workflow/execute",
    json={
        "workflow_name": "research-assistant",
        "input_data": {
            "query": "Latest AI developments in 2024",
            "enable_web_search": True,
            "max_results": 5
        }
    }
)

result = response.json()
print(f"Answer: {result['output']}")
print(f"Sources: {result['sources']}")`,
  },
  {
    id: 'conditional-logic',
    label: 'Conditional Logic',
    language: 'typescript',
    code: `// Define a conditional branch node
const conditionalNode = {
  id: 'condition-1',
  type: 'ConditionalNode',
  position: { x: 300, y: 200 },
  data: {
    conditions: [
      {
        field: 'intent',
        operator: 'equals',
        value: 'billing',
        targetNode: 'billing-flow'
      },
      {
        field: 'intent',
        operator: 'equals',
        value: 'technical',
        targetNode: 'tech-support-flow'
      }
    ],
    defaultTarget: 'general-flow'
  }
};`,
  },
  {
    id: 'intent-classification',
    label: 'Intent Classification',
    language: 'python',
    code: `# Configure intent classifier node
intent_config = {
    "node_type": "IntentClassifierNode",
    "model": "openai",
    "intents": [
        {
            "name": "billing",
            "examples": [
                "I want to cancel my subscription",
                "How much does it cost?",
                "Billing issue"
            ]
        },
        {
            "name": "technical",
            "examples": [
                "App is not working",
                "Cannot login",
                "Error message"
            ]
        }
    ]
}

# The node will classify user input automatically
# and route to appropriate workflow branches`,
  },
  {
    id: 'notifications',
    label: 'Send Notifications',
    language: 'python',
    code: `import requests

# Configure notification node
notification_data = {
    "workflow_id": "support-workflow",
    "node_type": "NotificationNode",
    "config": {
        "provider": "twilio",
        "to": "+1234567890",
        "message_template": "New support ticket: {ticket_id}",
        "trigger_condition": "priority == 'high'"
    }
}

response = requests.post(
    "http://localhost:8000/api/v1/nodes/notification",
    json=notification_data
)`,
  },
];

export default function InteractiveCodeExample() {
  const [activeTab, setActiveTab] = useState(codeExamples[0].id);

  const activeExample = codeExamples.find(ex => ex.id === activeTab) || codeExamples[0];

  return (
    <div className="bg-gray-900 rounded-lg p-8 mb-16">
      <div className="grid md:grid-cols-[280px_1fr] gap-8">
        {/* Left Side - Tabs */}
        <div className="space-y-2">
          {codeExamples.map((example) => (
            <button
              key={example.id}
              onClick={() => setActiveTab(example.id)}
              className={`w-full text-left px-4 py-3 rounded transition-colors ${
                activeTab === example.id
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {example.label}
            </button>
          ))}
        </div>

        {/* Right Side - Code Block */}
        <div>
          <CodeBlock code={activeExample.code} language={activeExample.language} />
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-6">
        Build powerful AI workflows with ConvoFlow's intuitive API and visual builder. Start with our pre-built templates or create custom solutions.
      </p>
      <a
        href="/reference/api"
        className="inline-flex items-center gap-2 text-blue-400 hover:underline text-sm mt-2"
      >
        View API Reference
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

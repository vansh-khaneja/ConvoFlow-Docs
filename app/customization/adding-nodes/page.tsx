import CodeBlock from "@/components/CodeBlock";

export default function AddingNodes() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
          Customization
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Adding New Nodes
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Learn how to create custom nodes to extend ConvoFlow's functionality.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          Nodes are the building blocks of ConvoFlow workflows. Each node represents a specific operation or functionality. This guide will walk you through creating a custom node from scratch.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Node Structure
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Every node in ConvoFlow extends the <code className="bg-gray-100 px-2 py-1 rounded text-sm">BaseNode</code> class and implements several key methods:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">_define_inputs()</code> - Define what inputs the node accepts</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">_define_outputs()</code> - Define what outputs the node produces</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">_define_parameters()</code> - Define configurable parameters</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">execute()</code> - Implement the node's core logic</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">_define_styling()</code> - Customize the node's appearance (optional)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Step-by-Step Guide
        </h2>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 1: Create Node Directory
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Create a new directory for your node in <code className="bg-gray-100 px-2 py-1 rounded text-sm">backend/nodes/</code>:
        </p>
        <CodeBlock
          code={`backend/nodes/
  └── my_custom_node/
      ├── __init__.py
      └── my_custom_node.py`}
          language="bash"
        />

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 2: Implement the Node Class
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Create your node class extending <code className="bg-gray-100 px-2 py-1 rounded text-sm">BaseNode</code>:
        </p>
        <CodeBlock
          code={`"""
My Custom Node - Description of what this node does
"""

from typing import Dict, Any, List
import sys
import os

# Add parent directory to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from base_node import BaseNode, NodeInput, NodeOutput, NodeParameter, NodeStyling


class MyCustomNode(BaseNode):
    """
    My Custom Node - Handles custom functionality.

    This node does something specific for your use case.
    """

    def _define_category(self) -> str:
        """Define the category for this node"""
        return "Custom"

    def _define_inputs(self) -> List[NodeInput]:
        """Define the input structure"""
        return [
            NodeInput(
                name="input_data",
                type="string",
                description="The input data to process",
                required=True
            )
        ]

    def _define_outputs(self) -> List[NodeOutput]:
        """Define the output structure"""
        return [
            NodeOutput(
                name="result",
                type="string",
                description="The processed result"
            )
        ]

    def _define_parameters(self) -> List[NodeParameter]:
        """Define the parameters"""
        return [
            NodeParameter(
                name="option",
                type="string",
                description="A configuration option",
                required=False,
                default_value="default",
                options=["option1", "option2", "option3"]
            )
        ]

    def _define_styling(self) -> NodeStyling:
        """Define custom styling"""
        return NodeStyling(
            icon="🔧",
            background_color="#3b82f6",
            border_color="#2563eb",
            text_color="#ffffff",
            shape="rounded"
        )

    def execute(self, inputs: Dict[str, Any], parameters: Dict[str, Any]) -> Dict[str, Any]:
        """
        Execute the node logic

        Args:
            inputs: Dictionary containing input values
            parameters: Dictionary containing parameter values

        Returns:
            Dictionary containing output values
        """
        # Get inputs
        input_data = inputs.get("input_data", "")
        option = parameters.get("option", "default")

        # Process the data
        result = f"Processed: {input_data} with option: {option}"

        return {
            "result": result,
            "success": True
        }`}
          language="python"
        />

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 3: Register the Node
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Register your node in the node registry. Find the registration file (usually in <code className="bg-gray-100 px-2 py-1 rounded text-sm">backend/register_nodes.py</code>) and add your node:
        </p>
        <CodeBlock
          code={`# In backend/register_nodes.py
from nodes.my_custom_node.my_custom_node import MyCustomNode
from nodes.node_registry import register_node

def register_all_nodes():
    """Register all available nodes in the system"""

    # ... existing node registrations ...

    # Register your custom node
    register_node(MyCustomNode)

    print("[OK] All nodes registered successfully!")`}
          language="python"
        />
        <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 rounded-r-lg mb-6">
          <p className="text-sm text-[var(--text-primary)]">
            <strong>Important:</strong> After registering your node, restart the backend server. The node will automatically appear in the node sidebar in the workflow builder.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 4: Test Your Node
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Restart the backend server and your node should appear in the node sidebar. You can test it by:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Adding it to a workflow</li>
          <li>Connecting it to other nodes</li>
          <li>Configuring its parameters</li>
          <li>Executing the workflow</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Using Tools in Nodes
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Nodes can use tools to perform complex operations. Here's how to use a tool in your node:
        </p>
        <CodeBlock
          code={`import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

# Import the tool
try:
    from tools.language_model_tool.language_model_tool import LanguageModelTool
except ImportError:
    LanguageModelTool = None

class MyCustomNode(BaseNode):
    # ... other methods ...

    def execute(self, inputs: Dict[str, Any], parameters: Dict[str, Any]) -> Dict[str, Any]:
        # Initialize the tool
        if LanguageModelTool is None:
            return {
                "result": "",
                "success": False,
                "metadata": {"error": "Tool not available"}
            }

        tool = LanguageModelTool()

        # Use the tool
        result = tool.generate_response(
            query=inputs.get("query", ""),
            service="openai",
            model="gpt-3.5-turbo"
        )

        return {
            "result": result.get("response", ""),
            "success": result.get("success", False)
        }`}
          language="python"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Best Practices
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Error Handling:</strong> Always handle errors gracefully and return meaningful error messages</li>
          <li><strong>Validation:</strong> Use the built-in validation methods to check inputs and parameters</li>
          <li><strong>Documentation:</strong> Provide clear docstrings and descriptions for all inputs, outputs, and parameters</li>
          <li><strong>Styling:</strong> Use consistent styling to match the visual design of other nodes</li>
          <li><strong>Testing:</strong> Test your node thoroughly with various inputs and edge cases</li>
        </ul>

        <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Next Steps
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/customization/creating-tools" className="text-[var(--accent)] hover:underline">Learn about Creating Tools</a></li>
            <li><a href="/customization/styling-nodes" className="text-[var(--accent)] hover:underline">Customize Node Styling</a></li>
            <li><a href="/examples/basic-chatbot" className="text-[var(--accent)] hover:underline">See Example Nodes</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


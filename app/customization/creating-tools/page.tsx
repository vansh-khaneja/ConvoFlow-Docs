import CodeBlock from "@/components/CodeBlock";
import PageFeedback from "@/components/PageFeedback";
import SectionBadge from "@/components/SectionBadge";

export default function CreatingTools() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <SectionBadge className="mb-4">Customization</SectionBadge>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Creating Tools
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Learn how to create reusable tools that can be used across multiple nodes.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          Tools are reusable utility classes that encapsulate specific functionality. They can be used by multiple nodes to avoid code duplication and maintain consistency. Examples include language model tools, web search tools, and knowledge base tools.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Tool Structure
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Tools are typically Python classes that provide a clean interface for specific operations. They should:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Handle initialization and configuration</li>
          <li>Provide clear, well-documented methods</li>
          <li>Return consistent data structures</li>
          <li>Handle errors gracefully</li>
          <li>Support multiple service providers when applicable</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Step-by-Step Guide
        </h2>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 1: Create Tool Directory
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Create a new directory for your tool in <code className="bg-gray-100 px-2 py-1 rounded text-sm">backend/tools/</code>:
        </p>
        <CodeBlock
          code={`backend/tools/
  └── my_custom_tool/
      ├── __init__.py
      └── my_custom_tool.py`}
          language="bash"
        />

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 2: Implement the Tool Class
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Create your tool class with the desired functionality:
        </p>
        <CodeBlock
          code={`"""
My Custom Tool - Description of what this tool does
"""

import sys
import os
from typing import Dict, Any, Optional

# Add parent directory to path if needed
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))


class MyCustomTool:
    """
    My Custom Tool - Provides specific functionality.
    
    This tool can be used by multiple nodes to perform
    a specific operation without code duplication.
    """
    
    def __init__(self, config: Optional[Dict[str, Any]] = None):
        """
        Initialize the tool.
        
        Args:
            config: Optional configuration dictionary
        """
        self.config = config or {}
        self.initialized = False
        self._initialize()
    
    def _initialize(self):
        """Initialize the tool (load resources, connect to services, etc.)"""
        try:
            # Initialize your tool here
            # e.g., connect to API, load models, etc.
            self.initialized = True
        except Exception as e:
            print(f"Warning: Could not initialize tool: {e}")
            self.initialized = False
    
    def perform_operation(
        self,
        input_data: str,
        **kwargs
    ) -> Dict[str, Any]:
        """
        Perform the main operation.
        
        Args:
            input_data: The input data to process
            **kwargs: Additional parameters
            
        Returns:
            Dictionary containing the result and metadata
        """
        if not self.initialized:
            return {
                "success": False,
                "error": "Tool not initialized",
                "result": None
            }
        
        try:
            # Perform your operation here
            result = f"Processed: {input_data}"
            
            return {
                "success": True,
                "result": result,
                "metadata": {
                    "input_length": len(input_data),
                    "operation": "custom_operation"
                }
            }
            
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "result": None
            }
    
    def get_status(self) -> Dict[str, Any]:
        """
        Get the current status of the tool.
        
        Returns:
            Dictionary containing status information
        """
        return {
            "initialized": self.initialized,
            "config": self.config
        }


# Convenience function for quick usage
def use_custom_tool(input_data: str, **kwargs) -> str:
    """
    Quick function to use the custom tool.
    
    Args:
        input_data: The input data
        **kwargs: Additional parameters
        
    Returns:
        The result as a string, or error message if failed
    """
    tool = MyCustomTool()
    result = tool.perform_operation(input_data, **kwargs)
    
    if result["success"]:
        return result["result"]
    else:
        return f"Error: {result['error']}"`}
          language="python"
        />

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Step 3: Use the Tool in a Node
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          Import and use your tool in any node:
        </p>
        <CodeBlock
          code={`from typing import Dict, Any
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
from base_node import BaseNode, NodeInput, NodeOutput, NodeParameter

# Import your tool
try:
    from tools.my_custom_tool.my_custom_tool import MyCustomTool
except ImportError:
    MyCustomTool = None


class MyNodeUsingTool(BaseNode):
    # ... define inputs, outputs, parameters ...
    
    def execute(self, inputs: Dict[str, Any], parameters: Dict[str, Any]) -> Dict[str, Any]:
        # Check if tool is available
        if MyCustomTool is None:
            return {
                "result": "",
                "success": False,
                "metadata": {"error": "Tool not available"}
            }
        
        # Initialize the tool
        tool = MyCustomTool()
        
        # Use the tool
        input_data = inputs.get("input_data", "")
        tool_result = tool.perform_operation(input_data)
        
        if tool_result["success"]:
            return {
                "result": tool_result["result"],
                "success": True,
                "metadata": tool_result.get("metadata", {})
            }
        else:
            return {
                "result": "",
                "success": False,
                "metadata": {"error": tool_result.get("error", "Unknown error")}
                }`}
          language="python"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Example: Language Model Tool
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Here's a real example from ConvoFlow - the Language Model Tool that supports multiple providers:
        </p>
        <CodeBlock
          code={`class LanguageModelTool:
    """
    Tool for using language models across multiple providers.
    """
    
    def __init__(self):
        """Initialize with all available services."""
        self.services = {}
        
        # Add available services
        if OpenAIService:
            try:
                self.services["openai"] = OpenAIService()
            except Exception as e:
                print(f"Warning: Could not initialize OpenAI: {e}")
        
        # Add other services similarly...
    
    def generate_response(
        self,
        query: str,
        service: str = "openai",
        model: Optional[str] = None,
        **kwargs
    ) -> Dict[str, Any]:
        """
        Generate a response using the specified service.
        
        Returns:
            Dictionary with success, response, and metadata
        """
        # Implementation...
        pass`}
          language="python"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Best Practices
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Error Handling:</strong> Always return structured error responses</li>
          <li><strong>Initialization:</strong> Handle initialization failures gracefully</li>
          <li><strong>Consistency:</strong> Use consistent return structures across methods</li>
          <li><strong>Documentation:</strong> Document all methods and parameters clearly</li>
          <li><strong>Reusability:</strong> Design tools to be reusable across different nodes</li>
          <li><strong>Configuration:</strong> Support configuration through environment variables or parameters</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Tool vs Node
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Understanding when to create a tool vs a node:
        </p>
        <div className="border border-[var(--border-color)] rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">Create a Tool when:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-[var(--text-primary)]">
                <li>Functionality is reusable across multiple nodes</li>
                <li>You need to encapsulate complex logic</li>
                <li>You want to support multiple service providers</li>
                <li>You need to manage resources (connections, models, etc.)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">Create a Node when:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-[var(--text-primary)]">
                <li>You need a workflow component</li>
                <li>You want user-configurable parameters</li>
                <li>You need inputs/outputs for workflow connections</li>
                <li>You want visual representation in the workflow</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            <a
              href="/customization/adding-nodes"
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg px-6 py-4 transition-colors shadow-sm"
            >
              <span className="text-[var(--text-primary)] font-normal">Adding Nodes</span>
              <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/reference/tools"
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg px-6 py-4 transition-colors shadow-sm"
            >
              <span className="text-[var(--text-primary)] font-normal">Tool Reference</span>
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


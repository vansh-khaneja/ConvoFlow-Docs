import CodeBlock from "@/components/CodeBlock";

export default function NodeConfig() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
          Customization
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Node Configuration
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Learn how to configure nodes with parameters, inputs, and outputs.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          Nodes in ConvoFlow are highly configurable. This guide explains how to define and use node configurations.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Node Components
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Every node has three main configuration components. Here's how node configuration looks in the sidebar:
        </p>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-xl p-4 mb-6 overflow-hidden">
          <img 
            src="/nodeconfiguration in sidebar.png" 
            alt="Node configuration panel in sidebar showing inputs, outputs, and parameters" 
            className="w-full h-auto rounded-lg"
          />
        </div>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Inputs:</strong> Data received from other nodes or external sources</li>
          <li><strong>Outputs:</strong> Data produced by the node and sent to other nodes</li>
          <li><strong>Parameters:</strong> Configurable settings specific to the node</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Defining Inputs
        </h2>
        <CodeBlock
          code={`def _define_inputs(self) -> List[NodeInput]:
    return [
        NodeInput(
            name="query",           # Input name
            type="string",          # Data type
            description="User query", # Description
            required=True,          # Is it required?
            default_value=None      # Default value
        )
    ]`}
          language="python"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Defining Outputs
        </h2>
        <CodeBlock
          code={`def _define_outputs(self) -> List[NodeOutput]:
    return [
        NodeOutput(
            name="result",          # Output name
            type="string",         # Data type
            description="Processed result" # Description
        )
    ]`}
          language="python"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Defining Parameters
        </h2>
        <CodeBlock
          code={`def _define_parameters(self) -> List[NodeParameter]:
    return [
        NodeParameter(
            name="temperature",
            type="number",
            description="Sampling temperature",
            required=False,
            default_value=0.7,
            options=None  # For dropdowns, provide list of options
        ),
        NodeParameter(
            name="model",
            type="string",
            description="Model to use",
            required=True,
            default_value="gpt-3.5-turbo",
            options=["gpt-3.5-turbo", "gpt-4", "gpt-4-turbo"]
        )
    ]`}
          language="python"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Using Configuration in execute()
        </h2>
        <CodeBlock
          code={`def execute(self, inputs: Dict[str, Any], parameters: Dict[str, Any]) -> Dict[str, Any]:
    # Access inputs
    query = inputs.get("query", "")

    # Access parameters
    temperature = parameters.get("temperature", 0.7)
    model = parameters.get("model", "gpt-3.5-turbo")

    # Use the configuration
    result = process_query(query, model, temperature)

    return {
        "result": result
    }`}
          language="python"
        />

        <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Learn More
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/customization/adding-nodes" className="text-[var(--accent)] hover:underline">Adding New Nodes</a></li>
            <li><a href="/customization/styling-nodes" className="text-[var(--accent)] hover:underline">Styling Nodes</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


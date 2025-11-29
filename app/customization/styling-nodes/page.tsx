import CodeBlock from "@/components/CodeBlock";
import PageFeedback from "@/components/PageFeedback";
import SectionBadge from "@/components/SectionBadge";

export default function StylingNodes() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <SectionBadge className="mb-4">Customization</SectionBadge>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Styling Nodes
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Customize the visual appearance of your nodes in the workflow canvas.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          Node styling allows you to customize how nodes appear in the workflow canvas. You can control colors, shapes, icons, and even create custom HTML templates.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Basic Styling
        </h2>
        <CodeBlock
          code={`def _define_styling(self) -> NodeStyling:
    return NodeStyling(
        icon="🔧",                    # Emoji, SVG, or image URL
        background_color="#3b82f6",   # Background color
        border_color="#2563eb",       # Border color
        text_color="#ffffff",         # Text color
        shape="rounded",              # Shape: rectangle, rounded, circle, etc.
        width=200,                    # Fixed width (optional)
        height=100                    # Fixed height (optional)
    )`}
          language="python"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Available Shapes
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">rectangle</code> - Standard rectangle</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">rounded</code> - Rounded corners</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">circle</code> - Circular shape</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">pill</code> - Pill-shaped (rounded ends)</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">hexagon</code> - Hexagonal shape</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">diamond</code> - Diamond shape</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Custom HTML Templates
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          For advanced styling, you can use custom HTML templates:
        </p>
        <CodeBlock
          code={`def _define_styling(self) -> NodeStyling:
    return NodeStyling(
        html_template="""
        <div class="custom-node">
            <div class="node-icon">⚡</div>
            <div class="node-content">
                <div class="node-title">Custom Node</div>
                <div class="node-subtitle">CUSTOM</div>
            </div>
        </div>
        """,
        custom_css="""
        .custom-node {
            display: flex;
            align-items: center;
            padding: 16px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .node-icon {
            font-size: 24px;
            margin-right: 12px;
        }
        .node-title {
            font-weight: 600;
            color: white;
        }
        .node-subtitle {
            font-size: 11px;
            color: rgba(255, 255, 255, 0.8);
        }
        """
    )`}
          language="python"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Icon Options
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Icons can be specified in several ways:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Emoji:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">icon="🔧"</code></li>
          <li><strong>SVG:</strong> Inline SVG string</li>
          <li><strong>Image URL:</strong> URL to an image file</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Best Practices
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Use consistent color schemes for related nodes</li>
          <li>Choose icons that clearly represent the node's function</li>
          <li>Keep custom CSS simple and maintainable</li>
          <li>Test node appearance at different zoom levels</li>
          <li>Ensure sufficient contrast for readability</li>
        </ul>

        <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Next Steps
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/customization/adding-nodes" className="text-[var(--accent)] hover:underline">Create Your First Custom Node</a></li>
            <li><a href="/reference/node-types" className="text-[var(--accent)] hover:underline">Browse Node Examples</a></li>
          </ul>
        </div>
        <PageFeedback />
      </div>
    </div>
  );
}


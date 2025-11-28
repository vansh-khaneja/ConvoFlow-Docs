export default function Troubleshooting() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-4">
          Guides
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Troubleshooting
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Common issues and solutions for ConvoFlow.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Common Issues
        </h2>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Node Not Appearing in Sidebar
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          <strong>Solution:</strong> Make sure the node is properly registered in the node registry and the backend server has been restarted.
        </p>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          API Key Errors
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          <strong>Solution:</strong> Check that API keys are set in environment variables or configured in the Settings UI. Verify the keys are valid and have the necessary permissions.
        </p>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Workflow Execution Fails
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          <strong>Solution:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Check that all required nodes (QueryNode and ResponseNode) are present</li>
          <li>Verify all connections are properly made</li>
          <li>Check node parameters are configured correctly</li>
          <li>Review error messages in the ResponseNode or console</li>
        </ul>

        <h3 className="text-xl font-semibold text-[var(--text-primary)] mt-6 mb-3">
          Database Connection Issues
        </h3>
        <p className="text-[var(--text-primary)] mb-4">
          <strong>Solution:</strong> Verify PostgreSQL is running and the connection string in your <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env</code> file is correct.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Debugging Tips
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Use the detailed logs page to inspect workflow execution and debug issues:
        </p>
        <div className="bg-gray-50 border border-[var(--border-color)] rounded-xl p-4 mb-6 overflow-hidden">
          <img 
            src="/detailed logs page.png" 
            alt="Detailed logs page showing workflow execution logs" 
            className="w-full h-auto rounded-lg"
          />
        </div>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Use the DebugNode to inspect data at different points in your workflow</li>
          <li>Check browser console for frontend errors</li>
          <li>Check backend logs for API errors</li>
          <li>Test nodes individually before connecting them</li>
          <li>Verify node inputs and outputs match expected types</li>
        </ul>

        <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Need More Help?
          </h3>
          <p className="text-[var(--text-primary)]">
            If you're still experiencing issues, check the GitHub issues or create a new one with detailed error messages and steps to reproduce.
          </p>
        </div>
      </div>
    </div>
  );
}


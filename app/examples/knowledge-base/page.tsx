export default function KnowledgeBase() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full mb-4">
          Examples
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Knowledge Base Bot
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Build a chatbot that retrieves information from a knowledge base.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          This example shows how to create a chatbot that uses a knowledge base to provide context-aware responses.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Workflow Structure
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Here's an example of a knowledge base workflow:
        </p>
        <img 
          src="/knowledge base worklflow.png" 
          alt="Knowledge base workflow showing query, knowledge base retrieval, language model, and response nodes" 
          className="w-full h-auto rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Steps
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-[var(--text-primary)]">
          <li>Add QueryNode for user input</li>
          <li>Add KnowledgeBaseRetrievalNode to fetch relevant context</li>
          <li>Add LanguageModelNode that uses the retrieved context</li>
          <li>Add ResponseNode for final output</li>
          <li>Connect: Query → Knowledge Base → Language Model → Response</li>
        </ol>

        <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Configuration
          </h3>
          <p className="text-[var(--text-primary)] mb-2">
            Make sure to configure your vector database connection in the KnowledgeBaseRetrievalNode settings.
          </p>
        </div>
      </div>
    </div>
  );
}


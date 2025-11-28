export default function DocumentQA() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full mb-4">
          Examples
        </div>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Document Q&A
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Build RAG systems that answer questions from your knowledge base with cited sources.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-[var(--text-primary)] leading-relaxed mb-6">
          This example demonstrates how to build a Retrieval-Augmented Generation (RAG) system that 
          can answer questions from your documents with accurate, cited responses.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Example Workflow
        </h2>
        <p className="text-[var(--text-primary)] mb-4">
          Here's an example of a document Q&A workflow that retrieves relevant information and generates answers:
        </p>
        <img 
          src="/document qna.png" 
          alt="Document Q&A workflow showing query, document loader, knowledge base retrieval, and response nodes" 
          className="w-full h-auto rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li><strong>Document Loading:</strong> Load and process documents from various sources (PDFs, text files, etc.)</li>
          <li><strong>Vector Search:</strong> Efficiently search through your document collection using semantic similarity</li>
          <li><strong>Context Retrieval:</strong> Retrieve the most relevant document chunks for each query</li>
          <li><strong>Source Citation:</strong> Provide citations and references to the source documents</li>
          <li><strong>Accurate Answers:</strong> Generate answers based on your actual documents, not general knowledge</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Workflow Components
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mb-6 text-[var(--text-primary)]">
          <li><strong>QueryNode:</strong> Captures user questions about your documents</li>
          <li><strong>DocumentLoaderNode:</strong> Loads and processes documents (PDFs, text files, etc.)</li>
          <li><strong>KnowledgeBaseRetrievalNode:</strong> Searches your vector database for relevant document chunks</li>
          <li><strong>LanguageModelNode:</strong> Generates answers using the retrieved context and original query</li>
          <li><strong>ResponseNode:</strong> Returns the answer along with source citations</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Use Cases
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Answer questions from technical documentation</li>
          <li>Provide information from company policies and procedures</li>
          <li>Query research papers and academic documents</li>
          <li>Search through legal documents and contracts</li>
          <li>Answer questions from product manuals and guides</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Configuration Tips
        </h2>
        <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
          <pre className="text-gray-100 text-sm">
{`Document Loading:
  - Support multiple file formats (PDF, TXT, DOCX, etc.)
  - Configure chunking strategy (size, overlap)
  - Set up metadata extraction

Vector Database:
  - Connect to your vector store (Pinecone, Weaviate, etc.)
  - Configure embedding model
  - Set similarity search parameters

Retrieval Settings:
  - Top K documents to retrieve
  - Similarity threshold
  - Re-ranking options

Response Generation:
  - Include source citations in prompts
  - Configure answer format
  - Set context window limits`}
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">
          Best Practices
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-[var(--text-primary)]">
          <li>Chunk documents appropriately (typically 500-1000 tokens)</li>
          <li>Include metadata (page numbers, document titles) for better citations</li>
          <li>Use appropriate embedding models for your domain</li>
          <li>Implement re-ranking for better retrieval quality</li>
          <li>Test with various query types to optimize retrieval parameters</li>
        </ul>

        <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-lg mb-8">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
            Learn More
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-[var(--text-primary)]">
            <li><a href="/examples/knowledge-base" className="text-[var(--accent)] hover:underline">Knowledge Base Bot</a></li>
            <li><a href="/examples/customer-support" className="text-[var(--accent)] hover:underline">Customer Support Bot</a></li>
            <li><a href="/guides/workflows" className="text-[var(--accent)] hover:underline">Workflow Patterns</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


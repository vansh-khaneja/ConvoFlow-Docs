import CodeBlock from "@/components/CodeBlock";
import PageFeedback from "@/components/PageFeedback";
import SectionBadge from "@/components/SectionBadge";

export default function IntegrationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <SectionBadge className="mb-4">Guides</SectionBadge>
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Connect External Services
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Learn how to integrate third-party APIs and external services into your ConvoFlow workflows using the Custom API Node.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">

      {/* Custom API Node Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          Custom API Node
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          The Custom API Node allows you to make HTTP requests to any external API, enabling seamless integration with third-party services. You can connect to payment gateways, CRM systems, databases, analytics platforms, and more.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm text-blue-800">
                <strong>Tip:</strong> The Custom API Node supports all standard HTTP methods (GET, POST, PUT, PATCH, DELETE) and custom headers for authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          Basic Configuration
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Configure the Custom API Node with the following parameters. Here's the configuration panel with all available options:
        </p>
        <img 
          src="/custom api with config options.png" 
          alt="Custom API Node configuration panel showing URL, method, headers, and body options" 
          className="w-full h-auto rounded-lg mb-6"
        />

        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--text-primary)] mb-2">URL</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              The endpoint URL of the external API you want to connect to.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--text-primary)] mb-2">Method</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              HTTP method: GET, POST, PUT, PATCH, or DELETE.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--text-primary)] mb-2">Headers</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Custom headers for authentication, content type, and other metadata.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--text-primary)] mb-2">Body</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Request payload for POST, PUT, and PATCH requests (JSON format).
            </p>
          </div>
        </div>
      </section>

      {/* Authentication Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          Authentication Methods
        </h2>

        <div className="space-y-6">
          {/* API Key Authentication */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              API Key Authentication
            </h3>
            <p className="text-[var(--text-secondary)] mb-3">
              Pass API keys in headers or query parameters:
            </p>
            <CodeBlock
              code={`{
  "url": "https://api.example.com/data",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  }
}`}
              language="json"
            />
          </div>

          {/* OAuth 2.0 */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              OAuth 2.0
            </h3>
            <p className="text-[var(--text-secondary)] mb-3">
              Use OAuth tokens for secure authentication:
            </p>
            <CodeBlock
              code={`{
  "url": "https://api.example.com/user/profile",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer OAUTH_ACCESS_TOKEN",
    "Content-Type": "application/json"
  }
}`}
              language="json"
            />
          </div>

          {/* Basic Auth */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
              Basic Authentication
            </h3>
            <p className="text-[var(--text-secondary)] mb-3">
              Encode credentials in Base64 for basic auth:
            </p>
            <CodeBlock
              code={`{
  "url": "https://api.example.com/resource",
  "method": "GET",
  "headers": {
    "Authorization": "Basic BASE64_ENCODED_CREDENTIALS",
    "Content-Type": "application/json"
  }
}`}
              language="json"
            />
          </div>
        </div>
      </section>

      {/* Common Integration Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          Common Integration Examples
        </h2>

        <div className="space-y-8">
          {/* Stripe Payment */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              Stripe Payment Processing
            </h3>
            <p className="text-[var(--text-secondary)] mb-3">
              Create payment intents and process transactions:
            </p>
            <CodeBlock
              code={`{
  "url": "https://api.stripe.com/v1/payment_intents",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer sk_test_YOUR_STRIPE_KEY",
    "Content-Type": "application/x-www-form-urlencoded"
  },
  "body": {
    "amount": 2000,
    "currency": "usd",
    "payment_method_types[]": "card"
  }
}`}
              language="json"
            />
          </div>

          {/* Slack Notifications */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              Slack Notifications
            </h3>
            <p className="text-[var(--text-secondary)] mb-3">
              Send messages to Slack channels:
            </p>
            <CodeBlock
              code={`{
  "url": "https://hooks.slack.com/services/YOUR/WEBHOOK/URL",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "text": "New customer inquiry received!",
    "channel": "#notifications",
    "username": "ConvoFlow Bot"
  }
}`}
              language="json"
            />
          </div>

          {/* SendGrid Email */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              SendGrid Email Service
            </h3>
            <p className="text-[var(--text-secondary)] mb-3">
              Send transactional emails via SendGrid:
            </p>
            <CodeBlock
              code={`{
  "url": "https://api.sendgrid.com/v3/mail/send",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer YOUR_SENDGRID_API_KEY",
    "Content-Type": "application/json"
  },
  "body": {
    "personalizations": [{
      "to": [{"email": "customer@example.com"}]
    }],
    "from": {"email": "noreply@yourapp.com"},
    "subject": "Order Confirmation",
    "content": [{
      "type": "text/html",
      "value": "<h1>Thank you for your order!</h1>"
    }]
  }
}`}
              language="json"
            />
          </div>

          {/* Google Sheets */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              Google Sheets Integration
            </h3>
            <p className="text-[var(--text-secondary)] mb-3">
              Append data to Google Sheets:
            </p>
            <CodeBlock
              code={`{
  "url": "https://sheets.googleapis.com/v4/spreadsheets/SHEET_ID/values/Sheet1!A1:append",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer GOOGLE_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
  "body": {
    "values": [
      ["Customer Name", "Email", "Message", "Timestamp"]
    ]
  }
}`}
              language="json"
            />
          </div>
        </div>
      </section>

      {/* Workflow Execution */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          Workflow Execution
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          Here's how a Custom API Node looks when executing in a workflow:
        </p>
        <img 
          src="/custom api flow on excution.png" 
          alt="Custom API Node executing in a workflow showing request and response flow" 
          className="w-full h-auto rounded-lg mb-6"
        />
      </section>

      {/* Error Handling */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          Error Handling
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
          The Custom API Node automatically handles HTTP errors and provides detailed response information:
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-mono text-[var(--text-primary)] font-semibold">200-299</span>
            <span className="text-sm text-[var(--text-secondary)]">Success - Request completed successfully</span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-mono text-[var(--text-primary)] font-semibold">400-499</span>
            <span className="text-sm text-[var(--text-secondary)]">Client errors - Invalid request or authentication</span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-mono text-[var(--text-primary)] font-semibold">500-599</span>
            <span className="text-sm text-[var(--text-secondary)]">Server errors - External service unavailable</span>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed">
          Use conditional nodes to handle different response statuses and implement retry logic for failed requests.
        </p>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          Best Practices
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h4 className="font-semibold text-[var(--text-primary)]">Store API Keys Securely</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Use environment variables to store sensitive credentials. Never hardcode API keys in your workflows.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h4 className="font-semibold text-[var(--text-primary)]">Implement Rate Limiting</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Respect API rate limits to avoid throttling. Add delays between requests if needed.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h4 className="font-semibold text-[var(--text-primary)]">Validate Responses</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Always validate API responses before using the data in subsequent workflow steps.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h4 className="font-semibold text-[var(--text-primary)]">Log API Calls</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Use Debug nodes to monitor API requests and responses for troubleshooting.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h4 className="font-semibold text-[var(--text-primary)]">Handle Timeouts</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Set appropriate timeout values and implement fallback mechanisms for slow responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
          <a
            href="/reference/nodes"
            className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg px-6 py-4 transition-colors shadow-sm"
          >
            <span className="text-[var(--text-primary)] font-normal">All Nodes</span>
            <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/examples/basic-chatbot"
            className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg px-6 py-4 transition-colors shadow-sm"
          >
            <span className="text-[var(--text-primary)] font-normal">Examples</span>
            <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
      </div>
      <PageFeedback />
    </div>
  );
}

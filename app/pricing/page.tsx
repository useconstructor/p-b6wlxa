import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="https://trysupervisor.com/supervisor-logo.svg?dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
              alt="Supervise and Run your business with Artificial Intelligence | Supervisor"
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/use-cases" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Use Cases
            </Link>
            <Link href="/for" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              For
            </Link>
            <Link href="/pricing" className="text-sm text-gray-900 font-medium">
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://trysupervisor.com/app"
              className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Pricing Hero */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto">
            Simple plans for teams ready to move faster
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the right Supervisor setup for focused web and mobile operations.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Free</h2>
                <p className="text-sm text-gray-400 font-mono">0 1</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$0</span>
              </div>
              <p className="text-gray-600 mb-8">
                Start with a focused workspace for one operator and early workflows.
              </p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">1,000 questions a month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">3 integrations to your sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">3 people in the workspace</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">Community support</span>
                </li>
              </ul>
              <Link
                href="https://trysupervisor.com/app"
                className="w-full py-3 px-6 text-center font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Start Free
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-black rounded-2xl p-8 flex flex-col relative bg-gray-50">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Pro</h2>
                <p className="text-sm text-gray-400 font-mono">0 2</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$500</span>
                <span className="text-gray-600">/mo</span>
              </div>
              <p className="text-gray-600 mb-8">
                For teams ready to automate recurring work with visibility and rhythm.
              </p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">Everything in Free</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">Unlimited questions per month*</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">Unlimited integrations to your sources*</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">Up to 20 people in workspace</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">1 day response support</span>
                </li>
              </ul>
              <Link
                href="https://trysupervisor.com/app"
                className="w-full py-3 px-6 text-center font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Enterprise</h2>
                <p className="text-sm text-gray-400 font-mono">0 3</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">Custom</span>
              </div>
              <p className="text-gray-600 mb-8">
                For larger teams with security, custom rollout, and hands-on support needs.
              </p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">SSO and audit controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">Custom data retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">Self-hosted option</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">Implementation and rollout support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
              <Link
                href="https://trysupervisor.com/book-a-call"
                className="w-full py-3 px-6 text-center font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-8">
            *Unlimited questions and integrations are subject to a fair usage policy.
          </p>
        </div>
      </section>

      {/* Nonprofit Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Nonprofit programs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Free for qualifying nonprofits.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            If you are a nonprofit, we offer free Pro packages or 50% discounts depending on your size and funding.
          </p>
          <Link
            href="https://trysupervisor.com/book-a-call"
            className="inline-block px-8 py-3 font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4 text-center">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Questions before choosing a plan.
          </h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700">
                Yes. Free includes 1,000 questions a month, 3 integrations to your sources, 3 people in the workspace, and community support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center">
            <img
              src="https://trysupervisor.com/supervisor-logo.svg?dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
              alt="Supervise and Run your business with Artificial Intelligence | Supervisor"
              className="h-6 w-auto"
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/use-cases" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Use Cases
            </Link>
            <Link href="/for" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              For
            </Link>
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Supervisor
          </p>
        </div>
      </footer>
    </div>
  )
}
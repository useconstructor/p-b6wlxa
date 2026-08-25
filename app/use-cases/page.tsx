import Link from 'next/link'

const useCases = [
  {
    number: '01',
    title: 'Revenue desk',
    description: 'Ask for metrics, sources, and next actions without spreadsheet hunts.',
    href: '/use-cases/revenue-desk'
  },
  {
    number: '02',
    title: 'Field operations',
    description: 'Keep frontline teams moving with mobile-first tasks and checks.',
    href: '/use-cases/field-operations'
  },
  {
    number: '03',
    title: 'Manager approvals',
    description: 'Prepare high-risk decisions with the context reviewers need.',
    href: '/use-cases/manager-approvals'
  },
  {
    number: '04',
    title: 'Customer follow ups',
    description: 'Catch open loops across support, success, and account work.',
    href: '/use-cases/customer-follow-ups'
  },
  {
    number: '05',
    title: 'Finance controls',
    description: 'Review spend, invoices, and policy exceptions before they spread.',
    href: '/use-cases/finance-controls'
  },
  {
    number: '06',
    title: 'Hiring onboarding',
    description: 'Coordinate offers, equipment, access, and first-week readiness.',
    href: '/use-cases/hiring-onboarding'
  },
  {
    number: '07',
    title: 'Incident response',
    description: 'Turn alerts, owners, and updates into one calm response lane.',
    href: '/use-cases/incident-response'
  },
  {
    number: '08',
    title: 'Vendor operations',
    description: 'Monitor renewals, documents, tasks, and vendor follow-through.',
    href: '/use-cases/vendor-operations'
  },
  {
    number: '09',
    title: 'Executive briefs',
    description: 'Generate crisp operating updates from live team context.',
    href: '/use-cases/executive-briefs'
  },
  {
    number: '10',
    title: 'Access reviews',
    description: 'Check permissions, owners, and exceptions with audit-ready logs.',
    href: '/use-cases/access-reviews'
  },
  {
    number: '11',
    title: 'Launch readiness',
    description: 'Align product, ops, support, and go-to-market before launch day.',
    href: '/use-cases/launch-readiness'
  },
  {
    number: '12',
    title: 'Knowledge base',
    description: 'Turn scattered docs into answers teams can actually use.',
    href: '/use-cases/knowledge-base'
  }
]

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="https://trysupervisor.com/supervisor-logo.svg?dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
              alt="Supervise and Run your business with Artificial Intelligence | Supervisor"
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/use-cases" className="text-sm text-white hover:text-gray-300 transition-colors">
              Use Cases
            </Link>
            <Link href="/for" className="text-sm text-gray-400 hover:text-white transition-colors">
              For
            </Link>
            <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="text-sm bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">Use Cases</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white mb-6">
              Built for the daily rhythms of modern teams
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Coordinate field work, manager reviews, handoffs, and follow ups without scattering context.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* First row - 2 large cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {useCases.slice(0, 2).map((useCase) => (
              <Link
                key={useCase.number}
                href={useCase.href}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 min-h-[280px] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs text-gray-500 font-mono">{useCase.number}</span>
                  <p className="text-xs text-blue-400 mt-2 group-hover:text-blue-300 transition-colors">See More</p>
                </div>
                <div>
                  <h2 className="text-2xl font-medium text-white mb-3">{useCase.title}</h2>
                  <p className="text-gray-400">{useCase.description}</p>
                </div>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Second row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {useCases.slice(2, 5).map((useCase) => (
              <Link
                key={useCase.number}
                href={useCase.href}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 min-h-[240px] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs text-gray-500 font-mono">{useCase.number}</span>
                  <p className="text-xs text-blue-400 mt-2 group-hover:text-blue-300 transition-colors">See More</p>
                </div>
                <div>
                  <h2 className="text-xl font-medium text-white mb-2">{useCase.title}</h2>
                  <p className="text-sm text-gray-400">{useCase.description}</p>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Third row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {useCases.slice(5, 8).map((useCase) => (
              <Link
                key={useCase.number}
                href={useCase.href}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 min-h-[240px] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs text-gray-500 font-mono">{useCase.number}</span>
                  <p className="text-xs text-blue-400 mt-2 group-hover:text-blue-300 transition-colors">See More</p>
                </div>
                <div>
                  <h2 className="text-xl font-medium text-white mb-2">{useCase.title}</h2>
                  <p className="text-sm text-gray-400">{useCase.description}</p>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Fourth row - 4 cards */}
          <div className="grid md:grid-cols-4 gap-4">
            {useCases.slice(8, 12).map((useCase) => (
              <Link
                key={useCase.number}
                href={useCase.href}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 min-h-[220px] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs text-gray-500 font-mono">{useCase.number}</span>
                  <p className="text-xs text-blue-400 mt-2 group-hover:text-blue-300 transition-colors">See More</p>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-white mb-2">{useCase.title}</h2>
                  <p className="text-sm text-gray-400">{useCase.description}</p>
                </div>
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center">
            <img
              src="https://trysupervisor.com/supervisor-logo.svg?dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
              alt="Supervise and Run your business with Artificial Intelligence | Supervisor"
              className="h-6 w-auto"
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/use-cases" className="text-sm text-gray-400 hover:text-white transition-colors">
              Use Cases
            </Link>
            <Link href="/for" className="text-sm text-gray-400 hover:text-white transition-colors">
              For
            </Link>
            <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
              Pricing
            </Link>
          </div>
          <p className="text-sm text-gray-500">© 2024 Supervisor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
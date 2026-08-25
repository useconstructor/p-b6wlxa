import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <img
                src="https://trysupervisor.com/supervisor-logo.svg?dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                alt="Supervisor"
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <button className="hover:text-white transition-colors">
                Product
              </button>
              <Link href="/use-cases" className="hover:text-white transition-colors">
                Use Cases
              </Link>
              <Link href="/for" className="hover:text-white transition-colors text-white">
                Industries
              </Link>
              <button className="hover:text-white transition-colors">
                Resources
              </button>
              <Link href="/pricing" className="hover:text-white transition-colors">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://trysupervisor.com/book-a-call"
              className="hidden sm:inline-flex text-sm text-gray-300 hover:text-white transition-colors"
            >
              Book a Call
            </a>
            <a
              href="https://trysupervisor.com/app"
              className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-400 mb-4 uppercase tracking-wide">Industries</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Built around the way your team actually operates.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start from familiar operating patterns, then let Supervisor adapt to the details of your work.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Row 1 - 2 cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Link
              href="/for/startup"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <img
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fstartup-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                alt="Startup"
                className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">01</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Startup</h2>
                <p className="text-gray-400 text-sm">
                  Keep launches, product, customers, hiring and finance in check and automated as you scale.
                </p>
              </div>
            </Link>

            <Link
              href="/for/local-business"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <img
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Flocal-business-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                alt="Local Business"
                className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">02</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Local Business</h2>
                <p className="text-gray-400 text-sm">
                  Coordinate daily work, appointments, staff checks, and customer follow ups.
                </p>
              </div>
            </Link>
          </div>

          {/* Row 2 - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Link
              href="/for/logistics"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <img
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Flogistics-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                alt="Logistics"
                className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">03</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Logistics</h2>
                <p className="text-gray-400 text-sm">
                  Track routes, exceptions, handoffs, and updates without control-tower sprawl.
                </p>
              </div>
            </Link>

            <Link
              href="/for/non-profits"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <img
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fnon-profits-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                alt="Non Profits"
                className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">04</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Non Profits</h2>
                <p className="text-gray-400 text-sm">
                  Keep programs, volunteers, donors, and reports moving with less manual chasing.
                </p>
              </div>
            </Link>

            <Link
              href="/for/ecommerce"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="w-full h-56 bg-gradient-to-br from-purple-900/50 to-blue-900/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">05</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Ecommerce</h2>
                <p className="text-gray-400 text-sm">
                  Monitor orders, inventory, support loops, campaigns, and fulfillment blockers.
                </p>
              </div>
            </Link>
          </div>

          {/* Row 3 - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Link
              href="/for/hotels-and-stays"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="w-full h-56 bg-gradient-to-br from-amber-900/50 to-orange-900/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">06</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Hotels and Stays</h2>
                <p className="text-gray-400 text-sm">
                  Coordinate guest requests, housekeeping, maintenance, and team handoffs.
                </p>
              </div>
            </Link>

            <Link
              href="/for/restaurants"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <img
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Frestaurants-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
                alt="Restaurants"
                className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">07</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Restaurants</h2>
                <p className="text-gray-400 text-sm">
                  Watch shifts, vendors, service issues, and repeat checks from one calm lane.
                </p>
              </div>
            </Link>

            <Link
              href="/for/field-services"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="w-full h-56 bg-gradient-to-br from-green-900/50 to-teal-900/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">08</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Field Services</h2>
                <p className="text-gray-400 text-sm">
                  Give mobile teams a clearer way to report, escalate, and finish the work.
                </p>
              </div>
            </Link>
          </div>

          {/* Row 4 - 2 cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Link
              href="/for/gyms-and-studios"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="w-full h-64 bg-gradient-to-br from-red-900/50 to-pink-900/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">09</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Gyms and Studios</h2>
                <p className="text-gray-400 text-sm">
                  Run classes, memberships, staff tasks, and member follow ups without extra admin.
                </p>
              </div>
            </Link>

            <Link
              href="/for/healthcare"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="w-full h-64 bg-gradient-to-br from-cyan-900/50 to-blue-900/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">10</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Health Care and Clinics</h2>
                <p className="text-gray-400 text-sm">
                  Keep patient operations, staffing, forms, and follow ups coordinated.
                </p>
              </div>
            </Link>
          </div>

          {/* Row 5 - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/for/schools-and-education"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="w-full h-56 bg-gradient-to-br from-indigo-900/50 to-purple-900/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">11</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Schools and Education</h2>
                <p className="text-gray-400 text-sm">
                  Coordinate study plans, schedules, classes, parent communications, staff tasks and student follow ups.
                </p>
              </div>
            </Link>

            <Link
              href="/for/agencies"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="w-full h-56 bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">12</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Agencies and Firms</h2>
                <p className="text-gray-400 text-sm">
                  Coordinate client work, cases, campaigns, approvals, and team updates in one operating view.
                </p>
              </div>
            </Link>

            <Link
              href="/for/investors"
              className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="w-full h-56 bg-gradient-to-br from-emerald-900/50 to-cyan-900/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">13</span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">See More</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Investors</h2>
                <p className="text-gray-400 text-sm">
                  Turn portfolio updates, founder asks, diligence notes, and follow ups into a calmer investing workflow.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/">
            <img
              src="https://trysupervisor.com/supervisor-logo.svg?dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf"
              alt="Supervisor"
              className="h-6 w-auto"
            />
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/use-cases" className="hover:text-white transition-colors">
              Use Cases
            </Link>
            <Link href="/for" className="hover:text-white transition-colors">
              Industries
            </Link>
            <Link href="/pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>EN</span>
            <button className="hover:text-white transition-colors">Help/Chat</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
import Link from 'next/link'

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[1440px] border-x border-gray-200">
      {/* Navigation */}
      <header className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
        <div className="flex items-center gap-8">
          <Link href="/">
            <img 
              src="https://trysupervisor.com/supervisor-logo.svg?dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf" 
              alt="Supervisor" 
              className="h-8 w-auto" 
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-gray-900 hover:text-gray-600">Home</Link>
            <button className="text-gray-600 hover:text-gray-900">Product</button>
            <Link href="/use-cases" className="text-gray-600 hover:text-gray-900">Use Cases</Link>
            <Link href="/for" className="text-gray-600 hover:text-gray-900">Industries</Link>
            <button className="text-gray-600 hover:text-gray-900">Resources</button>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="/book-a-call" 
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded hover:bg-gray-50"
          >
            Book a Call
          </a>
          <a 
            href="/app" 
            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="grid items-stretch overflow-hidden xl:grid-cols-2">
        <div className="flex h-full min-h-full flex-col xl:border-r xl:border-gray-200">
          <section className="flex flex-col items-start gap-0 px-4 w-full border-b border-gray-200 py-4 sm:py-8 lg:py-12">
            <div className="flex items-center gap-2 text-lg font-normal uppercase leading-none tracking-normal text-gray-500">
              <svg aria-hidden="true" className="size-3.5 shrink-0 scale-95 text-[#ff4f00]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H19V19M1 19L19 1" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
              </svg>
              <span>AUTOMATE YOUR BUSINESS</span>
            </div>
            <h1 className="mt-2 max-w-5xl text-left text-5xl leading-none tracking-normal text-gray-900 sm:text-6xl lg:text-[64px]">
              Supervise and Run your business with Artificial Intelligence.
            </h1>
            <p className="mt-4 max-w-2xl text-left text-xl leading-7 tracking-normal text-gray-500">
              Supervisor brings AI-first workflows, team visibility, and mobile access into a focused workspace.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-5 pb-2">
              <a 
                href="/book-a-call" 
                className="inline-flex items-center gap-2 h-11 px-7 text-sm font-medium border border-gray-200 rounded bg-white hover:bg-gray-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                Book a Call
              </a>
              <a 
                href="/app" 
                className="inline-flex items-center gap-2 h-11 px-7 text-sm font-medium bg-black text-white rounded hover:bg-gray-800"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </section>

          {/* Feature Cards Grid */}
          <div className="mt-auto grid min-h-56 grid-cols-2 grid-rows-2 border-t border-gray-200">
            <div className="p-4 border-r border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Ask Questions</h3>
              <p className="mt-1 text-sm text-gray-500">Ask anything about your business and we'll find you the answer.</p>
            </div>
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Supervise</h3>
              <p className="mt-1 text-sm text-gray-500">Automatically and based on your preferences, review that everything is running smoothly.</p>
            </div>
            <div className="p-4 border-r border-gray-200">
              <h3 className="font-semibold text-gray-900">Schedule Actions</h3>
              <p className="mt-1 text-sm text-gray-500">Set up things which should run on a schedule, we'll run those for you.</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Mini Apps</h3>
              <p className="mt-1 text-sm text-gray-500">Build simple software to run your business, just by asking for it.</p>
            </div>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative flex items-center justify-center bg-gray-50 p-8 min-h-[600px]">
          <div className="relative">
            <img 
              src="https://trysupervisor.com/_next/image?url=%2Fimages%2Fiphone-17-black-portrait.png&w=3840&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf" 
              alt="iPhone mockup" 
              className="w-64 h-auto relative z-10"
            />
            <img 
              src="https://trysupervisor.com/_next/image?url=%2Fimages%2Fiphone-status-bar.png&w=3840&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf" 
              alt="Status bar" 
              className="absolute top-4 left-1/2 -translate-x-1/2 w-48 z-20"
            />
          </div>

          {/* Floating Cards */}
          <div className="absolute left-4 top-1/4 bg-white rounded-lg shadow-lg p-4 max-w-xs border border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <span className="text-green-500">●</span>
              Question desk
              <span className="ml-auto bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">Answered</span>
            </div>
            <h4 className="font-semibold text-sm">Ask anything about the business</h4>
            <p className="text-xs text-gray-500 mt-1">Supervisor searches the right tools and returns the answer with sources.</p>
            <div className="mt-2 text-xs text-gray-400">
              <span>6 sources</span> · <span>2 actions</span>
            </div>
          </div>

          <div className="absolute right-4 top-1/3 bg-white rounded-lg shadow-lg p-4 max-w-xs border border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <span className="text-blue-500">●</span>
              Operations watch
              <span className="ml-auto bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">Watching</span>
            </div>
            <h4 className="font-semibold text-sm">Every team status in one view</h4>
            <p className="text-xs text-gray-500 mt-1">Dashboards, alerts, and owner follow ups stay connected to the work.</p>
            <div className="mt-2 text-xs text-gray-400">
              <span>12 checks</span> · <span>4 alerts</span>
            </div>
          </div>

          <div className="absolute left-8 bottom-1/4 bg-white rounded-lg shadow-lg p-4 max-w-xs border border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <span className="text-purple-500">●</span>
              Scheduled actions
              <span className="ml-auto bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs">Scheduled</span>
            </div>
            <h4 className="font-semibold text-sm">Recurring checks run on time</h4>
            <p className="text-xs text-gray-500 mt-1">Define the cadence once and Supervisor keeps the process moving.</p>
            <div className="mt-2 text-xs text-gray-400">
              <span>18 runs</span> · <span>7 routines</span>
            </div>
          </div>

          <div className="absolute right-8 bottom-1/3 bg-white rounded-lg shadow-lg p-4 max-w-xs border border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <span className="text-orange-500">●</span>
              Mini apps
              <span className="ml-auto bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs">Built</span>
            </div>
            <h4 className="font-semibold text-sm">Build tools by asking for them</h4>
            <p className="text-xs text-gray-500 mt-1">Spin up focused tools like scanners, live maps, and order queues.</p>
            <div className="mt-2 text-xs text-gray-400">
              <span>9 apps</span> · <span>3 live</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-200">
        <div className="p-6 border-r border-b border-gray-200">
          <div className="text-3xl font-bold text-gray-900">118</div>
          <div className="text-sm text-gray-500">Questions answered</div>
          <div className="text-xs text-gray-400 mt-1">Sourced answers delivered</div>
        </div>
        <div className="p-6 border-r border-b border-gray-200">
          <div className="text-3xl font-bold text-gray-900">104</div>
          <div className="text-sm text-gray-500">Alerts reviewed</div>
          <div className="text-xs text-gray-400 mt-1">Signals checked automatically</div>
        </div>
        <div className="p-6 border-r border-b border-gray-200">
          <div className="text-3xl font-bold text-gray-900">86</div>
          <div className="text-sm text-gray-500">Scheduled runs</div>
          <div className="text-xs text-gray-400 mt-1">Checks completed on cadence</div>
        </div>
        <div className="p-6 border-b border-gray-200">
          <div className="text-3xl font-bold text-gray-900">41</div>
          <div className="text-sm text-gray-500">Mini apps built</div>
          <div className="text-xs text-gray-400 mt-1">Internal tools generated</div>
        </div>
        <div className="p-6 border-r border-gray-200">
          <div className="text-3xl font-bold text-gray-900">280</div>
          <div className="text-sm text-gray-500">Sources searched</div>
          <div className="text-xs text-gray-400 mt-1">Docs, tools, and records covered</div>
        </div>
        <div className="p-6 border-r border-gray-200">
          <div className="text-3xl font-bold text-gray-900">97%</div>
          <div className="text-sm text-gray-500">Answer speed</div>
          <div className="text-xs text-gray-400 mt-1">Questions resolved without handoff</div>
        </div>
        <div className="p-6 border-r border-gray-200">
          <div className="text-3xl font-bold text-gray-900">99%</div>
          <div className="text-sm text-gray-500">On-time checks</div>
          <div className="text-xs text-gray-400 mt-1">Runs completed before deadline</div>
        </div>
        <div className="p-6">
          <div className="text-3xl font-bold text-gray-900">4.9</div>
          <div className="text-sm text-gray-500">Builder satisfaction</div>
          <div className="text-xs text-gray-400 mt-1">Average internal tool rating</div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 px-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm font-normal uppercase text-gray-500 mb-2">
          SET IT UP IN 5 MINUTES
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">How it Works.</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="text-6xl font-light text-gray-200 mb-4">01</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect and Explain</h3>
            <p className="text-gray-500">Link your tools, files and workflows, give us as much context as possible about how your business works.</p>
          </div>
          <div className="flex flex-col">
            <div className="text-6xl font-light text-gray-200 mb-4">02</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Invite your Team</h3>
            <p className="text-gray-500">It's as simple as entering their email and role, we'll handle the rest.</p>
          </div>
          <div className="flex flex-col">
            <div className="text-6xl font-light text-gray-200 mb-4">03</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Start using it</h3>
            <p className="text-gray-500">Set it up in your favorite platform.</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 border-t border-gray-200">
        <div className="text-sm font-normal uppercase text-gray-500 mb-2">Industries</div>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Built around the way your team actually operates.</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/for/startup" className="group block overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img 
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fstartup-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf" 
                alt="Startup" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Startup</h3>
              <p className="text-sm text-gray-500 mt-1">Keep launches, product, customers, hiring and finance in check and automated as you scale.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>

          <Link href="/for/local-business" className="group block overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img 
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Flocal-business-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf" 
                alt="Local Business" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Local Business</h3>
              <p className="text-sm text-gray-500 mt-1">Coordinate daily work, appointments, staff checks, and customer follow ups.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>

          <Link href="/for/logistics" className="group block overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img 
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Flogistics-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf" 
                alt="Logistics" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Logistics</h3>
              <p className="text-sm text-gray-500 mt-1">Track routes, exceptions, handoffs, and updates without control-tower sprawl.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>

          <Link href="/for/non-profits" className="group block overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img 
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Fnon-profits-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf" 
                alt="Non Profits" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Non Profits</h3>
              <p className="text-sm text-gray-500 mt-1">Keep programs, volunteers, donors, and reports moving with less manual chasing.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>

          <Link href="/for/restaurants" className="group block overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img 
                src="https://trysupervisor.com/_next/image?url=%2Fimages%2Findustries%2Fcurated%2Frestaurants-grid.webp&w=1920&q=75&dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf" 
                alt="Restaurants" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Restaurants</h3>
              <p className="text-sm text-gray-500 mt-1">Watch shifts, vendors, service issues, and repeat checks from one calm lane.</p>
              <span className="text-sm text-[#ff4f00] mt-2 inline-block">See More</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/">
            <img 
              src="https://trysupervisor.com/supervisor-logo.svg?dpl=dpl_D9vqmuDy7TmJjfKwoUsiuN7YFRuf" 
              alt="Supervisor" 
              className="h-6 w-auto" 
            />
          </Link>
          <nav className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <Link href="/use-cases" className="hover:text-gray-900">Use Cases</Link>
            <Link href="/for" className="hover:text-gray-900">Industries</Link>
            <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}
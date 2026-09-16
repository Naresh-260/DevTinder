
import React from "react";

const LandingPage = ()=>{
  return (
    <div className="min-h-screen overflow-hidden bg-[#070709] text-white">
      {/* Background */}
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/[0.12] blur-[150px]" />
        <div className="absolute left-[-200px] top-[40%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.08] blur-[130px]" />
        <div className="absolute right-[-200px] top-[60%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/[0.06] blur-[140px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-20 border-b border-white/[0.06]">
        <nav
          className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="/"
            aria-label="DevTinder home"
            className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-600/20"
              aria-hidden="true"
            >
              <span className="font-mono text-sm font-bold">
                {"</>"}
              </span>
            </div>

            <span className="text-lg font-bold tracking-tight">
              DevTinder
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#how-it-works"
              className="text-sm text-zinc-500 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              How it works
            </a>

            <a
              href="#features"
              className="text-sm text-zinc-500 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-sm text-zinc-500 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              About
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition hover:text-white sm:block"
            >
              Log in
            </a>

            <a
              href="/login"
              className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#070709]"
            >
              Get started
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="relative px-6 pb-24 pt-24 sm:pt-32 lg:pb-32 lg:pt-36">
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,.8)]"
                aria-hidden="true"
              />

              <span className="text-[11px] font-medium tracking-wide text-violet-300">
                Built for developers, by developers
              </span>
            </div>

            {/* Heading */}
            <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Find your
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                dev tribe.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              DevTinder helps developers discover the right people to
              collaborate with, build projects together, exchange ideas, and
              create meaningful connections.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/signup"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-3.5 text-sm font-semibold shadow-xl shadow-violet-600/20 transition hover:-translate-y-0.5 hover:shadow-violet-600/30 sm:w-auto"
              >
                Start discovering
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>

              <a
                href="#how-it-works"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-7 py-3.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06] sm:w-auto"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Product visual */}
          <div className="relative mx-auto mt-20 max-w-6xl">
            {/* Glow */}
            <div
              className="absolute inset-x-20 top-20 h-72 rounded-full bg-violet-600/20 blur-[100px]"
              aria-hidden="true"
            />

            {/* Browser */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0d0e11] shadow-[0_40px_120px_rgba(0,0,0,.6)]">
              {/* Browser top bar */}
              <div className="flex h-12 items-center border-b border-white/[0.06] px-5">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>

                <div className="mx-auto hidden h-7 w-80 items-center justify-center rounded-md border border-white/[0.05] bg-white/[0.02] text-[9px] text-zinc-700 sm:flex">
                  devtinder.app
                </div>
              </div>

              {/* Product mockup */}
              <div className="grid min-h-[420px] grid-cols-[190px_1fr]">
                {/* Sidebar */}
                <div className="hidden border-r border-white/[0.06] p-5 sm:block">
                  <div className="mb-8 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/20">
                      <span className="font-mono text-[9px] text-violet-300">
                        {"</>"}
                      </span>
                    </div>

                    <span className="text-xs font-bold">DevTinder</span>
                  </div>

                  <div className="space-y-2">
                    <MockNav active label="Discover" icon="⌂" />
                    <MockNav label="Matches" icon="♡" />
                    <MockNav label="Messages" icon="○" />
                    <MockNav label="Projects" icon="◇" />
                  </div>
                </div>

                {/* Main mockup */}
                <div className="p-5 sm:p-8">
                  <div className="mb-6">
                    <div className="h-2.5 w-32 rounded bg-white/10" />
                    <div className="mt-2 h-2 w-56 rounded bg-white/[0.04]" />
                  </div>

                  <div className="grid gap-5 lg:grid-cols-[1fr_230px]">
                    {/* Profile mock card */}
                    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111216]">
                      <div className="relative h-52 bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-transparent">
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-violet-400 blur-3xl" />
                        </div>

                        <div className="absolute bottom-[-20px] left-6 h-20 w-20 rounded-2xl border-4 border-[#111216] bg-gradient-to-br from-violet-400 to-indigo-600" />

                        <div className="absolute right-5 top-5 rounded-full bg-emerald-400/10 px-3 py-1.5 text-[9px] text-emerald-300">
                          ● Available
                        </div>
                      </div>

                      <div className="p-6 pt-8">
                        <div className="h-3 w-32 rounded bg-white/10" />
                        <div className="mt-2 h-2 w-24 rounded bg-white/[0.05]" />

                        <div className="mt-5 space-y-2">
                          <div className="h-2 w-full rounded bg-white/[0.04]" />
                          <div className="h-2 w-5/6 rounded bg-white/[0.04]" />
                        </div>

                        <div className="mt-5 flex gap-2">
                          <MockTag text="React" />
                          <MockTag text="Node.js" />
                          <MockTag text="AI" />
                        </div>

                        <div className="mt-6 flex justify-center gap-3">
                          <MockButton symbol="×" />
                          <MockButton primary symbol="♡" />
                          <MockButton symbol="→" />
                        </div>
                      </div>
                    </div>

                    {/* Right mock panel */}
                    <div className="hidden space-y-4 lg:block">
                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-4">
                        <div className="h-2 w-24 rounded bg-white/10" />

                        <div className="mt-5 flex -space-x-2">
                          <MockAvatar />
                          <MockAvatar />
                          <MockAvatar />
                          <MockAvatar />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-4">
                        <div className="h-2 w-32 rounded bg-white/10" />

                        <div className="mt-4 space-y-3">
                          <MockRow />
                          <MockRow />
                          <MockRow />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="border-t border-white/[0.06] px-6 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-violet-400">
                How it works
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                Less scrolling.
                <br />
                More building.
              </h2>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Finding the right developer shouldn't feel like searching
                through an endless directory.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-3">
              <Step
                number="01"
                title="Create your profile"
                description="Show the community who you are, what you build and the technologies you love."
              />

              <Step
                number="02"
                title="Discover developers"
                description="Explore developers based on skills, interests, projects and what you want to build."
              />

              <Step
                number="03"
                title="Connect & build"
                description="Match with people you click with and turn conversations into real projects."
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="border-t border-white/[0.06] px-6 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-violet-400">
                Made for builders
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                Everything starts with
                <br />
                <span className="text-zinc-500">the right connection.</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Feature
                icon="⌘"
                title="Developer-first"
                description="A community designed around skills, technology and things you actually build."
              />

              <Feature
                icon="⚡"
                title="Smart discovery"
                description="Find people whose skills and interests naturally complement your own."
              />

              <Feature
                icon="◇"
                title="Build together"
                description="Turn a simple connection into a project, startup or long-term collaboration."
              />

              <Feature
                icon="↗"
                title="Real connections"
                description="Meet developers beyond your existing network and expand your community."
              />

              <Feature
                icon="</>"
                title="Show your stack"
                description="Let your technologies and projects speak for you."
              />

              <Feature
                icon="∞"
                title="Your community"
                description="Create meaningful professional relationships with people who share your passion."
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="about"
          className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 lg:py-36"
        >
          <div
            className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.12] blur-[120px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Your next great
              <br />
              <span className="text-zinc-500">collaboration starts here.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-zinc-500">
              Join DevTinder and discover developers who are ready to build,
              collaborate and grow together.
            </p>

            <a
              href="/signup"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
            >
              Get started
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10">
              <span className="font-mono text-[9px] text-violet-300">
                {"</>"}
              </span>
            </div>

            <span className="text-xs font-semibold text-zinc-500">
              DevTinder
            </span>
          </div>

          <p className="text-[10px] text-zinc-700">
            Built for developers who build.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ---------------- Components ---------------- */

function Step({ number, title, description }) {
  return (
    <div className="bg-[#0c0d0f] p-7 lg:p-9">
      <span className="font-mono text-xs text-violet-400">{number}</span>

      <h3 className="mt-8 text-base font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-zinc-600">
        {description}
      </p>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/20 hover:bg-violet-500/[0.025]">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] font-mono text-sm text-violet-400 transition group-hover:border-violet-500/20 group-hover:bg-violet-500/10">
        {icon}
      </div>

      <h3 className="mt-6 text-sm font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-zinc-600">
        {description}
      </p>
    </div>
  );
}

function MockNav({ label, icon, active }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[10px] ${
        active
          ? "bg-violet-500/10 text-violet-300"
          : "text-zinc-600"
      }`}
    >
      <span>{icon}</span>
      {label}
    </div>
  );
}

function MockTag({ text }) {
  return (
    <span className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2 py-1 font-mono text-[8px] text-zinc-500">
      {text}
    </span>
  );
}

function MockButton({ symbol, primary }) {
  return (
    <div
      className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm ${
        primary
          ? "border-violet-500/20 bg-violet-500/20 text-violet-300"
          : "border-white/[0.07] bg-white/[0.02] text-zinc-600"
      }`}
    >
      {symbol}
    </div>
  );
}

function MockAvatar() {
  return (
    <div className="h-8 w-8 rounded-full border-2 border-[#0d0e11] bg-gradient-to-br from-violet-400/40 to-blue-400/20" />
  );
}

function MockRow() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-7 w-7 rounded-full bg-white/[0.05]" />

      <div className="flex-1">
        <div className="h-1.5 w-16 rounded bg-white/[0.08]" />
        <div className="mt-1.5 h-1 w-24 rounded bg-white/[0.035]" />
      </div>
    </div>
  );
}
export default LandingPage;

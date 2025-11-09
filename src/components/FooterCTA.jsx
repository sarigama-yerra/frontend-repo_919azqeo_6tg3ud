export default function FooterCTA() {
  return (
    <section id="waitlist" className="relative bg-gradient-to-b from-indigo-950 to-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Ready to give your guests a concierge they’ll remember?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-indigo-200">
          We make hospitality feel human again — powered by intelligence that never sleeps.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full max-w-sm rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-indigo-300/60 outline-none backdrop-blur"
          />
          <button className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-medium text-indigo-900">
            Join the waitlist
          </button>
        </div>
        <p className="mt-4 text-xs text-indigo-300/80">GDPR‑compliant • Secure API • 99.9% uptime</p>
      </div>
    </section>
  );
}

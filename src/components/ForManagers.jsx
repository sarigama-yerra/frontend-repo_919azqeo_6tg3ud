export default function ForManagers() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-950 to-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Cut response times to zero. <br /> Boost reviews. <br /> Save thousands on staff.
            </h2>
            <p className="mt-4 text-indigo-200">
              Give every guest a personal concierge. Consistently warm, on brand, and available around the clock.
            </p>
            <a href="#pilot" className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-medium text-indigo-900">
              Book a Pilot Demo
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-indigo-200 backdrop-blur">
            <ul className="list-disc space-y-2 pl-5">
              <li>Proactive recommendations that delight guests</li>
              <li>Sentiment and SLA alerts before problems escalate</li>
              <li>Automatic upsells and local partnerships</li>
              <li>Seamless handoff to human agents when needed</li>
            </ul>
            <p className="mt-6 text-sm text-indigo-300/80">GDPR‑compliant • Secure API • 99.9% uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              Calm. Intelligent. Effortless.
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Turn Every Guest Message Into a 5-Star Experience.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-indigo-100 md:text-xl">
              Sysist is the personal concierge that handles all guest communication for Airbnb and vacation rentals — instantly, 24/7, on WhatsApp and Telegram.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#waitlist" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-medium text-indigo-900 shadow/40 shadow-indigo-900/20 transition hover:shadow-lg">
                Get Early Access
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur transition hover:bg-white/20">
                Watch the Demo
              </a>
            </div>
          </div>

          <div className="relative h-[420px] w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-950/30 via-transparent to-sky-500/10" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.35)_0%,rgba(15,23,42,0)_60%)]" />
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-indigo-950 via-slate-950 to-indigo-950" />
    </section>
  );
}

export default function Logos() {
  const items = ['Airbnb', 'Booking.com', 'Guesty', 'Hostaway', 'Hospitable', 'Stripe', 'Twilio'];
  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-indigo-950 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-indigo-200 backdrop-blur">
          <p className="text-sm uppercase tracking-widest text-indigo-300/80">Integrates with</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/80">
            {items.map((name) => (
              <span key={name} className="text-base font-medium">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

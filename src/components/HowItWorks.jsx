import { CheckCircle2, MessageCircle, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: '1️⃣',
      title: 'Connect your properties',
      desc: 'Sync your Airbnb, Booking.com, or Guesty account — Sysist learns everything automatically.',
      icon: Rocket,
    },
    {
      id: '2️⃣',
      title: 'Guests message on WhatsApp',
      desc: 'They chat like they would with a human assistant — fast, natural, multilingual.',
      icon: MessageCircle,
    },
    {
      id: '3️⃣',
      title: 'Sysist handles it',
      desc: 'From Wi‑Fi passwords to taxi bookings and restaurant reservations — all handled instantly.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="how" className="relative bg-gradient-to-b from-indigo-950 to-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">How it works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-indigo-200">
          Three simple steps to make hospitality feel human again.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ id, title, desc, icon: Icon }) => (
            <div key={id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{id}</span>
                <Icon className="h-6 w-6 text-indigo-300" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-white">{title}</h3>
              <p className="mt-2 text-indigo-200">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

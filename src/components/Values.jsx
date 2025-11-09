import { Brain, Globe, LineChart, MessageSquare, Sparkles, Wallet } from 'lucide-react';

export default function Values() {
  const items = [
    {
      title: 'Instant Answers',
      desc: 'Replies in < 1 second, 24/7.',
      icon: MessageSquare,
    },
    {
      title: 'Personal Concierge',
      desc: 'Book taxis, tables, tours.',
      icon: Wallet,
    },
    {
      title: 'Smart Memory',
      desc: 'Remembers past requests and preferences.',
      icon: Brain,
    },
    {
      title: 'Multilingual',
      desc: 'Speaks every language fluently.',
      icon: Globe,
    },
    {
      title: 'Manager Dashboard',
      desc: 'Monitor chats, sentiment, and ratings.',
      icon: LineChart,
    },
    {
      title: 'Premium Experience',
      desc: 'Calm, intelligent, and trust‑driven.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-indigo-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">
          Everything your guests need — instantly.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Icon className="h-6 w-6 text-indigo-300" />
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-indigo-200">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

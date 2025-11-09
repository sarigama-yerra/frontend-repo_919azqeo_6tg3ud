import { Star } from 'lucide-react';

const quotes = [
  {
    text: 'Our response time went from 4 hours to 4 seconds — and our rating jumped to 4.9★.',
    author: 'Amelia, Boutique Stays'
  },
  {
    text: 'It feels like having 10 employees in one assistant.',
    author: 'Luca, Alpine Rentals'
  }
];

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-indigo-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">Property managers love Sysist.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <div key={q.text} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-3 flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-300" />
                ))}
              </div>
              <p className="text-lg text-white">“{q.text}”</p>
              <p className="mt-3 text-sm text-indigo-300">{q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Send, Star } from 'lucide-react';

const messagesSeed = [
  { role: 'guest', text: "Hey, what's the Wi‑Fi password?" },
  { role: 'sysist', text: "It’s Sysist_2025. By the way, would you like me to book you a taxi to the airport tomorrow?" },
];

export default function Demo() {
  const [messages, setMessages] = useState(messagesSeed);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'guest', text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { role: 'sysist', text: "Absolutely. I can handle that for you — what time works best?" },
      ]);
    }, 700);
  };

  return (
    <section id="demo" className="relative bg-gradient-to-b from-indigo-950 to-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">See it in action</h2>
            <p className="mt-3 text-indigo-200">
              A live, interactive mock chat. Try asking for late check‑out, extra towels, or a restaurant recommendation.
            </p>
            <div className="mt-6 flex items-center gap-2 text-amber-300">
              <Star className="h-5 w-5 fill-amber-300" />
              <span className="text-sm">“Our response time went from 4 hours to 4 seconds — and our rating jumped to 4.9★.”</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="h-[360px] w-full overflow-y-auto rounded-xl bg-slate-950/60 p-4">
              {messages.map((m, i) => (
                <div key={i} className={`mb-3 flex ${m.role === 'guest' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`${m.role === 'guest' ? 'bg-white/10 text-white' : 'bg-indigo-500 text-white'} max-w-[80%] rounded-2xl px-4 py-2`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Type a message..."
                className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white placeholder-indigo-300/60 outline-none backdrop-blur"
              />
              <button onClick={send} className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-medium text-indigo-900">
                <Send className="h-4 w-4" /> Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

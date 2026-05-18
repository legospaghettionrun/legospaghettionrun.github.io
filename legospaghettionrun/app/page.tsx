export default function Portfolio() {
  const writings = [
    {
      title: 'Why I’m Drawn to Digital Assets',
      desc: 'Notes on internet-native financial systems, ownership, and why crypto feels culturally important beyond speculation.',
    },
    {
      title: 'Cities I Want to Live In Before 30',
      desc: 'A running list of places that feel intellectually alive — from Singapore cafés to Madrid evenings.',
    },
    {
      title: 'The Kind of Career I Actually Want',
      desc: 'Thoughts on ambition, global mobility, meaningful work, and designing a non-linear life.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-[#1b1b1b] font-serif">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <nav className="flex items-center justify-between text-sm tracking-[0.02em] text-neutral-500">
          <p>Deekshitha Reddy</p>

          <div className="flex gap-6">
            
            <a href="#work" className="hover:text-black transition">
              Up To
            </a>
            
            
          </div>
        </nav>

        <section className="pt-16 pb-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">
            <div className="space-y-6">
              <div className="w-[280px] h-[340px] bg-neutral-200 rounded-[32px] overflow-hidden border border-black/10">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                  alt="Headshot placeholder"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-5 text-neutral-500 pt-2">
                <a
                  href="https://github.com/MDeekshithaReddy"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.37-1.343-3.37-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.877v1.917h.041C11.82 8.965 13.183 8 15.225 8 19.042 8 20 10.423 20 13.565V22h-3v-7.013c0-1.673-.03-3.825-2.332-3.825-2.333 0-2.69 1.823-2.69 3.705V22h-3V8z" />
                  </svg>
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.639 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.49h2.039L6.486 3.24H4.298l13.31 17.404z" />
                  </svg>
                </a>

                <a
                  href="mailto:deekshitha.m.reddy@gmail.com"
                  className="hover:text-black transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615A2.25 2.25 0 012.25 6.993V6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="max-w-3xl pt-4">
              <p className="text-neutral-500 italic text-base">
                Mumbai / Delhi
              </p>

              <h1 className="text-3xl md:text-5xl leading-[1.1] mt-6 font-light tracking-tight">
                Deekshitha Reddy
              </h1>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-700">
                <p>
                  I’m currently working as a Technology Analyst at Morgan Stanley. Very recently,
                  I’ve started finding software engineering genuinely fun — mostly because of the joy of building things.
                </p>

                <p>
                  Over the past few years, I’ve spent time around portfolio risk management,
                  startup investment analytics and valuation, and research in reinforcement learning
                  and computational social choice.
                </p>

                <p>
                  Lately, I’ve also developed an interest in digital assets — not exactly crypto,
                  but more broadly the idea of digitizing systems, ownership, and economies.
                </p>
              </div>
            </div>
          </div>
        </section>

        

        <section
          id="work"
          className="border-t border-black/10 py-20 grid md:grid-cols-[1fr_2fr] gap-16"
        >
          <div>
            <p className="text-sm tracking-[0.02em] text-neutral-500">
              Things I Somehow Ended Up Doing
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="text-3xl font-light">Morgan Stanley</h3>
                <span className="text-neutral-500">2024 — Present</span>
              </div>

              <p className="mt-3 text-lg leading-relaxed text-neutral-700">
                Technology Analyst — focused on the technology side of portfolio risk management and financial infrastructure.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="text-3xl font-light">Varidus</h3>
                <span className="text-neutral-500">2023</span>
              </div>

              <p className="mt-3 text-lg leading-relaxed text-neutral-700">
                Lead Analyst — worked on startup investment analytics and valuation.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="text-3xl font-light">Research & Projects</h3>
                <span className="text-neutral-500">2022 — Present</span>
              </div>

              <p className="mt-3 text-lg leading-relaxed text-neutral-700">
                Research in reinforcement learning and computational social choice.
              </p>
            </div>
          </div>
        </section>

        

        <section className="border-t border-black/10 py-20 grid md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="text-sm tracking-[0.02em] text-neutral-500">
              Right Now
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700 max-w-2xl">
            <p>
              Reading about financial history, internet culture, and businesses that quietly shape the world.
            </p>

            <p>
              Thinking a lot about cities, movement, digital assets, and the kinds of lives people design for themselves.
            </p>

            <p>
              Usually found working out of cafés, saving places on maps,
              or going down strange research rabbit holes online.
            </p>
          </div>
        </section>

        <section className="border-t border-black/10 py-24">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <p className="text-sm tracking-[0.02em] text-neutral-500">
                Saunterings
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
                alt="City"
                className="rounded-[28px] h-[260px] w-full object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop"
                alt="Travel"
                className="rounded-[28px] h-[260px] w-full object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop"
                alt="Cafe"
                className="rounded-[28px] h-[340px] w-full object-cover md:col-span-2"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 py-24 grid md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="text-sm tracking-[0.02em] text-neutral-500">
              Things I've Been Curious About
            </p>
          </div>

          <div className="space-y-8">
            {writings.map((writing) => (
              <div
                key={writing.title}
                className="group border-b border-black/10 pb-8 cursor-pointer"
              >
                <h3 className="text-3xl font-light group-hover:translate-x-1 transition-transform">
                  {writing.title}
                </h3>

                <p className="mt-3 text-lg leading-relaxed text-neutral-600 max-w-2xl">
                  {writing.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        </div>
    </div>
  );
}

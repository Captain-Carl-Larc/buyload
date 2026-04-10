import { siteConfig } from "@/core/config/site";

export default function AboutHero() {
  return (
    <section className="px-6 pt-6 md:pt-24">
      <div className="mx-auto pb-10 md:pb-20 border-zinc-100 border-b max-w-7xl">
        <div className="flex lg:flex-row flex-col-reverse items-center gap-6 lg:gap-20">

          {/* LEFT: Text */}
          <div className="flex-1 max-w-2xl">
            <h1 className="mb-8 font-black text-zinc-900 text-6xl md:text-8xl leading-[0.85] tracking-tighter">
              Engineering <br />
              <span className="text-orange-500 text-5xl md:text-7xl">Digital Velocity.</span>
            </h1>
            <p className="font-medium text-zinc-500 text-xl md:text-2xl leading-relaxed">
              At {siteConfig.name}, we don't build generic websites. We engineer
              custom digital infrastructure for brands that prioritize
              performance, ownership, and long-term growth.
            </p>
          </div>

          {/* RIGHT: Visual poster */}
          <div className="flex justify-center w-full lg:w-auto shrink-0">
            {/*
              Replace this <svg> with:
              <Image src="/images/about-poster.png" alt="What makes Fyutcha Labs different" width={400} height={480} />
              once your custom poster is ready.
            */}
            <svg
              width="380"
              height="460"
              viewBox="0 0 380 460"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl w-full lg:max-w-none max-w-sm"
              aria-label="What makes Fyutcha Labs different"
            >
              {/* Card background */}
              <rect width="380" height="460" rx="20" fill="#18181b" />

              {/* Subtle top-right orange glow */}
              <ellipse cx="320" cy="60" rx="100" ry="80" fill="#f97316" fillOpacity="0.15" />

              {/* Header label */}
              <text x="28" y="48" fontFamily="monospace" fontSize="10" fill="#f97316" fontWeight="700" letterSpacing="3">
                WHAT MAKES US DIFFERENT
              </text>
              <line x1="28" y1="58" x2="352" y2="58" stroke="#3f3f46" strokeWidth="1" />

              {/* ── ITEM 1: Custom-Built ── */}
              <rect x="28" y="78" width="44" height="44" rx="10" fill="#f97316" fillOpacity="0.12" />
              {/* Simple code icon */}
              <text x="42" y="107" fontFamily="monospace" fontSize="18" fill="#f97316" fontWeight="900">{`</>`}</text>
              <text x="84" y="97" fontFamily="sans-serif" fontSize="15" fill="#fafafa" fontWeight="700">Custom-Built</text>
              <text x="84" y="115" fontFamily="sans-serif" fontSize="11" fill="#71717a">No templates. Every pixel engineered</text>
              <text x="84" y="130" fontFamily="sans-serif" fontSize="11" fill="#71717a">for your brand and goals.</text>

              <line x1="28" y1="144" x2="352" y2="144" stroke="#27272a" strokeWidth="1" />

              {/* ── ITEM 2: Fast Delivery ── */}
              <rect x="28" y="162" width="44" height="44" rx="10" fill="#f97316" fillOpacity="0.12" />
              {/* Lightning icon */}
              <text x="42" y="191" fontFamily="sans-serif" fontSize="22" fill="#f97316">⚡</text>
              <text x="84" y="181" fontFamily="sans-serif" fontSize="15" fill="#fafafa" fontWeight="700">Fast Delivery</text>
              <text x="84" y="199" fontFamily="sans-serif" fontSize="11" fill="#71717a">Structured sprints. You see progress</text>
              <text x="84" y="214" fontFamily="sans-serif" fontSize="11" fill="#71717a">early and ship on time.</text>

              <line x1="28" y1="228" x2="352" y2="228" stroke="#27272a" strokeWidth="1" />

              {/* ── ITEM 3: Ongoing Support ── */}
              <rect x="28" y="246" width="44" height="44" rx="10" fill="#f97316" fillOpacity="0.12" />
              {/* Shield icon */}
              <text x="42" y="275" fontFamily="sans-serif" fontSize="22" fill="#f97316">🛡</text>
              <text x="84" y="265" fontFamily="sans-serif" fontSize="15" fill="#fafafa" fontWeight="700">Ongoing Support</text>
              <text x="84" y="283" fontFamily="sans-serif" fontSize="11" fill="#71717a">We stay after launch. One message</text>
              <text x="84" y="298" fontFamily="sans-serif" fontSize="11" fill="#71717a">away, always.</text>

              {/* Bottom divider */}
              <line x1="28" y1="316" x2="352" y2="316" stroke="#3f3f46" strokeWidth="1" />

              {/* Footer: brand + location */}
              <text x="28" y="344" fontFamily="monospace" fontSize="13" fill="#fafafa" fontWeight="900" letterSpacing="1">
                FYUTCHALABS.
              </text>
              <text x="28" y="362" fontFamily="sans-serif" fontSize="11" fill="#52525b">
                Design &amp; Development Studio
              </text>
              <text x="28" y="378" fontFamily="sans-serif" fontSize="11" fill="#52525b">
                Nairobi, Kenya
              </text>

              {/* Orange accent line bottom-right */}
              <rect x="280" y="330" width="72" height="3" rx="2" fill="#f97316" />
              <rect x="300" y="340" width="52" height="3" rx="2" fill="#f97316" fillOpacity="0.4" />

              {/* Corner dot */}
              <circle cx="352" cy="440" r="5" fill="#f97316" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
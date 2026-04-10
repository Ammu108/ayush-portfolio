import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0A0A0A] text-white px-6 md:px-16 py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-orange-500" />
          <span className="font-mono text-xs text-orange-400 tracking-widest uppercase">
            About Me
          </span>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-center">
          <div className="relative w-full max-w-xs mx-auto lg:mx-0">
            <div className="absolute -inset-4 border border-neutral-800" />
            <div className="absolute -right-5 -top-5 w-18 h-18 border border-orange-500/60 bg-orange-500/10" />
            <div className="relative border border-neutral-700 bg-[#0f0f0f] p-3">
              <Image
                src="/profile-img.png"
                alt="Profile portrait"
                width={360}
                height={420}
                className="w-full h-auto object-cover"
                priority={false}
              />
            </div>
          </div>

          <div>
            <h2
              className="uppercase leading-none tracking-tight"
              style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                fontSize: "clamp(2.4rem, 6.6vw, 5.2rem)",
                letterSpacing: "-0.015em",
              }}
            >
              Designer, Editor,
              <span className="block text-orange-400">Storyteller</span>
            </h2>

            <p
              className="mt-5 text-neutral-300 leading-relaxed max-w-2xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I am Ayush, a visual designer and video editor focused on
              brand-first storytelling. I blend design systems, motion, and
              cinematic edits to help creators and businesses build a distinct
              identity that feels premium, clear, and memorable.
            </p>

            <p
              className="mt-4 text-neutral-400 leading-relaxed max-w-2xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              From social campaigns to complete visual direction, my process is
              simple: understand the audience, shape a bold narrative, and
              deliver visuals that get attention and keep it.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="border border-neutral-800 bg-[#0d0d0d] p-4 text-center">
                <p className="text-2xl font-bold">2+</p>
                <p className="mt-1 text-[11px] text-neutral-500 font-mono uppercase tracking-widest">
                  Years Creating
                </p>
              </div>
              <div className="border border-neutral-800 bg-[#0d0d0d] p-4 text-center">
                <p className="text-2xl font-bold">120+</p>
                <p className="mt-1 text-[11px] text-neutral-500 font-mono uppercase tracking-widest">
                  Deliverables
                </p>
              </div>
              <div className="border border-neutral-800 bg-[#0d0d0d] p-4 text-center">
                <p className="text-2xl font-bold">Global</p>
                <p className="mt-1 text-[11px] text-neutral-500 font-mono uppercase tracking-widest">
                  Remote Clients
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex mt-8 items-center gap-3 border border-neutral-700 hover:border-neutral-400 text-white px-7 py-3 transition-colors uppercase tracking-widest text-xs font-mono"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

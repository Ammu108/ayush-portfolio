"use client";

import { useDownloadFile } from "../lib/utils";

const HeroSection = () => {
  const { download } = useDownloadFile();

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden flex flex-col">
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Accent blob - CSS only */}
      <div
        className="pointer-events-none absolute top-[-12%] right-[-10%] w-136 h-136 rounded-full z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,80,0,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[8%] left-[-10%] w-104 h-104 rounded-full z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(120,60,255,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 md:px-12 pt-10 pb-10 text-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-orange-500" />
          <span className="font-mono text-xs text-orange-400 tracking-widest uppercase">
            Available for work — 2026
          </span>
        </div>

        {/* Hero headline */}
        <div className="relative w-full max-w-6xl mx-auto">
          <h1
            className="font-black uppercase leading-none tracking-tighter"
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              fontSize: "clamp(4rem, 11vw, 11rem)",
              letterSpacing: "-0.02em",
            }}
          >
            <div className="flex flex-row justify-center gap-6 lg:gap-10">
              <span className="block text-white">Visual </span>
              <span
                className="block"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                  color: "transparent",
                }}
              >
                Designer
              </span>
            </div>
            <span className="block text-white">&amp; Editor</span>
          </h1>

          {/* Floating badge */}
          <div
            className="absolute -right-4 top-6 hidden lg:flex flex-col items-center justify-center w-32 h-32 rounded-full border border-neutral-700 text-center"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest leading-tight">
              2+ Years
              <br />
              Experience
            </span>
          </div>
        </div>

        {/* Descriptor */}
        <div className="mt-8">
          <p
            className="text-neutral-400 max-w-2xl leading-relaxed text-sm md:text-base mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Crafting bold visuals and cinematic edits that make brands
            impossible to ignore. From identity design to motion — all in one
            place.
          </p>
        </div>

        {/* Stats panel */}
        <div
          className="mt-10 mb-10 w-full max-w-2xl border border-neutral-800 bg-[rgba(255,255,255,0.02)]"
          style={{
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
            backdropFilter: "blur(2px)",
          }}
        >
          <div className="grid grid-cols-3 divide-x divide-neutral-800">
            <div className="py-5">
              <p className="text-2xl font-bold text-white">80+</p>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest">
                Projects
              </p>
            </div>
            <div className="py-5">
              <p className="text-2xl font-bold text-white">40+</p>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest">
                Clients
              </p>
            </div>
            <div className="py-5">
              <p className="text-2xl font-bold text-white">5★</p>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest">
                Rating
              </p>
            </div>
          </div>
        </div>

        {/* CTA Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={() => download("/ayush_resume.pdf", "ayush-resume.pdf")}
            className="group flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-4 transition-colors uppercase tracking-widest text-xs"
            style={{ fontFamily: "monospace" }}
          >
            View Resume
          </button>
          <a
            href="#contact"
            className="flex items-center gap-3 border border-neutral-700 hover:border-neutral-400 text-white px-8 py-4 transition-colors uppercase tracking-widest text-xs font-mono"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="marquee-container relative z-10 border-t border-b border-neutral-800 py-3 overflow-hidden bg-[#0d0d0d]">
        <div
          className="flex gap-12 whitespace-nowrap marquee-content"
          style={{
            animation: "marquee 50s linear infinite",
            width: "max-content",
          }}
        >
          {[
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Canva (Advanced)",
            "Poster Design",
            "Social Media Creatives",
            "Thumbnail Design (YouTube / Instagram)",
            "Adobe Premiere Pro",
            "Reel & Short-form Content Editing",
            "Audio Sync & Sound Design",
            "Content Planning",
            "Creative Thinking",
            "Transitions & Effectsg",
            "Communication Skills",
            "Social Media",
            "Color Grading",
            "Team Collaboration",
            "Problem Solving",
            "Attention to Detail",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-12 font-mono text-xs text-neutral-300 uppercase tracking-widest"
            >
              {item}
              <span className="text-orange-500">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

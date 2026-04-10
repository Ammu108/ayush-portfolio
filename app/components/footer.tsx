import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="relative bg-[#080808] text-white px-6 md:px-16 pt-12 pb-8 border-t border-neutral-800">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[72px_72px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7">
          <div>
            <p
              className="uppercase leading-none tracking-tight text-4xl md:text-5xl"
              style={{
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                letterSpacing: "-0.015em",
              }}
            >
              Ayush Portfolio
            </p>
            <p
              className="mt-3 text-neutral-400 text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Visual Design + Video Editing with a bold, modern narrative.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.instagram.com/_ayusheditzs?igsh=MTBsbzl5cHluNXRmYg%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="border border-neutral-700 hover:border-neutral-400 px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-neutral-300 transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/in/ayush-sharma-8b5601315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="border border-neutral-700 hover:border-neutral-400 px-4 py-2 text-[11px] font-mono uppercase tracking-widest text-neutral-300 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            © {new Date().getFullYear()} Ayush Portfolio
          </p>
          <p
            className="text-xs text-neutral-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Developed by{" "}
            <Link
              href="https://amenx.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-400 text-base underline"
            >
              AmenX
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

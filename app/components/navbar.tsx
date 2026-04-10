const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 flex items-center bg-black/50 backdrop-blur-md justify-between px-4 md:px-16 py-4">
      <span className="font-mono text-xs tracking-[0.3em] text-neutral-200 font-semibold uppercase">
        Ayush Portfolio
      </span>
      <div className="flex items-center gap-8">
        <a
          href="#work"
          className="text-xs tracking-widest text-neutral-400 hover:text-white transition-colors uppercase font-mono"
        >
          Work
        </a>
        <a
          href="#about"
          className="text-xs tracking-widest text-neutral-400 hover:text-white transition-colors uppercase font-mono"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-xs tracking-widest bg-white text-black px-5 py-2 hover:bg-neutral-200 transition-colors uppercase font-mono text-center"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

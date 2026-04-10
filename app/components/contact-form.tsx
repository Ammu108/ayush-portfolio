const ContactForm = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0A0A0A] text-white px-6 md:px-16 py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto border border-neutral-800 bg-[#0d0d0d] p-8 md:p-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-8 h-px bg-orange-500" />
          <span className="font-mono text-xs text-orange-400 tracking-widest uppercase">
            Contact
          </span>
        </div>

        <h2
          className="uppercase leading-none tracking-tight"
          style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: "clamp(2.2rem, 6vw, 5rem)",
            letterSpacing: "-0.015em",
          }}
        >
          Let&apos;s Build Something
          <span className="block text-orange-400">Outstanding</span>
        </h2>

        <p
          className="mt-5 text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          For project inquiries and support, click the email below and send your
          brief. I usually respond within 24 hours.
        </p>

        <a
          href="mailto:ayushsharma230705@gmail.com?subject=Project%20Inquiry&body=Hi%20Ayush%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project.%0A"
          className="inline-flex mt-8 items-center justify-center gap-3 border border-orange-400/60 bg-orange-500/10 hover:bg-orange-500/20 text-orange-200 px-8 py-4 transition-colors uppercase tracking-widest text-xs font-mono"
        >
          ayushsharma230705@gmail.com
        </a>
      </div>
    </section>
  );
};

export default ContactForm;

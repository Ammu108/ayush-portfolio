"use client";

import Image from "next/image";
import Link from "next/link";

type WorkItem = {
  title: string;
  shortDescription: string;
  thumbnail: string;
  category: string;
};

const workItems: WorkItem[] = [
  {
    title: "Iskon Temple",
    category: "Branding",
    shortDescription:
      "Logo system, social templates, and packaging look for a premium cafe launch.",
    thumbnail: "/iskcon.jpg",
  },
  {
    title: "Masala Dosa",
    category: "Ads",
    shortDescription:
      "High-energy ad graphics and carousel designs crafted for paid social reach.",
    thumbnail: "/masala_dossa.jpg",
  },
  {
    title: "Urban Threads",
    category: "Social",
    shortDescription:
      "Typography-led direction and feed system designed for stronger visual identity.",
    thumbnail: "/post_5.jpg",
  },
  {
    title: "Horizon Coffee",
    category: "Identity",
    shortDescription: "Logo system and templates for a premium cafe launch.",
    thumbnail: "/post_18.jpg",
  },
  {
    title: "Nova Fitness",
    category: "Ads",
    shortDescription:
      "Dynamic motion graphics and reel editing for fitness campaigns.",
    thumbnail: "/post-6.jpg",
  },
];

const WorkCard = ({ item }: { item: WorkItem }) => (
  <article className="group border border-neutral-800 bg-[#0d0d0d] overflow-hidden transition-all hover:border-orange-500/50">
    {/* Main Image Block */}
    <div className="relative h-48 w-full overflow-hidden border-b border-neutral-800 bg-neutral-900">
      <Image
        src={item.thumbnail}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
      <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-neutral-200 border border-neutral-600/70 px-2 py-1 bg-black/40 backdrop-blur-sm">
        {item.category}
      </span>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-orange-400 transition-colors">
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-neutral-400 leading-relaxed font-sans">
        {item.shortDescription}
      </p>
    </div>
  </article>
);

const WorkSection = () => {
  return (
    <section
      id="work"
      className="relative bg-[#0A0A0A] text-white px-6 md:px-16 py-24"
    >
      {/* Subtle Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-orange-500" />
              <span className="font-mono text-xs text-orange-400 tracking-[0.3em] uppercase font-bold">
                Portfolio
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter font-['Bebas_Neue'] leading-[0.9]">
              Selected <span className="text-orange-500">Works</span>
            </h2>
            <p className="mt-6 text-neutral-400 leading-relaxed font-sans">
              A curated collection of visual identities, social media campaigns,
              and cinematic video edits crafted for global brands.
            </p>
          </div>

          <Link
            href="https://drive.google.com/drive/folders/1TT4wJ2_ShmK8m5tWyTApVgQ-YI1c5bhN"
            target="_blank"
            className="group font-mono text-xs uppercase tracking-[0.2em] py-3 px-6 border border-neutral-800 hover:bg-white hover:text-black transition-all"
          >
            Explore Full Archive →
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems.map((item) => (
            <WorkCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

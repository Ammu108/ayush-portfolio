"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectItem = {
	title: string;
	shortDescription: string;
	thumbnail: string;
	category: string;
};

type ActiveProjectItem = ProjectItem | null;

const projects: ProjectItem[] = [
	{
		title: "Iskon Temple",
		category: "Branding",
		shortDescription:
			"Temple branding artwork with warm devotional tones and a clean sacred layout.",
		thumbnail: "/iskcon.jpg",
	},
	{
		title: "Masala Dosa",
		category: "Ads",
		shortDescription:
			"Bold food promotion visual with bright colors and a sharp restaurant-style focus.",
		thumbnail: "/masala_dossa.jpg",
	},
	{
		title: "Urban Threads",
		category: "Social",
		shortDescription:
			"Editorial social post featuring a modern typography-led layout for fashion branding.",
		thumbnail: "/post_5.jpg",
	},
	{
		title: "Horizon Coffee",
		category: "Identity",
		shortDescription:
			"Coffee brand visual with a calm, premium mood and minimal layout.",
		thumbnail: "/post_18.jpg",
	},
	{
		title: "Nova Fitness",
		category: "Ads",
		shortDescription:
			"High-energy fitness creative with strong contrast and motion-driven styling.",
		thumbnail: "/post-6.jpg",
	},
	{
		title: "Iskon Temple - Gajar ka halwa",
		category: "Branding",
		shortDescription:
			"Temple dessert artwork with festive colors and a rich ceremonial presentation.",
		thumbnail: "/iskon-temple-parsad.jpg",
	},
	{
		title: "HIMT - Hackthon",
		category: "Ads",
		shortDescription:
			"Event poster style graphic with a sharp tech-forward layout and bold hierarchy.",
		thumbnail: "/himt-hackathon.png",
	},
	{
		title: "Book Cover Design",
		category: "Social",
		shortDescription:
			"Book cover mockup with a clean editorial composition and readable title focus.",
		thumbnail: "/book-cover.jpg",
	},
	{
		title: "Dental Care",
		category: "Identity",
		shortDescription:
			"Healthcare branding visual with a polished, trust-focused identity system.",
		thumbnail: "/dental-care.jpg",
	},
	{
		title: "Delite Place",
		category: "Ads",
		shortDescription:
			"Property promotion visual with a premium real-estate feel and clean framing.",
		thumbnail: "/delite-place.jpg",
	},
	{
		title: "Astrology",
		category: "Ads",
		shortDescription:
			"Mystic-themed creative with celestial elements and a dramatic poster style.",
		thumbnail: "/astrology.jpg",
	},
];

const ProjectCard = ({
	project,
	onOpen,
}: {
	project: ProjectItem;
	onOpen: (project: ProjectItem) => void;
}) => (
	<button
		type="button"
		className="group block w-full cursor-pointer border border-neutral-800 bg-[#0d0d0d] overflow-hidden text-left transition-all hover:border-orange-500/50"
		onClick={() => onOpen(project)}
	>
		<div className="relative h-48 w-full overflow-hidden border-b border-neutral-800 bg-neutral-900">
			<Image
				src={project.thumbnail}
				alt={project.title}
				fill
				className="object-cover transition-transform duration-500 group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
			<span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-neutral-200 border border-neutral-600/70 px-2 py-1 bg-black/40 backdrop-blur-sm">
				{project.category}
			</span>
		</div>

		<div className="p-6">
			<h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-orange-400 transition-colors">
				{project.title}
			</h3>
			<p className="mt-2 text-sm text-neutral-400 leading-relaxed font-sans">
				{project.shortDescription}
			</p>
		</div>
	</button>
);

const Projects = () => {
	const [activeProject, setActiveProject] = useState<ActiveProjectItem>(null);

	useEffect(() => {
		if (!activeProject) {
			return;
		}

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setActiveProject(null);
			}
		};

		window.addEventListener("keydown", handleEscape);
		return () => window.removeEventListener("keydown", handleEscape);
	}, [activeProject]);

	return (
		<section className="relative bg-[#0A0A0A] text-white px-6 md:px-16 py-24">
			{/* Subtle Grid Background */}
			<div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />

			<div className="relative z-10 max-w-6xl mx-auto">
				{/* Header Area */}
				<div className="mb-16">
					<div className="flex items-center gap-3 mb-4">
						<span className="w-10 h-px bg-orange-500" />
						<span className="font-mono text-xs text-orange-400 tracking-[0.3em] uppercase font-bold">
							All Projects
						</span>
					</div>
					<h1 className="text-5xl md:text-7xl font-black uppercase font-['Bebas_Neue'] leading-[0.9]">
						Featured <span className="text-orange-500">Projects</span>
					</h1>
					<p className="mt-6 text-neutral-400 leading-relaxed font-sans max-w-2xl">
						A complete collection of visual identities, social media campaigns,
						and cinematic video edits crafted for global brands.
					</p>
				</div>

				{/* Project Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<ProjectCard
							key={project.title}
							project={project}
							onOpen={setActiveProject}
						/>
					))}
				</div>
			</div>

			{activeProject ? (
				<div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
					<button
						type="button"
						aria-label="Close image preview"
						className="absolute inset-0 bg-black/90"
						onClick={() => setActiveProject(null)}
					/>
					<div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-neutral-800 bg-black shadow-2xl shadow-black/80">
						<button
							type="button"
							aria-label="Close image preview"
							className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white transition-colors hover:bg-white hover:text-black"
							onClick={() => setActiveProject(null)}
						>
							<span className="text-2xl leading-none">×</span>
						</button>
						<div className="relative aspect-4/5 w-full bg-black sm:aspect-16/10">
							<Image
								src={activeProject.thumbnail}
								alt={activeProject.title}
								fill
								className="object-contain"
								sizes="(max-width: 640px) 100vw, 80vw"
								priority
							/>
						</div>
					</div>
				</div>
			) : null}
		</section>
	);
};

export default Projects;

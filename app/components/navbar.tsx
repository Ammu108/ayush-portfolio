"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="sticky top-0 z-40 flex items-center bg-black/50 backdrop-blur-md justify-between px-4 md:px-16 py-4">
			<Link href="/">
				<span className="font-mono text-xs tracking-[0.3em] text-neutral-200 font-semibold uppercase">
					Ayush Portfolio
				</span>
			</Link>
			{/* Desktop Menu */}
			<div className="hidden md:flex items-center gap-8">
				<Link
					href="#work"
					className="text-xs tracking-widest text-neutral-400 hover:text-white transition-colors uppercase font-mono"
				>
					Work
				</Link>
				<Link
					href="#about"
					className="text-xs tracking-widest text-neutral-400 hover:text-white transition-colors uppercase font-mono"
				>
					About
				</Link>
				<Link
					href="/projects"
					className="text-xs tracking-widest text-neutral-400 hover:text-white transition-colors uppercase font-mono"
				>
					Projects
				</Link>
				<Link
					href="#contact"
					className="text-xs tracking-widest bg-white text-black px-5 py-2 hover:bg-neutral-200 transition-colors uppercase font-mono text-center"
				>
					Hire Me
				</Link>
			</div>
			<button
				type="button"
				className="md:hidden flex flex-col gap-1.5 cursor-pointer"
				onClick={toggleMenu}
				aria-label="Toggle menu"
			>
				<span
					className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
						isOpen ? "rotate-45 translate-y-2" : ""
					}`}
				/>
				<span
					className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
						isOpen ? "opacity-0" : ""
					}`}
				/>
				<span
					className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
						isOpen ? "-rotate-45 -translate-y-2" : ""
					}`}
				/>
			</button>
			; isOpen && (
			<div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md md:hidden">
				<div className="flex flex-col gap-4 px-4 py-6 border-t border-neutral-800">
					<Link
						href="#work"
						className="text-xs tracking-widest text-neutral-400 hover:text-white transition-colors uppercase font-mono"
						onClick={() => setIsOpen(false)}
					>
						Work
					</Link>
					<Link
						href="#about"
						className="text-xs tracking-widest text-neutral-400 hover:text-white transition-colors uppercase font-mono"
						onClick={() => setIsOpen(false)}
					>
						About
					</Link>
					<Link
						href="/projects"
						className="text-xs tracking-widest text-neutral-400 hover:text-white transition-colors uppercase font-mono"
						onClick={() => setIsOpen(false)}
					>
						Projects
					</Link>
					<Link
						href="#contact"
						className="text-xs tracking-widest bg-white text-black px-5 py-2 hover:bg-neutral-200 transition-colors uppercase font-mono text-center"
						onClick={() => setIsOpen(false)}
					>
						Hire Me
					</Link>
				</div>
			</div>
			);
		</nav>
	);
};

export default Navbar;

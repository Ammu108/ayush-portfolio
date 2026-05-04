import AboutMe from "./components/about-me-section";
import ContactForm from "./components/contact-form";
import HeroSection from "./components/hero-section";
import WorkSection from "./components/work-section";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutMe />
			<WorkSection />
			<ContactForm />
		</main>
	);
}

import AboutMe from "./components/about-me-section";
import ContactForm from "./components/contact-form";
import FooterSection from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import WorkSection from "./components/work-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <WorkSection />
      <ContactForm />
      <FooterSection />
    </main>
  );
}

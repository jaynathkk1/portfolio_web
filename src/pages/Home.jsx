import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { SkillsSection } from "../components/SkillsSection";
import { Starbackground } from "../components/StarBackground";
import { Theme } from "../components/theme";

export const Home = () => {
  return <div className="min-h-screen ">
    {/* Theme Toggle */}
    <Theme />
    {/* Background Effect */}
    <Starbackground />

    {/* Navbar */}
    <Navbar />
    {/* Main Content */}
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Projects />
      <ContactSection />
      <Footer />
    </main>
    {/* Footer */}
  </div>;
};

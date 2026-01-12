import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Bio />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

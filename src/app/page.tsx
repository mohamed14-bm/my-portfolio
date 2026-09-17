import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import NotebookMotion from "@/components/NotebookMotion";
import PencilCursor from "@/components/PencilCursor";
import ThemeWash from "@/components/ThemeWash";

export default function Home() {
  return (
    <>
      <Navbar />
      <NotebookMotion />
      <PencilCursor />
      <ThemeWash />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

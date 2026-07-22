import Nav from '@/components/portfolio/Nav';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
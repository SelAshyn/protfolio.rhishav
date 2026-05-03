import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./sections/Projects";
import { Intro } from "./sections/Intro";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-white">
        <Hero />
        <Intro />
        <Projects />
      </main>
    </>
  );
}

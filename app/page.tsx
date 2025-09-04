import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Events from "./components/Events";
import Hero from "./components/Hero";
import SpeakingClub from "./components/SpeakingClub";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <SpeakingClub />
      <Events />
      <Testimonials />

      <Contact />
    </>
  );
}

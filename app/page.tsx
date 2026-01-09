"use client";
import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/About"));
const Projects = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));
import ClickSpark from "@/components/ClickSpark";
import Hero from "@/components/Hero";
import useSound from "use-sound";
import { domAnimation, LazyMotion } from "motion/react";

const Home = () => {
  const [play] = useSound('/sounds/switch.mp3')
  return (
    <main className="relative overflow-x-hidden" onClick={() => play()}>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <LazyMotion features={domAnimation}>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </LazyMotion>
      </ClickSpark>
    </main>
  )
}

export default Home;
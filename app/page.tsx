"use client";
import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/pages/About"));
const Projects = dynamic(() => import("@/components/pages/Projects"));
const Contact = dynamic(() => import("@/components/pages/Contact"));
import ClickSpark from "@/components/ClickSpark";
import Hero from "@/components/pages/Hero";
import useSound from "use-sound";
import { ScrollProgress, ScrollProgressProvider } from "@/components/animate-ui/primitives/animate/scroll-progress";
import GradualBlurMemo from "@/components/GradualBlur";

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
        <Hero />
        <About />
        <Projects />
        <Contact />
        <ScrollProgressProvider global>
          <ScrollProgress className="fixed top-0 left-0 bg-yellow-500/90 dark:bg-white h-1" />
        </ScrollProgressProvider>
        <GradualBlurMemo
          target="page"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </ClickSpark>
    </main>
  )
}

export default Home;
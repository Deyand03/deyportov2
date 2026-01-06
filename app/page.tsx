"use client";
import About from "@/components/About";
import ClickSpark from "@/components/ClickSpark";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import useSound from "use-sound";

const Home = () => {
  const [play] = useSound('/sounds/switch.mp3')
  return (
    <main className="relative" onClick={() => play()}>
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
      </ClickSpark>
    </main>
  )
}

export default Home;
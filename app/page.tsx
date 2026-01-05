"use client";
import ClickSpark from "@/components/ClickSpark";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ModeToggle } from "@/components/ToggleTheme";
import useSound from "use-sound";

const Home = () => {
  const [play] = useSound('/sounds/switch.mp3')
  return (
    <div onClick={() => play()}>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar />
        <Hero />
      </ClickSpark>
    </div>
  )
}

export default Home;
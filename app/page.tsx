"use client";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ModeToggle } from "@/components/ToggleTheme";
import useSound from "use-sound";

const Home = () => {
  const [play] = useSound('/sounds/switch.mp3')
  return (
    <div className="" onClick={() => play()}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home;
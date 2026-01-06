"use client";
import About from "@/components/About";
import ClickSpark from "@/components/ClickSpark";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
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
        <section className="sticky top-0 h-screen z-0">
          <Hero />
        </section>

        <section className="sticky top-0 z-10 min-h-screen bg-background border-t border-white/10 overflow-hidden">
          <div className="container mx-auto px-6 pt-20">
            <About />
          </div>
        </section>

        <section className="sticky top-0 z-20 min-h-screen bg-background border-t border-white/10 overflow-hidden">
          <div className="container mx-auto px-6 pt-20">
            <Skills />
          </div>
        </section>

        <section className="sticky top-0 z-30 min-h-screen bg-background border-t border-white/10 overflow-hidden">
          <div className="container mx-auto px-6 pt-20">
            project
          </div>
        </section>
      </ClickSpark>
    </main>
  )
}

export default Home;
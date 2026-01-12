"use client";
import { useTheme } from "next-themes";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import { StarsBackground } from "../animate-ui/components/backgrounds/stars";
import { cn } from "@/lib/utils";
import Footer from "../Footer";

const Wrapper = () => {
    const { resolvedTheme } = useTheme();
    return (
        <div className="relative">
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
            <StarsBackground
                starColor={resolvedTheme === 'dark' ? '#FFF' : '#000'}
                className={cn(
                    'absolute inset-0 flex items-center justify-center -z-10 pointer-events-none rounded-xl',
                    'dark:bg-[radial-gradient(ellipse_at_bottom,#262626_0%,#000_100%)] bg-[radial-gradient(ellipse_at_bottom,#f5f5f5_0%,#fff_100%)]',
                )}
            />
        </div>
    )
}

export default Wrapper;
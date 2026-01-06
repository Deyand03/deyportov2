"use client";

import { motion } from "motion/react";
import { Download, MousePointerClick } from "lucide-react";
import BlurText from "./BlurText";
import LightRays from "./LightRays";
import TextType from "./TextType";
import Lanyard from "./Lanyard";
import LogoLoop from "./LogoLoop";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    const socialLinks = [
        { node: <FaInstagram />, title: "Instagram", href: "https://instagram.com/deyand.__" },
        { node: <FaLinkedin />, title: "LinkedIn", href: "https://linkedin.com/in/defry03" },
        { node: <FaGithub />, title: "Github", href: "https://github.com/Deyand03" },
    ];
    return (
        <section className="relative w-full h-screen overflow-hidden bg-background">
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={2}
                    lightSpread={0.6}
                    rayLength={0.8}
                    followMouse={true}
                    mouseInfluence={0.2}
                    noiseAmount={0.05}
                    distortion={0.1}
                    className="opacity-40 dark:opacity-100"
                />
            </div>

            {/* --- CONTENT LAYER --- */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 ml-0 md:ml-10"
                >
                    {/* Overline */}
                    <BlurText
                        text="Welcome to my portfolio"
                        className="text-sm md:text-lg font-medium text-muted-foreground tracking-[0.2em] uppercase"
                        delay={200}
                    />

                    {/* Main Headline */}
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
                            <BlurText
                                text="Hello, I'm"
                                className="dark:text-white text-black flex justify-center md:justify-start"
                                animateBy="letters"
                            />
                            <BlurText
                                text="Defry Yandy"
                                className="dark:text-white text-black flex justify-center md:justify-start"
                                animateBy="letters"
                            />
                        </h1>
                    </div>

                    {/* Dynamic Role */}
                    <div className="flex items-center gap-2 text-xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                        <span>I&apos;m a</span>
                        <div className="text-blue-600 dark:text-blue-400 min-w-50 text-left">
                            <TextType
                                text={["Web Developer.", "Game Developer.", "Artist."]}
                                className="inline-block"
                            />
                        </div>
                    </div>

                    {/* Short Bio / Description */}
                    <div className="max-w-lg text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                        <LogoLoop
                            logos={socialLinks}
                            speed={120}
                            direction="left"
                            logoHeight={48}
                            gap={40}
                            hoverSpeed={0}
                            scaleOnHover
                            fadeOut
                            ariaLabel="Technology partners"
                        />
                    </div>

                    {/* CV Buttons */}
                    <motion.div
                        initial={{scale: 0.85}}
                        animate={{scale: 1}}
                        transition={{delay: 0.8, duration: 0.5, ease: "easeOut"}}
                        className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                        <a
                            href="/MyCV.pdf"
                            className="group relative px-8 py-3 rounded-full bg-foreground text-background font-bold hover:bg-foreground/90 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            My CV
                            <Download className="w-4 h-4 group-hover:animate-bounce" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE: Interactive 3D/Lanyard */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 h-[40vh] md:h-full flex flex-col items-center justify-center relative"
                >
                    {/* Lanyard Area */}
                    <div className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing relative z-20">
                        <Lanyard />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute bottom-10 md:bottom-20 flex items-center gap-2 text-xs text-muted-foreground pointer-events-none"
                    >
                        <MousePointerClick className="w-4 h-4" />
                        <span>Drag the card!</span>
                    </motion.div>
                </motion.div>

            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-px h-8 bg-linear-to-b from-muted-foreground to-transparent" />
            </motion.div>

        </section>
    );
};

export default Hero;
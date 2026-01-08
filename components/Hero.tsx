"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Download, MousePointerClick, CalendarDays, MapPin } from "lucide-react";
import BlurText from "./BlurText";
import LightRays from "./LightRays";
import TextType from "./TextType";
import Lanyard from "./Lanyard";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Shine } from "./animate-ui/primitives/effects/shine";
import Link from "next/link";

const Hero = () => {
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 0.8]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    const socialLinks = [
        {
            icon: <FaInstagram />,
            href: "https://instagram.com/deyand.__",
            color: "hover:text-pink-500",
            preview: (
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 rounded-full border-2 border-white/20 overflow-hidden">
                            <Image
                                src="/img/pp_ig.jpg"
                                alt="Defry Instagram"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-foreground">Defry</h4>
                            <p className="text-xs text-muted-foreground font-medium">@deyand.__</p>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">
                            SI'23
                            <br />
                            Art Account
                            <br />
                            <Link className="hover:text-blue-400 transition-all transform-gpu will-change-transform duration-300" href="https://instagram.com/deyart.__">@deyart.__</Link>
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-3 w-3 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">Bergabung Februari 2022</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            icon: <FaGithub />,
            href: "https://github.com/Deyand03",
            color: "hover:text-gray-900 dark:hover:text-white",
            preview: (
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/Deyand03.png" />
                            <AvatarFallback>DY</AvatarFallback>
                        </Avatar>
                        <div>
                            <h4 className="text-sm font-semibold text-foreground">Defry</h4>
                            <p className="text-xs text-muted-foreground font-medium">@Deyand03</p>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Building modern web applications with Next.js & Laravel 12.
                        Open Source enthusiast.
                    </p>
                    <div className="flex items-center gap-4 pt-1">
                        <div className="flex items-center text-xs text-muted-foreground">
                            <div className="h-2 w-2 rounded-full bg-blue-300 mr-1" />
                            React
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                            <div className="h-2 w-2 rounded-full bg-blue-400 mr-1" />
                            TypeScript
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                            <div className="h-2 w-2 rounded-full bg-red-400 mr-1" />
                            Laravel
                        </div>
                    </div>
                </div>
            )
        },
        {
            icon: <FaLinkedin />,
            href: "https://linkedin.com/in/defry03",
            color: "hover:text-blue-600",
            preview: (
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 rounded-md border border-white/10 overflow-hidden bg-blue-600 flex items-center justify-center text-white font-bold">
                            in
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-foreground">Defry Yandy</h4>
                            <p className="text-xs text-muted-foreground font-medium">Web & Game Developer</p>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Connect with me for professional opportunities and collaborations.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="mr-1 h-3 w-3" /> Indonesia
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="relative w-full h-screen overflow-hidden bg-background">
            <motion.div
                style={{ scale, opacity }}
                className="w-full h-full relative"
            >
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
                        className="opacity-20 dark:opacity-100"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 ml-0 md:ml-10"
                    >
                        <BlurText
                            text="Welcome to my portfolio"
                            className="text-sm md:text-lg font-medium text-muted-foreground tracking-[0.2em] uppercase"
                            delay={200}
                        />

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

                        <div className="flex items-center gap-2 text-xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                            <span>I&apos;m an</span>
                            <div className="text-yellow-500 dark:text-blue-400 min-w-50 text-left">
                                <TextType
                                    text={["Web Developer.", "Game Developer.", "Artist."]}
                                    className="inline-block"
                                />
                            </div>
                        </div>

                        <div className="flex gap-6 items-center py-2">
                            {socialLinks.map((social, idx) => (
                                <HoverCard key={idx} openDelay={100} closeDelay={100}>
                                    <HoverCardTrigger asChild>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cursor-pointer"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`text-3xl md:text-4xl text-gray-500 dark:text-gray-400 transition-colors ${social.color}`}
                                            >
                                                {social.icon}
                                            </motion.div>
                                        </a>
                                    </HoverCardTrigger>
                                    <HoverCardContent
                                        side="top"
                                        align="center"
                                        className="w-80 p-4 rounded-xl shadow-xl bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-white/20"
                                    >
                                        {social.preview}
                                    </HoverCardContent>
                                </HoverCard>
                            ))}
                        </div>

                        <motion.div
                            initial={{ scale: 0.85 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                            <Shine
                                asChild={true}
                            >
                                <a
                                    href="/MyCV.pdf"
                                    className="group relative px-8 py-3 rounded-full bg-foreground text-background font-bold hover:bg-foreground/90 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                >
                                    My CV
                                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                                </a>
                            </Shine>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 h-[40vh] md:h-full flex flex-col items-center justify-center relative"
                    >
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

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hidden md:flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-8 bg-linear-to-b from-muted-foreground to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
"use client";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Code, CodeHeader, CodeBlock } from "./animate-ui/components/animate/code";
import { FaReact, FaPaintBrush } from "react-icons/fa";
import { SiBun, SiFramer, SiGit, SiGithub, SiGodotengine, SiHtml5, SiHyperskill, SiJavascript, SiLaravel, SiMediapipe, SiMysql, SiNpm, SiPhp, SiPnpm, SiPostgresql, SiPython, SiReact, SiSupabase, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { useRef, useState } from "react";
import BlurText from "./BlurText";
import SplitText from "./SplitText";
import LogoLoop from "./LogoLoop";
import Image from "next/image";

const About = () => {
    const myCode = `import { Developer, Human } from 'earth';

const Defry = () => {
  const skills = [
    "Web Development (Next.js, Laravel)",
    "Game Development (Godot, GDScript)",
    "Software Engineering (Python)"
  ];

  const hobbies = ["Art", "Drawing", "Chill"];

  return (
    <div className="profile">
      <h1>Hai! Saya Defry Yandy 👋</h1>
      <p>
        Seorang Mahasiswa Sistem Informasi yang 
        memiliki ketertarikan besar terhadap logika 
        dan estetika digital. Lebih suka memahami konsep
        di balik solusi sebelum menulis kode, agar sistem
        yang dibuat lebih scalable dan mudah dikembangkan.
      </p>

      <p>
        Saat ini saya fokus menciptakan web modern
        dan mengembangkan game 2D dari Godot.
        Project favorit saya? Game!
      </p>
      
      {/* Ketika tidak coding, saya mungkin sedang 
        menggambar, nonton anime atau bermain game santai. 
      */}
    </div>
  );
}

export default Defry;
`;
    const [activeDraw, setActiveDraw] = useState<string | null>('/drawing/drawMedieval.jpg');

    const aboutRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: aboutRef,
        offset: ["end end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.80]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const drawings = [
        "/drawing/drawRealism.jpg",
        "/drawing/drawShoko.jpg",
        "/drawing/drawNime2.jpg",
        "/drawing/drawNime.jpg",
        "/drawing/drawMedieval.jpg",
    ]

    const skillsLogo = [
        { node: <SiReact />, title: "React" },
        { node: <SiLaravel />, title: "Laravel" },
        { node: <SiMysql />, title: "MySql" },
        { node: <SiPostgresql />, title: "PostgreSql" },
        { node: <SiTypescript />, title: "TypeScript" },
        { node: <SiPhp />, title: "Php" },
        { node: <SiJavascript />, title: "JavaScript" },
        { node: <SiHtml5 />, title: "HTML" },
        { node: <SiTailwindcss />, title: "Tailwindcss" },
        { node: <SiPython />, title: "Python" },
        { node: <SiMediapipe />, title: "Mediapipe" },
        { node: <SiFramer />, title: "Framer Motion" },
    ];

    const toolsTech = [
        { node: <SiGithub />, title: "Github" },
        { node: <SiGit />, title: "Git" },
        { node: <SiVercel />, title: "Vercel" },
        { node: <SiSupabase />, title: "Supabase" },
        { node: <SiGodotengine />, title: "Godot Engine" },
        { node: <SiNpm />, title: "Npm" },
        { node: <SiPnpm />, title: "Pnpm" },
        { node: <SiBun />, title: "Bun" }
    ];

    return (
        <section ref={aboutRef} className="h-full w-full bg-background relative overflow-hidden py-20">
            
            <motion.div
                style={{ scale, opacity }}
            >
                <div className="px-4 md:px-20 pb-20">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-black/10 dark:border-white/10 pb-6">
                        <div>
                            <h1 className="text-4xl md:text-7xl font-bold text-foreground tracking-tight">
                                ABOUT.
                            </h1>
                            <span className="text-sm md:text-base text-muted-foreground tracking-widest uppercase">
                                / The Man Behind The Code
                            </span>
                        </div>
                        <div className="mt-4 md:mt-0 text-right hidden md:block">
                            <p className="text-xs font-mono text-muted-foreground">
                                STATUS: <span className="text-green-500">ONLINE</span>
                            </p>
                            <p className="text-xs font-mono text-muted-foreground">
                                LOC: INDONESIA
                            </p>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
                        <div className="col-span-12 md:col-span-6 w-full h-full min-h-100 md:min-h-125">
                            <div className="h-200 border border-black/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-black/20">
                                <Code
                                    code={myCode}
                                    className="w-full h-full font-mono text-sm md:text-base"
                                >
                                    <CodeHeader copyButton={false} className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-white/5 border-b border-black/5 dark:border-white/5">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                        </div>
                                        <span className="ml-2 text-xs text-muted-foreground flex items-center gap-1">
                                            <FaReact className="text-blue-400" /> AboutMe.tsx
                                        </span>
                                    </CodeHeader>
                                    <CodeBlock
                                        lang="typescript"
                                        writing={true}
                                        delay={200}
                                        duration={10000}
                                        cursor={true}
                                        inView={true}
                                        style={{
                                            backgroundColor: 'transparent'
                                        }}
                                    />
                                </Code>
                            </div>
                        </div>

                        {/* RIGHT COL */}
                        <div className="col-span-12 md:col-span-6 flex flex-col gap-6 overflow-hidden">
                            {/* Box 1*/}
                            <div className="flex-1 border border-black/10 dark:border-white/10 rounded-xl p-6 bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm flex flex-col gap-4 hover:border-black/30 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="rounded bg-background shadow-md shadow-orange-500/30 dark:shadow dark:shadow-white p-2">
                                        <SiHyperskill />
                                    </div>
                                    <h1 className="text-xl font-semibold">Tech Stack</h1>
                                </div>
                                <div className="border-l-4 border-l-gray-400 pl-4 rounded">
                                    <div className="flex flex-col items-start justify-center h-full">
                                        <BlurText
                                            text="Tech I often use"
                                        />
                                        <SplitText
                                            text="Laravel, React, Next.js, Tailwind CSS, Flutter, Godot Engine, Git, etc."
                                            className="text-start"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <LogoLoop
                                        logos={skillsLogo}
                                        speed={60}
                                        direction="left"
                                        logoHeight={32}
                                        gap={40}
                                        hoverSpeed={0}
                                        scaleOnHover
                                        fadeOut={true}
                                    />
                                    <LogoLoop
                                        logos={toolsTech}
                                        speed={60}
                                        direction="right"
                                        logoHeight={32}
                                        gap={40}
                                        hoverSpeed={0}
                                        scaleOnHover
                                        fadeOut={true}
                                    />
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                    <div className="rounded bg-background shadow-md shadow-orange-500/30 dark:shadow dark:shadow-white p-2">
                                        <FaPaintBrush />
                                    </div>
                                    <h1 className="text-xl font-semibold">Art Gallery</h1>
                                </div>
                                <div className="flex w-full h-full">
                                    <div className="grid grid-cols-12 gap-3 w-full h-full">
                                        {/* Left: Thumbnail Draw */}
                                        <div className="col-span-4 aspect-4/6 grid grid-cols-2 gap-2 w-full">
                                            {drawings.map((src, idx) => (
                                                <div
                                                    key={idx}
                                                    onMouseEnter={() => setActiveDraw(src)}
                                                    className="relative aspect-square rounded-md bg-white dark:bg-white/60 border border-black/60 overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-400/50 transition-all hover:scale-105"
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={`Art ${idx + 1}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        {/* Right: Preview */}
                                        <div className="col-span-8 w-full h-full border rounded-xl overflow-hidden aspect-7/8">
                                            <AnimatePresence mode="wait">
                                                {activeDraw ? (
                                                    <motion.div
                                                        key={activeDraw}
                                                        initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                                        exit={{ opacity: 0, filter: "blur(4px)" }}
                                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                                        className="relative w-full h-full"
                                                    >
                                                        <Image
                                                            src={activeDraw}
                                                            alt="Preview"
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="text-center px-4 flex justify-center items-center h-full"
                                                    >
                                                        <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                                                            Hover art Left<br />to preview details
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About;
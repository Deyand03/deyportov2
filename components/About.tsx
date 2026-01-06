"use client";
import { motion, useScroll, useTransform } from "motion/react";
import ScrollVelocity from "./ScrollVelocity";
import { Code, CodeHeader, CodeBlock } from "./animate-ui/components/animate/code";
import { FaReact, FaGamepad, FaCode, FaPaintBrush } from "react-icons/fa";
import { Terminal, Cpu, Coffee } from "lucide-react";
import { useRef } from "react";

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
        dan estetika digital.
      </p>

      <p>
        Saat ini saya fokus menciptakan web modern
        dan mengembangkan game interaktif.
        Project favorit saya? Hand Gesture Control!
      </p>
      
      {/* Ketika tidak coding, saya mungkin sedang 
        menggambar atau menikmati kopi santai. 
      */}
    </div>
  );
}

export default Defry;
`;

    const aboutRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: aboutRef,
        offset: ["end end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.80]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={aboutRef} className="h-full w-full bg-background relative overflow-hidden">
            <div className="mb-8 pt-10">
                <ScrollVelocity
                    texts={['WEB DEV • GAME DEV • ARTIST • LOGIC • CREATIVE •']}
                    className="opacity-10 dark:opacity-20 text-4xl md:text-6xl font-black py-2 uppercase tracking-tighter"
                />
            </div>
            <motion.div
                style={{ scale, opacity }}
            >
                <div className="px-6 md:px-20 pb-20">
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
                        <div className="md:col-span-8 w-full h-full min-h-[400px] md:min-h-[500px]">
                            <div className="h-[890px] border border-black/10 dark:border-white/10 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-black/20">
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
                                        duration={15000} // Ngetik 4 detik biar user sempet baca
                                        cursor={true}
                                        inView={true}
                                        style={{
                                            fontSize: '0.9rem',
                                            lineHeight: '1.6',
                                            padding: '1.5rem',
                                            backgroundColor: 'transparent'
                                        }}
                                    />
                                </Code>
                            </div>
                        </div>

                        {/* RIGHT COL: INFO STACK (Pelengkap - 4 Kolom) */}
                        <div className="md:col-span-4 flex flex-col gap-6">

                            {/* Box 1: Focus Area */}
                            <div className="flex-1 border border-black/10 dark:border-white/10 rounded-xl p-6 bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm flex flex-col justify-center gap-4 hover:border-black/30 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                    <Terminal size={18} />
                                    <span className="text-xs font-bold uppercase tracking-wider">Core Focus</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600">
                                            <FaCode size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-sm">Web Development</h3>
                                            <p className="text-xs text-muted-foreground">Next.js & Laravel Ecosystem</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-md text-purple-600">
                                            <FaGamepad size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-sm">Game Development</h3>
                                            <p className="text-xs text-muted-foreground">Godot & Interactive Logic</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Box 2: Soft Skills / Interests */}
                            <div className="flex-1 border border-black/10 dark:border-white/10 rounded-xl p-6 bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm flex flex-col justify-center gap-4 hover:border-black/30 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                    <Cpu size={18} />
                                    <span className="text-xs font-bold uppercase tracking-wider">Beyond Code</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white dark:bg-black/20 border border-black/5">
                                        <FaPaintBrush className="mb-2 opacity-70" />
                                        <span className="text-xs font-medium">Artist</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white dark:bg-black/20 border border-black/5">
                                        <Coffee className="mb-2 opacity-70" />
                                        <span className="text-xs font-medium">Coffee</span>
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
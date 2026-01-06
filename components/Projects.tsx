"use client";

import { motion } from "motion/react";
import { Github, ExternalLink, ArrowUpRight, FolderGit2, MousePointer2, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollVelocity from "./ScrollVelocity";
import { useRef, useState, useEffect } from "react";

const projectsData = [
    {
        title: "Portfolio v2",
        category: "Web Development",
        description: "Website portofolio pribadi yang dirancang dengan gaya Glassmorphism dan animasi interaktif menggunakan Framer Motion.",
        tech: ["Nextjs", "React", "Motion", "Tailwindcss"],
        image: "/projects/portov2.png",
        repo: "https://github.com/Deyand03/deyportov2",
        demo: "#home"
    },
    {
        title: "KenalBersih",
        category: "Web App",
        description: "Website Pengelolaan Sampah Desa Mendalo Indah yang interaktif dengan fitur Dashboard untuk RT dan dilengkapi dengan chatbot",
        tech: ["Laravel", "Tailwindcss", "DaisyUI", "MySQL"],
        image: "/projects/kenalbersih.png",
        repo: "https://github.com/Deyand03/interngate",
        demo: "https://interngate.vercel.app/"
    },
    {
        title: "Interngate",
        category: "Web App",
        description: "Website Magang yang interaktif dan dilengkapi dengan fitur dashboard untuk mitra",
        tech: ["Laravel", "Tailwindcss", "MySQL"],
        image: "/projects/interngate.png",
        repo: "https://github.com/Deyand03/interngate",
        demo: "https://interngate.vercel.app/"
    },
    {
        title: "Portfolio V1",
        category: "Web Development",
        description: "Website portofolio pertama yang saya buat setelah belajar HTML, CSS dan Bootstrap",
        tech: ["HTML", "CSS", "Bootstrap"],
        image: "/projects/portov1.png",
        repo: "https://github.com/Deyand03/deyporto",
        demo: "https://deyporto.vercel.app"
    },
    {
        title: "RPG Game Prototype",
        category: "Coming Soon",
        description: "Prototipe game RPG 2D, Segera Hadir.",
        tech: ["Godot Engine", "GDScript", "Pixel Art"],
        image: "/",
        repo: "#",
        demo: "#"
    },
];

const Projects = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleWheel = (evt: WheelEvent) => {
            if (evt.deltaY !== 0) {
                evt.preventDefault();
                evt.stopPropagation();
                container.scrollLeft += evt.deltaY;
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        if (!scrollContainerRef.current) return;
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        if (!scrollContainerRef.current) return;
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Kecepatan scroll (dikali 2 biar ngebut dikit)
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="w-full min-h-screen bg-background relative py-20 flex flex-col justify-center">
            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <ScrollVelocity
                texts={['BUILD • CODE • DEPLOY • INNOVATE • SOLVE •']}
                className="opacity-5 dark:opacity-10 text-4xl md:text-6xl font-black py-2 uppercase tracking-tighter mb-4"
            />
            {/* Header Section */}
            <div className="container mx-auto px-6 md:px-20 mb-12">

                <div className="flex justify-between w-full items-end border-b border-black/10 dark:border-white/10 pb-6">
                    <div>
                        <h1 className="text-4xl md:text-7xl font-bold text-foreground tracking-tight">PROJECTS.</h1>
                        <span className="text-sm md:text-base text-muted-foreground tracking-widest uppercase">
                            / Things that I make
                        </span>
                    </div>

                    {/* Indikator Desktop */}
                    <div className="hidden md:flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground border border-black/10 dark:border-white/10 px-3 py-1 rounded-full">
                            <FolderGit2 size={14} />
                            SELECTED WORKS (2025 - 2026)
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-blue-500 animate-pulse font-medium">
                            SCROLL OR DRAG <MoveRight size={12} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Horizontal Scroll Container */}
            <div className="relative w-full">

                {/* Scrollable Area */}
                <div
                    ref={scrollContainerRef}
                    data-lenis-prevent
                    className="w-full overflow-x-auto pb-12 pt-4 px-6 md:px-20 flex gap-6 no-scrollbar cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="min-w-[85vw] md:min-w-112.5 lg:min-w-125 group relative border border-black/10 dark:border-white/10 bg-white dark:bg-black/20 rounded-xl overflow-hidden hover:border-black/30 dark:hover:border-white/30 transition-all hover:shadow-lg dark:hover:shadow-white/5 flex flex-col select-none"
                        >
                            {/* Image Area */}
                            <div className="aspect-video relative bg-gray-100 dark:bg-white/5 overflow-hidden border-b border-black/5 dark:border-white/5 pointer-events-none">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-50 dark:bg-white/5">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    <span className="z-0 opacity-20 text-4xl font-bold">{project.category}</span>
                                </div>
                            </div>

                            {/* Overlay Icons */}
                            <div className="absolute top-0 left-0 w-full aspect-video flex items-center justify-center gap-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[1px]">
                                <Link href={project.repo} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform pointer-events-auto" title="View Code">
                                    <Github size={20} />
                                </Link>
                                <Link href={project.demo} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform pointer-events-auto" title="Live Demo">
                                    <ExternalLink size={20} />
                                </Link>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col flex-1 pointer-events-none">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">{project.category}</p>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                            {project.title}
                                            <ArrowUpRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-[10px] md:text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/10 text-muted-foreground border border-black/5 dark:border-white/5 font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <div className="min-w-25 flex items-center justify-center text-muted-foreground opacity-50">
                        <span className="writing-vertical-rl rotate-180 text-xs tracking-widest uppercase">End of Projects</span>
                    </div>
                </div>
                <div className="absolute right-4 bottom-4 md:hidden bg-background/80 backdrop-blur border border-black/10 dark:border-white/10 p-2 rounded-full shadow-lg pointer-events-none text-muted-foreground">
                    <MousePointer2 size={16} className="animate-bounce-x" />
                </div>
            </div>

            {/* Footer Link */}
            <div className="mt-12 text-center">
                <Link href="https://github.com/defry" target="_blank" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-0.5">
                    View All Repositories <ArrowUpRight size={14} />
                </Link>
            </div>
        </section>
    )
}

export default Projects;
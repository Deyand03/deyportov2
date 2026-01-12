"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ProjectCard } from "../subcomponent/SubProjects";
import { projectsData } from "@/data";
import useSound from "use-sound";

const Projects = () => {
    const projectsRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: projectsRef,
        offset: ['end end', 'end start']
    });
    const [play] = useSound('/sounds/switch.mp3')
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(5px)"]);

    return (
        <section ref={projectsRef} className="w-full min-h-screen py-20 relative" onClick={() => play()} id="projects">
            <motion.div style={{ scale, opacity, filter: blur }} className="px-4 md:px-20">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-black/10 dark:border-white/10 pb-6">
                    <div>
                        <h1 className="text-4xl md:text-7xl font-bold text-foreground tracking-tight">
                            PROJECTS.
                        </h1>
                        <span className="text-sm md:text-base text-muted-foreground tracking-widest uppercase">
                            / Things that i make
                        </span>
                    </div>
                </div>
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
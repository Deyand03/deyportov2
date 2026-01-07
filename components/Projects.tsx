import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ScrollVelocity from "./ScrollVelocity";
import CardSwap, { Card } from "./CardSwap";
import Image from "next/image";
import { FaCode, FaPeopleArrows } from "react-icons/fa";
import { SiPinboard } from "react-icons/si";

const Projects = () => {
    const projectsRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: projectsRef,
        offset: ['end end', 'end start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={projectsRef}>
            <motion.div
                style={{ scale, opacity }}
                className="container mx-auto py-20 px-4 md:px-20"
            >
                {/* Header */}
                <div className="flex justify-between items-center border-b-2 pb-2">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-4xl md:text-7xl tracking-tighter font-bold text-foreground">PROJECTS.</h1>
                        <span className="text-muted-foreground uppercase text-lg">
                            / things that I make
                        </span>
                    </div>
                </div>
                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 h-screen">
                    {/* List Projects */}
                    <div className="col-span-1 md:col-span-7">
                        ListProject
                    </div>
                    {/* Card Swap */}
                    <div className="col-span-1 md:col-span-5 h-full">
                        <div className="relative h-80 md:h-120">
                            <div className="flex gap-2 items-center justify-center md:pt-16 uppercase font-bold tracking-tight text-3xl">
                                <SiPinboard />
                                Featured.
                            </div>
                            <CardSwap
                                cardDistance={40}
                                verticalDistance={60}
                                delay={5000}
                                pauseOnHover={true}
                            >
                                <Card>
                                    <h3 className="flex items-center gap-2 text-foreground border-b border-foreground p-2">
                                        <FaCode />
                                        <span className="font-semibold tracking-tight">Deyporto</span>
                                    </h3>
                                    <Image
                                        src={"/projects/portov2.png"}
                                        alt="Portofolio V2"
                                        fill
                                        className="object-contain"
                                    />
                                </Card>
                                <Card>
                                    <h3 className="flex items-center gap-2 text-foreground border-b border-foreground p-2">
                                        <FaCode />
                                        <span className="font-semibold tracking-tight">KenalBersih</span>
                                    </h3>
                                    <Image
                                        src={"/projects/kenalbersih.png"}
                                        alt="kenalbersih"
                                        fill
                                        className="object-contain"
                                    />
                                </Card>
                                <Card>
                                    <h3 className="flex items-center gap-2 text-foreground border-b border-foreground p-2">
                                        <FaCode />
                                        <span className="font-semibold tracking-tight">Interngate</span>
                                    </h3>
                                    <Image
                                        src={"/projects/interngate.png"}
                                        alt="Interngate"
                                        fill
                                        className="object-contain"
                                    />
                                </Card>
                            </CardSwap>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Projects;
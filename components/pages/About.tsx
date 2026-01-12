import { motion, useScroll, useTransform } from "motion/react";
import { FaPaintBrush, FaTools } from "react-icons/fa";
import { useRef } from "react";
import { Meteors } from "../ui/meteors";
import { IoPerson, IoTime } from "react-icons/io5";
import { Marquee } from "../ui/marquee";
import Masonry from "../Masonry";
import { Timeline } from "../ui/timeline";
import skillsLogo, { drawings, timeline, Badge3D } from "../subcomponent/SubAbout";

const About = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: aboutRef,
        offset: ["end end", "end start"]
    });

    const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const col1 = skillsLogo.slice(0, skillsLogo.length / 2);
    const col2 = skillsLogo.slice(skillsLogo.length / 2);
    const col3 = skillsLogo.slice(0, skillsLogo.length / 3);
    const col4 = skillsLogo.slice(skillsLogo.length / 3);
    const col5 = skillsLogo.slice(0, skillsLogo.length / 4);

    return (
        <section ref={aboutRef} className="min-h-screen w-full bg-background relative overflow-hidden py-20">
            <motion.div
                style={{ scale, opacity, filter: blur }}
            >
                <div className="px-4 md:px-20 pb-20">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-black/10 dark:border-white/10 pb-6">
                        <div>
                            <h1 className="text-4xl md:text-7xl font-bold bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-transparent dark:from-white dark:to-slate-900/10 tracking-tight">
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
                    {/* Content */}
                    <div className="grid min-h-full grid-cols-1 md:grid-cols-2">
                        {/* Bio */}
                        <div className="order-2 md:order-1 border p-2 px-4 rounded-xl relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex gap-2 items-center bg-gray-100 dark:bg-black/90 w-fit rounded-xl dark:shadow-white/30 shadow-orange-500/30 shadow-md border p-3">
                                    <IoPerson />
                                </div>
                                <h2 className="text-xl font-bold">
                                    WHO AM I
                                </h2>
                            </div>
                            <div className="text-lg leading-relaxed space-y-4">
                                <Meteors number={30} />
                                <p>
                                    I'm an <strong className="text-foreground">Information Systems student</strong> with a knack for turning lines of code into reality.
                                </p>
                                <p>
                                    Currently exploring the intersection of <u className="font-semibold text-foreground">Fullstack Web Development, Game Dev, and Data Science. </u>
                                    My approach? Understand the logic first, write scalable code second.
                                </p>
                                <p>
                                    My future plan? i'm currently making 2d games on Godot Engine then i want to build Live2D AI Assistant in my room
                                </p>
                                <p>
                                    Beyond the screen, I fuel my creativity through drawing, gaming, and anime narratives.
                                </p>
                            </div>
                        </div>

                        {/* 3D Marquee */}
                        <div className="order-1 md:order-2 relative w-full min-h-96 overflow-hidden perspective-near">
                            <div className="flex flex-col items-center" style={{ transform: "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)" }}>
                                <Marquee pauseOnHover className="relative -z-10 [--duration:20s]">
                                    {col1.map((e) => (
                                        <Badge3D key={e.title} {...e} />
                                    ))}
                                </Marquee>
                                <Marquee pauseOnHover className="[--duration:20s]" reverse>
                                    {col2.map((e) => (
                                        <Badge3D key={e.title} {...e} />
                                    ))}
                                </Marquee>
                                <Marquee pauseOnHover className="[--duration:20s]">
                                    {col3.map((e) => (
                                        <Badge3D key={e.title} {...e} />
                                    ))}
                                </Marquee>
                                <Marquee pauseOnHover className="[--duration:20s]" reverse>
                                    {col4.map((e) => (
                                        <Badge3D key={e.title} {...e} />
                                    ))}
                                </Marquee>
                                <Marquee pauseOnHover className="[--duration:20s]">
                                    {col5.map((e) => (
                                        <Badge3D key={e.title} {...e} />
                                    ))}
                                </Marquee>
                                <Marquee pauseOnHover className="[--duration:20s]" reverse>
                                    {col1.map((e) => (
                                        <Badge3D key={e.title} {...e} />
                                    ))}
                                </Marquee>
                            </div>
                            <div className="absolute pointer-events-none inset-x-0 top-0 from-background bg-linear-to-b h-1/4">
                                <figure className="flex gap-3 items-center absolute z-9999 p-2 ml-3">
                                    <div className="shadow-md shadow-orange-500/30 dark:shadow-white/30 rounded-xl p-3">
                                        <FaTools />
                                    </div>
                                    <figcaption className="font-bold uppercase text-xl">
                                        My Arsenal
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="absolute pointer-events-none inset-x-0 bottom-0 from-background bg-linear-to-t h-1/4"></div>
                            <div className="absolute pointer-events-none inset-y-0 left-0 from-background bg-linear-to-r w-1/4"></div>
                            <div className="absolute pointer-events-none inset-y-0 right-0 from-background bg-linear-to-l w-1/4"></div>
                        </div>
                        {/* Journey */}
                        <div className="order-3 col-span-2 flex flex-col pt-5">
                            {/* Header */}
                            <figure className="flex items-center gap-3 py-2">
                                <div className="shadow-md shadow-orange-500/30 dark:shadow-white/30 rounded-xl p-3">
                                    <IoTime />
                                </div>
                                <figcaption className="text-xl font-semibold uppercase">My Journey</figcaption>
                            </figure>
                            {/* Timeline */}
                            <div className="relative w-full overflow-clip">
                                <Timeline data={timeline} />
                            </div>
                        </div>
                        {/* Art Gallery */}
                        <div className="col-span-2 w-full relative flex flex-col gap-4 order-4 mt-4">
                            <div>
                                <figure className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl shadow-md shadow-orange-500/30 dark:shadow-white/30">
                                        <FaPaintBrush />
                                    </div>
                                    <figcaption className="font-semibold text-xl uppercase">Art Gallery</figcaption>
                                </figure>
                            </div>
                            <Masonry
                                items={drawings}
                                ease="power3.out"
                                duration={0.6}
                                stagger={0.05}
                                animateFrom="bottom"
                                scaleOnHover={true}
                                hoverScale={0.95}
                                blurToFocus={true}
                                colorShiftOnHover={false}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About;
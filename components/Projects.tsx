import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import CardSwap, { Card } from "./CardSwap";
import Image from "next/image";
import { FaCode, FaShare, FaVideoSlash } from "react-icons/fa";
import { SiBootstrap, SiCss3, SiDaisyui, SiDart, SiFlutter, SiFramer, SiGithub, SiGodotengine, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiPinboard, SiPostgresql, SiReact, SiSupabase, SiTailwindcss, SiThreedotjs, SiTypescript } from "react-icons/si";
import { filter } from "mathjs";
import Link from "next/link";

const Projects = () => {
    const projectsRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: projectsRef,
        offset: ['end end', 'end start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    interface Projects {
        judul: string,
        deskripsi: string,
        techStack: React.ReactNode[],
        src: string,
        repo?: string,
        demo?: string;
    };
    const projectsList: Projects[] = [
        {
            judul: "DeyportoV2",
            deskripsi: "Website Portofolio kedua yang saya buat dengan tampilan dan animasi interaktif menggunakan React.js dan beberapa library",
            techStack: [<SiReact className="text-blue-400" size={23} />, <SiTypescript size={23} className="text-blue-500" />, <SiFramer size={23} />, <SiThreedotjs size={23} />, <SiTailwindcss size={23} className="text-blue-500 dark:text-blue-400" />,],
            src: "/projects/portov2.png",
            repo: "https://github.com/Deyand03/deyportov2",
            demo: "#"
        },
        {
            judul: "KenalBersih",
            deskripsi: "Website Pengelolaan Sampah Desa Mendalo Indah yang dilengkapi dengan Dashboard Volume Sampah, Data Warga, Dll. Dan juga dilengkapi dengan chatbot",
            techStack: [<SiLaravel size={23} className="text-red-500" />, <SiJavascript size={23} className="text-yellow-400 dark:text-yellow-300" />, <SiTailwindcss size={23} className="text-blue-500 dark:text-blue-400" />, <SiDaisyui size={23} className="text" />, <SiMysql size={23} className="text" />],
            src: "/projects/kenalbersih.png",
            repo: "https://github.com/Deyand03/kenalbersih",
            demo: "https://kenalbersih.vercel.app/"

        },
        {
            judul: "Interngate Mobile",
            deskripsi: "Versi Mobile App dari website interngate, menambahkan fitur chat dan menggunakan database yang berbeda (Supabase)",
            techStack: [<SiFlutter size={23} className="text" />, <SiDart size={23} className="text" />, <SiSupabase size={23} className="text" />, <SiPostgresql size={23} className="text" />],
            src: "/projects/interngatemobile.jpg",
            repo: "https://github.com/Deyand03/singularity",
            demo: "#"

        },
        {
            judul: "Interngate",
            deskripsi: "Website pendaftaran magang untuk mahasiswa dengan fitur yang terstruktur dan mudah digunakan, dilengkapi juga dengan Dashboard Mitra untuk memantau mahasiswa yang mendaftar",
            techStack: [<SiLaravel size={23} className="text" />, <SiTailwindcss size={23} className="text-blue-500 dark:text-blue-400" />, <SiDaisyui size={23} className="text" />, <SiMysql size={23} className="text" />],
            src: "/projects/interngate.png",
            repo: "https://github.com/Deyand03/interngate",
            demo: "https://interngate.vercel.app"

        },
        {
            judul: "Si-Klinik",
            deskripsi: "Website Klinik untuk reservasi online dengan model Backend as a Service",
            techStack: [<SiLaravel size={23} className="text" />, <SiJavascript size={23} className="text" />, <SiTailwindcss size={23} className="text-blue-500 dark:text-blue-400" />, <SiDaisyui size={23} className="text" />, <SiMysql size={23} className="text" />],
            src: "/projects/siklinik.png",
            repo: "https://github.com/Deyand03/klinik-r1",
            demo: "https://klinikr1.vercel.app/"

        },
        {
            judul: "Deyporto",
            deskripsi: "Website Portofolio pertama saya setelah belajar HTML, CSS dan Bootstrap",
            techStack: [<SiHtml5 size={23} className="text" />, <SiCss3 size={23} className="text" />, <SiBootstrap size={23} className="text" />, <SiJavascript size={23} className="text" />,],
            src: "/projects/portov1.png",
            repo: "https://github.com/Deyand03/deyporto",
            demo: "https://deyporto.vercel.app"
        },
        {
            judul: "Witchy",
            deskripsi: "Project Game 2D yang sedang saya coba buat menggunakan Godot Engine",
            techStack: [<SiGodotengine size={23} className="text" />],
            src: "#",
            repo: "#",
            demo: "#"
        },
    ];

    const imageHover = {
        noHover: { scale: 1, filter: "blur(0px)" },
        hover: { scale: 1.05, filter: "blur(3px)" }
    }
    const imageOverlay = {
        noHover: { opacity: 0, },
        hover: { opacity: 1, transition: { duration: 0.3 } }
    }
    const logoOverlay = {
        noHover: { opacity: 0, scale: 0 },
        hover: { opacity: 1, scale: 1, transition: { duration: 0.1, delay: 0.1 } }
    }

    return (
        <section ref={projectsRef} className="container mx-auto pt-20 pb-40 px-4 md:px-20">
            <motion.div
                style={{ scale, opacity }}
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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                    {/* List Projects */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 mt-12 col-span-1 md:col-span-7 border rounded-xl md:max-h-150 overflow-y-auto ">
                        {projectsList.map((project, index) => (
                            <motion.div
                                key={index}
                                className="md:h-85"
                            >
                                <div className="flex flex-col justify-between border rounded-2xl h-full shadow hover:shadow-md dark:shadow-white/40 transition-all duration-300">
                                    <motion.div
                                        initial="noHover"
                                        whileHover="hover"
                                    >
                                        <div className="relative overflow-hidden m-2 border-2 rounded-2xl shadow">
                                            <motion.img
                                                src={project.src} alt={`project ${index}`} width={600} height={400} className="aspect-video"
                                                variants={imageHover} />
                                            <motion.div variants={imageOverlay} className="absolute inset-0 bg-black/40 h-full flex gap-2 items-center justify-center">
                                                <motion.a variants={logoOverlay} href={project.repo} className="p-2"><SiGithub color="white" size={28} /></motion.a>
                                                <motion.a variants={logoOverlay} href={project.demo} className="p-2"><FaShare color="white" size={28} /></motion.a>
                                            </motion.div>
                                        </div>
                                        <div className="flex flex-col justify-between gap-2 p-2">
                                            <div className="flex flex-col gap-1">
                                                <h1 className="text-orange-300 dark:text-blue-400 font-semibold">{project.judul}</h1>
                                                <p className="text-muted-foreground tracking-tight text-sm line-clamp-4 text-justify">{project.deskripsi}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="flex gap-2 p-2 overflow-x-auto">
                                        {project.techStack.map((icon, id) => (
                                            <div key={id} className="p-2 bg-foreground/5 rounded-full">
                                                {icon}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
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
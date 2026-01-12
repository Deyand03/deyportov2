import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import { SiBootstrap, SiCss3, SiDaisyui, SiDart, SiFlutter, SiFramer, SiGithub, SiGodotengine, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiReact, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";


interface TechItem {
    icon: React.ElementType;
    title: string;
    className?: string;
}

interface Project {
    judul: string;
    deskripsi: string;
    techStack: TechItem[];
    src: string;
    repo: string;
    demo: string;
}

const LazyLoading = () => (
    <div className="w-full h-full flex justify-center items-center">
        <span className="text-lg font-bold text-muted-foreground">Loading...</span>
    </div>
)

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-100 w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500"
        >
            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full">
                <Suspense fallback={<LazyLoading />}>
                    <Image
                        src={project.src}
                        alt={project.judul}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </Suspense>
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
                <div className="flex flex-wrap gap-2 mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    {project.techStack.map((tech, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold bg-white/20 backdrop-blur-md px-2 py-1 rounded-full border border-white/10"
                            title={tech.title}
                        >
                            <tech.icon className={tech.className} />
                            <span>{tech.title}</span>
                        </div>
                    ))}
                </div>
                <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <h3 className="text-2xl font-bold mb-2 leading-tight group-hover:text-yellow-500 dark:group-hover:text-blue-300 transition-colors">
                        {project.judul}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {project.deskripsi}
                    </p>
                </div>
                <div className="flex gap-4 mt-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors"
                        >
                            <SiGithub /> Code
                        </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                        <a
                            href={project.demo}
                            target="_blank"
                            className="flex-1 flex items-center justify-center gap-2 bg-white/20 backdrop-blur-md border border-white/20 text-white py-2 rounded-lg font-medium text-sm hover:bg-white/30 transition-colors"
                        >
                            <ExternalLink size={16} /> Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export { ProjectCard };
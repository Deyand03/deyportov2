
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import {
    SiReact, SiLaravel, SiMysql, SiPostgresql, SiTypescript, SiPhp,
    SiJavascript, SiHtml5, SiTailwindcss, SiPython, SiMediapipe,
    SiFramer, SiGithub, SiGit, SiVercel, SiSupabase, SiGodotengine,
    SiNpm, SiPnpm, SiBun, SiDaisyui, SiDart, SiFlutter, SiBootstrap, SiCss3
} from "react-icons/si";

// --- SOCIAL LINKS ---
export const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/deyand.__", icon: FaInstagram },
    { name: "LinkedIn", href: "https://linkedin.com/in/defry03", icon: FaLinkedin },
    { name: "GitHub", href: "https://github.com/Deyand03", icon: FaGithub },
];

// --- SKILLS ---
export const skillsList = [
    { icon: SiReact, title: "React" },
    { icon: SiLaravel, title: "Laravel" },
    { icon: SiMysql, title: "MySQL" },
    { icon: SiPostgresql, title: "PostgreSQL" },
    { icon: SiTypescript, title: "Typescript" },
    { icon: SiPhp, title: "PHP" },
    { icon: SiJavascript, title: "Javascript" },
    { icon: SiHtml5, title: "HTML" },
    { icon: SiTailwindcss, title: "TailwindCSS" },
    { icon: SiPython, title: "Python" },
    { icon: SiMediapipe, title: "Mediapipe" },
    { icon: SiFramer, title: "Framer Motion" },
    { icon: SiGithub, title: "Github" },
    { icon: SiGit, title: "Git" },
    { icon: SiVercel, title: "Vercel" },
    { icon: SiSupabase, title: "Supabase" },
    { icon: SiGodotengine, title: "Godot Engine" },
    { icon: SiNpm, title: "NPM" },
    { icon: SiPnpm, title: "PNPM" },
    { icon: SiBun, title: "Bun" }
];


// --- PROJECTS ---
export const projectsData = [
    {
        judul: "DeyportoV2",
        deskripsi: "Website Portofolio kedua yang interaktif dengan React.js dan Three.js.",
        techStack: [
            { icon: SiReact, title: "React", className: "text-blue-400" },
            { icon: SiTypescript, title: "Typescript", className: "text-blue-600" },
            { icon: SiFramer, title: "Framer", className: "text-pink-500" },
            { icon: SiTailwindcss, title: "Tailwind", className: "text-cyan-400" }
        ],
        src: "/projects/portov2.png",
        repo: "https://github.com/Deyand03/deyportov2",
        demo: "#"
    },
    {
        judul: "KenalBersih",
        deskripsi: "Sistem Pengelolaan Sampah Desa Mendalo Indah dengan Dashboard & Chatbot.",
        techStack: [
            { icon: SiLaravel, title: "Laravel", className: "text-red-500" },
            { icon: SiTailwindcss, title: "Tailwind", className: "text-cyan-400" },
            { icon: SiDaisyui, title: "DaisyUI", className: "text-emerald-400" },
            { icon: SiMysql, title: "MySQL", className: "text-blue-500" }
        ],
        src: "/projects/kenalbersih.png",
        repo: "https://github.com/Deyand03/kenalbersih",
        demo: "https://kenalbersih.vercel.app/"
    },
    {
        judul: "Interngate Mobile",
        deskripsi: "Mobile App pendaftaran magang dengan fitur real-time chat via Supabase.",
        techStack: [
            { icon: SiFlutter, title: "Flutter", className: "text-blue-400" },
            { icon: SiDart, title: "Dart", className: "text-blue-500" },
            { icon: SiSupabase, title: "Supabase", className: "text-green-400" }
        ],
        src: "/projects/interngatemobile.jpg",
        repo: "https://github.com/Deyand03/singularity",
        demo: "#"
    },
    {
        judul: "Interngate",
        deskripsi: "Platform pendaftaran magang mahasiswa dengan Dashboard Mitra yang komprehensif.",
        techStack: [
            { icon: SiLaravel, title: "Laravel", className: "text-red-500" },
            { icon: SiTailwindcss, title: "Tailwind", className: "text-cyan-400" }
        ],
        src: "/projects/interngate.png",
        repo: "https://github.com/Deyand03/interngate",
        demo: "https://interngate.vercel.app"
    },
    {
        judul: "Si-Klinik",
        deskripsi: "Sistem reservasi klinik online dengan arsitektur Backend as a Service.",
        techStack: [
            { icon: SiLaravel, title: "Laravel", className: "text-red-500" },
            { icon: SiJavascript, title: "JS", className: "text-yellow-400" },
            { icon: SiTailwindcss, title: "Tailwind", className: "text-cyan-400" }
        ],
        src: "/projects/siklinik.png",
        repo: "https://github.com/Deyand03/klinik-r1",
        demo: "https://klinikr1.vercel.app/"
    },
    {
        judul: "Deyporto V1",
        deskripsi: "Jejak awal belajar web development menggunakan HTML, CSS, dan Bootstrap.",
        techStack: [
            { icon: SiHtml5, title: "HTML", className: "text-orange-500" },
            { icon: SiCss3, title: "CSS", className: "text-blue-500" },
            { icon: SiBootstrap, title: "Bootstrap", className: "text-purple-600" }
        ],
        src: "/projects/portov1.png",
        repo: "https://github.com/Deyand03/deyporto",
        demo: "https://deyporto.vercel.app"
    },
    {
        judul: "Witchy",
        deskripsi: "Eksperimen Game 2D Platformer menggunakan Godot Engine.",
        techStack: [
            { icon: SiGodotengine, title: "Godot", className: "text-blue-400" }
        ],
        src: "/img/placeholder.jpg",
        repo: "#",
        demo: "#"
    }
];

// --- DRAWINGS (MASONRY) ---
export const drawingsList = [
    { id: "1", title: "Realism Art", img: "/drawing/drawRealism.jpg", url: "#", height: 700 },
    { id: "2", title: "Shoko Illustration", img: "/drawing/drawShoko.jpg", url: "#", height: 500 },
    { id: "3", title: "Anime Character 2", img: "/drawing/drawNime2.jpg", url: "#", height: 750 },
    { id: "4", title: "Anime Character", img: "/drawing/drawNime.jpg", url: "#", height: 700 },
    { id: "5", title: "Medieval Sketch", img: "/drawing/drawMedieval.jpg", url: "#", height: 550 },
    { id: "6", title: "2B Nier Automata", img: "/drawing/draw2B.jpeg", url: "#", height: 450 },
    { id: "7", title: "Itachi Uchiha", img: "/drawing/drawItachi.jpeg", url: "#", height: 600 },
    { id: "8", title: "Makima", img: "/drawing/drawMakima.jpeg", url: "#", height: 550 },
    { id: "9", title: "Anime Character 3", img: "/drawing/drawNime3.jpeg", url: "#", height: 550 },
    { id: "10", title: "Makima Eye Detail", img: "/drawing/drawMakimaeye.jpeg", url: "#", height: 550 },
    { id: "11", title: "Semirealism Style", img: "/drawing/drawSemirealis.jpeg", url: "#", height: 550 },
    { id: "12", title: "Sukuna Jujutsu Kaisen", img: "/drawing/drawSukuna.jpeg", url: "#", height: 550 },
    { id: "13", title: "Violet Evergarden", img: "/drawing/drawViolet.jpeg", url: "#", height: 550 },
];

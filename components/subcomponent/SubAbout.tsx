import Image from "next/image";
import { SiReact, SiLaravel, SiMysql, SiPostgresql, SiTypescript, SiPhp, SiJavascript, SiHtml5, SiTailwindcss, SiPython, SiMediapipe, SiFramer, SiGithub, SiGit, SiVercel, SiSupabase, SiGodotengine, SiNpm, SiPnpm, SiBun } from "react-icons/si";

const drawings = [
    {
        id: "1",
        img: "/drawing/drawRealism.jpg",
        url: "#",
        height: 700
    },
    {
        id: "2",
        img: "/drawing/drawShoko.jpg",
        url: "#",
        height: 500
    },
    {
        id: "3",
        img: "/drawing/drawNime2.jpg",
        url: "#",
        height: 750
    },
    {
        id: "4",
        img: "/drawing/drawNime.jpg",
        url: "#",
        height: 700
    },
    {
        id: "5",
        img: "/drawing/drawMedieval.jpg",
        url: "#",
        height: 550
    },
    {
        id: "6",
        img: "/drawing/draw2B.jpeg",
        url: "#",
        height: 450
    },
    {
        id: "7",
        img: "/drawing/drawItachi.jpeg",
        url: "#",
        height: 600
    },
    {
        id: "8",
        img: "/drawing/drawMakima.jpeg",
        url: "#",
        height: 550
    },
    {
        id: "9",
        img: "/drawing/drawNime3.jpeg",
        url: "#",
        height: 550
    },
    {
        id: "10",
        img: "/drawing/drawMakimaeye.jpeg",
        url: "#",
        height: 550
    },
    {
        id: "11",
        img: "/drawing/drawSemirealis.jpeg",
        url: "#",
        height: 550
    },
    {
        id: "12",
        img: "/drawing/drawSukuna.jpeg",
        url: "#",
        height: 550
    },
    {
        id: "13",
        img: "/drawing/drawViolet.jpeg",
        url: "#",
        height: 550
    },
]

const skillsLogo = [
    { icon: <SiReact />, title: "React" },
    { icon: <SiLaravel />, title: "Laravel" },
    { icon: <SiMysql />, title: "MySQL" },
    { icon: <SiPostgresql />, title: "PostgreSQL" },
    { icon: <SiTypescript />, title: "Typescript" },
    { icon: <SiPhp />, title: "PHP" },
    { icon: <SiJavascript />, title: "Javascript" },
    { icon: <SiHtml5 />, title: "HTML" },
    { icon: <SiTailwindcss />, title: "TailwindCSS" },
    { icon: <SiPython />, title: "Python" },
    { icon: <SiMediapipe />, title: "Mediapipe" },
    { icon: <SiFramer />, title: "Framer Motion" },
    { icon: <SiGithub />, title: "Github" },
    { icon: <SiGit />, title: "Git" },
    { icon: <SiVercel />, title: "Vercel" },
    { icon: <SiSupabase />, title: "Supabase" },
    { icon: <SiGodotengine />, title: "Godot Engine" },
    { icon: <SiNpm />, title: "NPM" },
    { icon: <SiPnpm />, title: "PNPM" },
    { icon: <SiBun />, title: "Bun" }
];
const Badge3D = ({ icon, title }: { icon: React.ReactNode, title: string }) => {
    return (
        <figure className="relative bg-zinc-100 dark:bg-zinc-900 border rounded-xl
                hover:translate-y-1 hover:translate-x-0.5 shadow-[7px_5px_0px_0px_rgba(0,0,0,100%)] dark:shadow-[7px_5px_0_0_rgba(255,255,255,70%)]
                transition-all duration-300 hover:shadow-none dark:hover:shadow-none will-change-transform transform-gpu">
            <div className="flex items-center gap-3 p-2">
                <div
                    className="shadow-md shadow-orange-500/30 dark:shadow-white/30 border rounded-xl p-3">
                    {icon}
                </div>
                <figcaption className="text-foreground font-semibold">{title}</figcaption>
            </div>
        </figure>
    )
}

const timeline = [
    {
        title: "2026",
        content: (
            <div>
                <section className="text-muted-foreground space-y-4">
                    <p>
                        Kicked off the year by mastering React.js and Next.js, applying these modern
                        technologies to build the portfolio you are looking at right now.
                    </p>
                    <p>
                        Moving forward, my focus shifts to expanding my horizons: developing an immersive 2D Platformer game
                        and engineering a personal AI Automation Agent to streamline my workflow.
                    </p>
                </section>
                <div className="grid grid-cols-2 gap-4">
                    <Image src={"/projects/portov2.png"} alt="Deyporto V2" width={600} height={400} className="border rounded-xl mt-4" />
                </div>
            </div>

        )
    },
    {
        title: "2025",
        content: (
            <section className="text-muted-foreground space-y-4">
                <p>
                    A defined year of technical exploration. I started with the basics—HTML, CSS,
                    and Bootstrap—before advancing to Laravel to build 'InternGate' during my 4th semester.
                </p>
                <p>
                    By Semester 5, I accelerated my productivity, delivering three major projects:
                    'KenalBersih', 'SI-Klinik', and the mobile iteration of 'InternGate'.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <Image src={"/projects/siklinik.png"} alt="Si-Klinik" width={600} height={400} className="border rounded-xl" />
                    <Image src={"/projects/kenalbersih.png"} alt="KenalBersih" width={600} height={400} className="border rounded-xl" />
                    <Image src={"/projects/interngatemobile.jpg"} alt="InterngateMobile" width={600} height={400} className="border rounded-xl" />
                    <Image src={"/projects/interngate.png"} alt="Interngate" width={600} height={400} className="border rounded-xl" />
                    <Image src={"/projects/portov1.png"} alt="Deyporto V1" width={600} height={400} className="border rounded-xl col-span-2" />
                </div>
            </section>
        )
    },
    {
        title: "2023",
        content: (
            <section className="text-muted-foreground">
                <p>
                    Enrolled in the Information Systems program at Universitas Jambi.
                    This marked the start of my academic journey, laying the theoretical and logical foundation for my career in technology.
                </p>
                <div className="relative mt-4">
                    <Image src={"/unja.jpg"} alt="Universitas Jambi" width={600} height={400} className="border rounded-xl" />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
            </section>
        )
    }
]


export default skillsLogo;
export { drawings, timeline, Badge3D };
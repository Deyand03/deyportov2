import Image from "next/image";


const Badge3D = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => {
    return (
        <figure className="relative bg-zinc-100 dark:bg-zinc-900 border rounded-xl
                hover:translate-y-1 hover:translate-x-0.5 shadow-[7px_5px_0px_0px_rgba(0,0,0,100%)] dark:shadow-[7px_5px_0_0_rgba(255,255,255,70%)]
                transition-all duration-300 hover:shadow-none dark:hover:shadow-none will-change-transform transform-gpu">
            <div className="flex items-center gap-3 p-2">
                <div
                    className="shadow-md shadow-orange-500/30 dark:shadow-white/30 border rounded-xl p-3">
                    <Icon />
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
                </div>
            </section>
        )
    }
]


export { timeline, Badge3D };
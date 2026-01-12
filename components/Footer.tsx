"use client";

import { ArrowUp, ArrowUpRight, MapPin } from "lucide-react";
import { socialLinks } from "@/data";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full border-t border-black/10 dark:border-white/10 relative z-10">
            <div className="px-6 md:px-20 pt-20 pb-20">
                {/* Top Section: Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="md:col-span-3 flex flex-col gap-6">
                        <h2 className="text-2xl font-bold tracking-tight">Defry Yandy.</h2>
                        <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base">
                            Information Systems Student & Web Developer focused on crafting interactive, functional, and aesthetic digital experiences.
                        </p>
                        <div className="flex flex-col gap-2 mt-auto">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Available for Freelance
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin size={14} /> Jambi, Indonesia
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Socials</h3>
                        <div className="flex flex-col gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 w-fit text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <span className="group-hover:scale-110 transition-transform duration-200"><social.icon /></span>
                                    <span>{social.name}</span>
                                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-black/10 dark:border-white/10 pt-10 pb-10">
                    <h1 className="text-[12vw] leading-none font-black text-center text-black/5 dark:text-white/5 uppercase tracking-tighter select-none pointer-events-none">
                        DEFRY YANDY
                    </h1>
                </div>

                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-black/10 dark:border-white/10">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        © {new Date().getFullYear()} Defry Yandy. All Rights Reserved. <br className="md:hidden" />
                        Built with Next.js & Tailwind.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                    >
                        Back to Top
                        <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
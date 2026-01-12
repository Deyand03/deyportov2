"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import {
    Home,
    User,
    Briefcase,
    Mail,
    Sun,
    Moon,
    Menu,
    X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";
interface NavItem {
    name: string;
    href: string;
    icon: React.ComponentType<{ size?: number | string }>;
}

const navItems: NavItem[] = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const lenis = useLenis();

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);

        if (elem && lenis) {
            lenis.scrollTo(elem, {
                duration: 1.5,
            });
        }
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
            >
                <div
                    className={cn(
                        "flex items-center gap-2 p-2 rounded-full transition-all duration-300 ease-in-out",
                        "bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl",
                        isScrolled ? "shadow-2xl bg-white/20 dark:bg-black/40" : ""
                    )}
                >
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <NavLink key={item.name} item={item} onClick={(e) => handleScrollTo(e, item.href)} />
                        ))}
                    </div>
                    <button
                        className="md:hidden p-3 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    <div className="h-6 w-px bg-white/20 mx-2" />
                    <ThemeToggle />
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm p-4 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl md:hidden flex flex-col gap-2"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleScrollTo(e, item.href)}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                            >
                                <item.icon size={20} />
                                <span className="font-medium">{item.name}</span>
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function NavLink({ item, onClick }: { item: NavItem, onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={item.href}
            onClick={onClick}
            className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors hover:text-black dark:hover:text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="relative z-10 flex items-center gap-2">
                {isHovered && (
                    <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        className="overflow-hidden"
                    >
                        <item.icon size={16} />
                    </motion.span>
                )}
                {item.name}
            </span>

            {isHovered && (
                <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/40 dark:bg-white/10 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            )}
        </a>
    );
}

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!(document as any).startViewTransition) {
            setTheme(theme === "dark" ? "light" : "dark");
            return;
        }

        const x = e.clientX;
        const y = e.clientY;

        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        );

        // Core logic animasi spread
        const transition = (document as any).startViewTransition(() => {
            setTheme(theme === "dark" ? "light" : "dark");
        });

        transition.ready.then(() => {
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${endRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration: 700,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
    };

    if (!mounted) return <div className="w-10 h-10" />;

    return (
        <button
            onClick={toggleTheme}
            className="relative p-3 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors group"
            aria-label="Toggle Theme"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
            <Moon className="absolute top-3 left-3 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
        </button>
    );
}
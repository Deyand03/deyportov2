"use client";

import { motion, Transition } from "framer-motion";
import { useEffect, useState } from "react";

const transitionAnim: Transition = {
    duration: 1.2,
    ease: [0.83, 0, 0.17, 1] as any
};

interface SplashScreenProps {
    children: React.ReactNode; 
    splashContent: React.ReactNode;
}

export default function SplashScreenProvider({ children, splashContent }: SplashScreenProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <motion.div
                initial={{ y: 0 }}
                animate={{
                    y: isLoading ? 0 : "-100%",
                    borderBottomLeftRadius: isLoading ? "0%" : "50%",
                    borderBottomRightRadius: isLoading ? "0%" : "50%"
                }}
                transition={transitionAnim}
                className="fixed inset-0 z-9999 flex items-center justify-center bg-background pointer-events-none"
            >
                <motion.div
                    animate={{
                        opacity: isLoading ? 1 : 0,
                        y: isLoading ? 0 : -50
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex flex-col items-center justify-center"
                >
                    {splashContent}
                </motion.div>
            </motion.div>
            <main>{children}</main>
        </>
    );
}
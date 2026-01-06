"use client";

import { ReactLenis } from "lenis/react";

interface SmoothScrollProps {
    children: React.ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisOptions = {
        lerp: 0.1,
        duration: 1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
    };

    return (
        <ReactLenis root options={lenisOptions}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScroll;
"use client";
import BlurText from "./BlurText";
import LightRays from "./LightRays";
import TextType from "./TextType";
import Lanyard from "./Lanyard"

const Hero = () => {
    return (
        <>
            <div className="relative h-screen">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>
            <div className="absolute top-0 left-0 flex items-center h-screen w-full">
                <div className="flex flex-col w-1/2 justify-center items-center h-full">
                    <div>
                        <BlurText
                            text="Welcome To My Portofolio"
                            className="text-4xl font-semibold"
                        />
                        <BlurText
                            text="Hello, I'm Defry Yandy"
                            className="text-2xl font-semibold"
                        />
                        <div>
                            <span className="text-2xl font-semibold">I'm a </span>
                            <TextType
                                text={["Web Developer.", "Game Developer.", "Artist"]}
                                className="text-2xl font-semibold"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <Lanyard />
                </div>
            </div>
        </>
    )
}

export default Hero;
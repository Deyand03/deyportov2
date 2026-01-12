import { AvatarImage, AvatarFallback, Avatar } from "@radix-ui/react-avatar";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLinks = [
    {
        icon: <FaInstagram />,
        href: "https://instagram.com/deyand.__",
        color: "hover:text-pink-500",
        preview: (
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-full border-2 border-white/20 overflow-hidden">
                        <Image
                            src="/img/pp_ig.jpg"
                            alt="Defry Instagram"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-foreground">Defry</h4>
                        <p className="text-xs text-muted-foreground font-medium">@deyand.__</p>
                    </div>
                </div>
                <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">
                        SI'23
                        <br />
                        Art Account
                        <br />
                        <a className="hover:text-blue-400 transition-all transform-gpu will-change-transform duration-300" href="https://instagram.com/deyart.__">@deyart.__</a>
                    </p>
                    <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-3 w-3 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">Bergabung Februari 2022</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        icon: <FaGithub />,
        href: "https://github.com/Deyand03",
        color: "hover:text-gray-900 dark:hover:text-white",
        preview: (
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src="https://github.com/Deyand03.png" />
                        <AvatarFallback>DY</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="text-sm font-semibold text-foreground">Defry</h4>
                        <p className="text-xs text-muted-foreground font-medium">@Deyand03</p>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground">
                    Building modern web applications with Next.js & Laravel 12.
                    Open Source enthusiast.
                </p>
                <div className="flex items-center gap-4 pt-1">
                    <div className="flex items-center text-xs text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-blue-300 mr-1" />
                        React
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-blue-400 mr-1" />
                        TypeScript
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-red-400 mr-1" />
                        Laravel
                    </div>
                </div>
            </div>
        )
    },
    {
        icon: <FaLinkedin />,
        href: "https://linkedin.com/in/defry03",
        color: "hover:text-blue-600",
        preview: (
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-md border border-white/10 overflow-hidden bg-blue-600 flex items-center justify-center text-white font-bold">
                        in
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-foreground">Defry Yandy</h4>
                        <p className="text-xs text-muted-foreground font-medium">Web & Game Developer</p>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground">
                    Connect with me for professional opportunities and collaborations.
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="mr-1 h-3 w-3" /> Indonesia
                </div>
            </div>
        )
    }
];

export default SocialLinks;
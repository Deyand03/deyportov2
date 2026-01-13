"use client";

import useSound from "use-sound";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Copy, Check, Send, Loader2 } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import emailjs from "@emailjs/browser"

const SocialLink = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => (
    <Link 
        href={href} 
        target="_blank"
        className="flex items-center justify-between py-4 border-b border-black/10 dark:border-white/10 group hover:bg-black/5 dark:hover:bg-white/5 transition-colors px-2"
    >
        <div className="flex items-center gap-4">
            <span className="text-xl text-muted-foreground group-hover:text-foreground transition-colors">{icon}</span>
            <span className="text-lg font-medium group-hover:tracking-wide transition-all">{label}</span>
        </div>
        <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </Link>
);

const Contact = () => {
    const [play] = useSound('/sounds/switch.mp3');
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [copied, setCopied] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleCopy = () => {
        navigator.clipboard.writeText("defryyandy7@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!formRef.current) return

        setStatus("loading");
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formRef.current,
            {
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            }
        )
        .then(() => {
            setStatus("success");
            setForm({name: "", email: "", message: ""});
            formRef.current?.reset();

            setTimeout(() => setStatus("idle"), 3000);
        })
        .catch((error) => {
            console.log("Error: ", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        })
    };

    return (
        <section onClick={() => play()} id="contact" className="w-full relative">
            {/* Header */}
            <header className="px-6 md:px-20 pt-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-black/10 dark:border-white/10 pb-6">
                    <div>
                        <h1 className="text-4xl md:text-7xl font-bold text-foreground tracking-tight">
                            CONTACT.
                        </h1>
                        <span className="text-sm md:text-base text-muted-foreground tracking-widest uppercase">
                            / Get in touch
                        </span>
                    </div>
                    <div className="mt-4 md:mt-0 text-right hidden md:block">
                        <p className="text-xs font-mono text-muted-foreground">
                            STATUS: <span className="text-green-500">ONLINE</span>
                        </p>
                        <p className="text-xs font-mono text-muted-foreground">
                            LOC: INDONESIA
                        </p>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="px-6 md:px-20 pb-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* LEFT: Info & Socials */}
                    <div className="flex flex-col justify-between h-full gap-10">
                        <div>
                            <h3 className="text-2xl font-light leading-relaxed mb-8 text-muted-foreground">
                                Interested in working together? <br/>
                                <span className="text-foreground font-medium">Let&apos;s build something extraordinary.</span>
                            </h3>
                            
                            <div className="group cursor-pointer w-fit" onClick={handleCopy}>
                                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Email me directly</p>
                                <div className="flex items-center gap-4">
                                    <h2 className="text-3xl md:text-5xl font-bold hover:underline decoration-1 underline-offset-8 transition-all">
                                        defryyandy7@gmail.com
                                    </h2>
                                    <div className="p-2 rounded-full border border-black/10 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <AnimatePresence mode="wait">
                                            {copied ? (
                                                <motion.div
                                                    key="check"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                >
                                                    <Check className="w-5 h-5 text-green-500" />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="copy"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                >
                                                    <Copy className="w-5 h-5" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links List */}
                        <div className="flex flex-col">
                            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Socials</p>
                            <SocialLink href="https://instagram.com/deyand.__" label="Instagram" icon={<FaInstagram />} />
                            <SocialLink href="https://linkedin.com/in/defry03" label="LinkedIn" icon={<FaLinkedin />} />
                            <SocialLink href="https://github.com/Deyand03" label="Github" icon={<FaGithub />} />
                        </div>
                    </div>

                    {/* RIGHT: Minimalist Form */}
                    <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-black/5 dark:border-white/5">
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <div className="space-y-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Your Name</label>
                                    <input 
                                        type="text"
                                        name="from_name"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({...form, name: e.target.value})}
                                        className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-4 text-xl outline-none focus:border-black dark:focus:border-white transition-colors placeholder:text-black/20 dark:placeholder:text-white/20"
                                        placeholder="name"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Email Address</label>
                                    <input 
                                        type="email"
                                        name="from_email" 
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({...form, email: e.target.value})}
                                        className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-4 text-xl outline-none focus:border-black dark:focus:border-white transition-colors placeholder:text-black/20 dark:placeholder:text-white/20"
                                        placeholder="yourmail@gmail.com"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Message</label>
                                    <textarea 
                                        required
                                        rows={4}
                                        name="message"
                                        value={form.message}
                                        onChange={(e) => setForm({...form, message: e.target.value})}
                                        className="w-full bg-transparent border-b border-black/20 dark:border-white/20 py-4 text-xl outline-none focus:border-black dark:focus:border-white transition-colors resize-none placeholder:text-black/20 dark:placeholder:text-white/20"
                                        placeholder="Hello Defry, I have a project..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className="group w-full py-4 bg-foreground text-background font-bold text-lg rounded-xl hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center gap-3"
                            >
                                {status === "loading" ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : status === "success" ? (
                                    <>
                                        <span>Message Sent</span>
                                        <Check className="w-5 h-5" />
                                    </>
                                ) : status === "error" ? (
                                    <>
                                        <span>Failed (Try Again)</span>
                                        <span className="text-red-500 text-lg">!</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </main>
        </section>
    )
}

export default Contact;
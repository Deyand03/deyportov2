"use client";

import useSound from "use-sound";

const Contact = () => {
    const [play] = useSound('/sounds/switch.mp3')
    return (
        <section className="h-screen" onClick={() => play()}>

        </section>
    )
}

export default Contact;
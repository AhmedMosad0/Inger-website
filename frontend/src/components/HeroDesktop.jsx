import { delay, motion } from "framer-motion";

import MovingLine from "./MovingLine";


export default function HeroDesktop() {
    const title = "STAY TUNED".split("");
    const subtitle = "website is under construction".split("");
    const paragraphWords =
        "Our website is currently undergoing maintenance to make your user experience easier and faster, keep tuned for future updates.".split(" ");

    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center bg-white absolute z-10">
            {/* Background */}
            <img
                src="/background-3840×2160.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover -z-20"
            />

            <MovingLine lineSrc="/Original-line.png"
                angle={15}
                position={{ top: "-40px", left: "-650px" }}
                contents={[
                    { src: "/png-shorat.png", size: "1600px", speed: 8, offset: 0, marginTop: 0, marginLeft: 0 },
                    { src: "/png-shorat.png", size: "1600px", speed: 8, offset: 0, marginTop: 0, marginLeft: 0, delay: 4 },]}
            />


            <MovingLine
                lineSrc="/Original-line.png"
                angle={-15}
                position={{ top: "-40px", left: "-650px" }}
                contents={[
                    { src: "/png-shorat.png", size: "3000px", speed: 10, offset: 200, marginTop: -20, marginLeft: -390, zIndex: 5 },
                    { src: "/line-ele-fo2-shorat.png", size: "3000px", speed: 10, offset: 200, marginTop: -20, marginLeft: -390, zIndex: 8 },
                    { src: "/text-png-white.png", size: "3000px", speed: 10, offset: 200, marginTop: -20, marginLeft: -390, zIndex: 10, },
                    { src: "/png-shorat.png", size: "3000px", speed: 10, offset: 200, marginTop: -20, marginLeft: -390, zIndex: 5, delay: 5 },
                    { src: "/line-ele-fo2-shorat.png", size: "3000px", speed: 10, offset: 200, marginTop: -20, marginLeft: -390, zIndex: 8, delay: 5 },
                    {
                        src: "/text-png-white.png", size: "3000px", speed: 10, offset: 200, marginTop: -20, marginLeft: -390, delay: 5, zIndex: 10
                    },

                ]}
            />

            {/* right lines*/}
            <MovingLine
                lineSrc="/Original-line.png"
                angle={15}
                position={{ bottom: "-90px", right: "-650px" }}
                contents={[
                    { src: "/png-shorat.png", size: "1600px", speed: 8, offset: 0, marginTop: 0, marginLeft: 0 },
                    { src: "/png-shorat.png", size: "1600px", speed: 8, offset: 0, marginTop: 0, marginLeft: 0, delay: 4 },
                ]}
            />

            <MovingLine
                lineSrc="/Original-line.png"
                angle={-5}
                position={{ bottom: "-40px", right: "-670px" }}
                contents={[
                    { src: "/png-shorat.png", size: "3000px", speed: 10, offset: 200, marginTop: -20, marginLeft: -390, zIndex: 5 },
                    { src: "/line-ele-fo2-shorat.png", size: "3000px", speed: 10, offset: 200, marginTop: -20, marginLeft: -390, zIndex: 8 },
                    { src: "/text-png-white.png", size: "1800px", speed: 10, offset: 200, marginTop: -20, marginLeft: -390, zIndex: 10 },
                    { src: "/png-shorat.png", size: "3000px", speed: 10, offset: 200, marginTop: -20, marginLeft: -390, zIndex: 5, delay: 5 },
                    { src: "/line-ele-fo2-shorat.png", size: "3000px", speed: 10, offset: 200, marginTop: -20, marginLeft: -390, zIndex: 8, delay: 5 },
                    { src: "/text-png-white.png", size: "1800px", speed: 10, offset: 200, marginTop: -20, marginLeft: -390, delay: 5, zIndex: 10 },

                ]}
            />




            {/* Center content */}
            <div className="relative z-20 flex flex-col justify-center items-center text-center px-6">
                {/* Title */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight font-sans flex space-x-1 justify-center text-[#4F46E5]">
                    {title.map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </h1>

                {/* Subtitle */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-6 flex flex-wrap justify-center max-w-5xl">
                    {subtitle.map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.5, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: i * 0.03 + 0.7, duration: 0.3 }}
                            className="inline-block text-gray-900"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </h2>

                {/* Paragraph */}
                <p className="text-base md:text-xl mt-6 max-w-3xl leading-relaxed text-gray-700 flex flex-wrap justify-center">
                    {paragraphWords.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ delay: 1.5 + i * 0.05, duration: 0.5 }}
                            className="inline-block mr-2"
                        >
                            {word}
                        </motion.span>
                    ))}
                </p>
            </div>
        </div>
    );
}

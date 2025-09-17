import { delay, motion } from "framer-motion";
import MovingLineMobile from "./MovingLineMobile";

export default function HeroMobile() {
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

      {/* Top Left Moving Lines - Adjusted for mobile */}
      <MovingLineMobile
        lineSrc="/Original-line.png"
        angle={15}
        position={{ top: "25px", left: "-220px" }}
        lineWidth="1000px"
        contents={[
          { src: "/png-shorat.png", size: "1000px", speed: 10, offset: 0, marginTop: 0, marginLeft: 0 },
          { src: "/png-shorat.png", size: "1000px", speed: 10, offset: 0, marginTop: 0, marginLeft: 0, delay: 4 },
        ]}
      />

      <MovingLineMobile
        lineSrc="/Original-line.png"
        angle={-5}
        position={{ top: "40px", left: "-250px" }}
        lineWidth="1000px"
        contents={[
          { src: "/png-shorat.png", size: "1800px", speed: 10, offset: 100, marginTop: -10, marginLeft: -195, zIndex: 5 },
          { src: "/line-ele-fo2-shorat.png", size: "1800px", speed: 10, offset: 100, marginTop: -10, marginLeft: -195, zIndex: 8 },
          { src: "/text-png-white.png", size: "1100px", speed: 10, offset: 100, marginTop: -10, marginLeft: -195, zIndex: 10 },
          { src: "/png-shorat.png", size: "1800px", speed: 10, offset: 100, marginTop: -10, marginLeft: -195, zIndex: 5, delay: 3.5 },
          { src: "/line-ele-fo2-shorat.png", size: "1800px", speed: 10, offset: 100, marginTop: -10, marginLeft: -195, zIndex: 8, delay: 3.5 },
          { src: "/text-png-white.png", size: "1800px", speed: 10, offset: 100, marginTop: -10, marginLeft: -195, delay: 3.5, zIndex: 10 },
        ]}
      />

      {/* Bottom Right Moving Lines - Adjusted for mobile */}
      <MovingLineMobile
        lineSrc="/Original-line.png"
        angle={5}
        position={{ bottom: "-50px", right: "-250px" }}
        lineWidth="1000px"
        contents={[
          { src: "/png-shorat.png", size: "1000px", speed: 10, offset: 0, marginTop: 0, marginLeft: 0 },
          { src: "/png-shorat.png", size: "1000px", speed: 10, offset: 0, marginTop: 0, marginLeft: 0, delay: 4 },
        ]}
      />

      <MovingLineMobile
        lineSrc="/Original-line.png"
        angle={-20}
        position={{ bottom: "-20px", right: "-300px" }}
        lineWidth="1000px"
        contents={[
          { src: "/png-shorat.png", size: "1800px", speed: 10, offset: 100, marginTop: -10, marginLeft: -195, zIndex: 5 },
          { src: "/line-ele-fo2-shorat.png", size: "1800px", speed: 10, offset: 100, marginTop: -10, marginLeft: -195, zIndex: 8 },
          { src: "/text-png-white.png", size: "1100px", speed: 10, offset: 100, marginTop: -10, marginLeft: -195, zIndex: 10 },
          { src: "/png-shorat.png", size: "1800px", speed: 10, offset: 100, marginTop: -10, marginLeft: -195, zIndex: 5, delay: 5 },
          { src: "/line-ele-fo2-shorat.png", size: "1800px", speed: 10, offset: 100, marginTop: -10, marginLeft: -195, zIndex: 8, delay: 5 },
          { src: "/text-png-white.png", size: "1100px", speed: 10, offset: 100, marginTop: -10, marginLeft: -195, delay: 5, zIndex: 10 },
        ]}
      />

      {/* Center content - Mobile optimized */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-4">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight font-sans flex flex-wrap space-x-1 justify-center text-[#4F46E5] ">
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
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4 flex flex-wrap justify-center max-w-4xl leading-tight">
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
        <p className="text-sm sm:text-base md:text-lg mt-4 max-w-2xl leading-relaxed text-gray-700 flex flex-wrap justify-center px-2">
          {paragraphWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.5 + i * 0.05, duration: 0.5 }}
              className="inline-block mr-1 sm:mr-2"
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
}
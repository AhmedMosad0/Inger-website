import { motion } from "framer-motion";

function MovingLineMobile({
  lineSrc,
  contents = [],
  speed = 20,
  angle = 5,
  position,
  zIndex = 10,
  lineWidth = "1000px", // 👈 Mobile optimized default
  lineHeight = "auto",
  type = "base", // 👈 "base" | "arrow"
}) {
  const distance = 350; // 👈 Reduced travel distance for mobile screens

  // ✅ choose line style depending on type
  const baseTransform = `rotate(${angle}deg)`;
  const lineTransform =
    type === "arrow" ? `${baseTransform} scaleX(-1)` : baseTransform;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...position,
        overflow: "hidden",
        zIndex,
      }}
    >
      {/* Line Image */}
      <img
        src={lineSrc}
        alt="line"
        style={{
          width: lineWidth,
          height: lineHeight,
          transform: lineTransform,
          maskImage: "url(" + lineSrc + ")",
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: "url(" + lineSrc + ")",
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
        className="relative z-10"
      />

      {/* Container for moving contents */}
      <div
        className="absolute inset-0 z-20"
        style={{
          overflow: "hidden",
          transform: baseTransform, // 👈 mask stays in base rotation
          maskImage: "url(" + lineSrc + ")",
          maskSize: `${lineWidth} auto`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: "url(" + lineSrc + ")",
          WebkitMaskSize: `${lineWidth} auto`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
      >
        {contents.map((content, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `translate(-50%, -50%) rotate(${
                (content.contentAngle ?? angle) - angle
              }deg) translateX(${content.offset || 0}px) translateY(${
                content.offsetY || 0
              }px)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <motion.img
              src={content.src}
              alt={`moving-content-${i}`}
              style={{
                width: content.size || "1800px", // 👈 Mobile optimized default
                height: "auto",
                marginTop: content.marginTop || "0px",
                marginLeft: content.marginLeft || "0px",
                zIndex: content.zIndex || 1, // 👈 Added zIndex support for content layering
              }}
              animate={{
                translateY: [distance * 0.99, -distance * 0.97],
                translateX: [-distance, distance],
              }}
              transition={{
                duration: content.speed || speed,
                repeat: Infinity,
                ease: "linear",
                delay: content.delay || 0,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MovingLineMobile;
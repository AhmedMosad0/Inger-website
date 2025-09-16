import { motion } from "framer-motion";

function MovingLineMobile({
  lineSrc,
  contents = [],
  speed = 20,
  angle = 5,
  position,
  zIndex = 10,
  lineWidth = "1000px",
  lineHeight = "auto",
  type = "base",
}) {
  const distance = 250;

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

      {/* Container for moving contents - removed restrictive clipPath */}
      <div
        className="absolute inset-0 z-20"
        style={{
          overflow: "hidden",
          transform: baseTransform,
          maskImage: "url(" + lineSrc + ")",
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: "url(" + lineSrc + ")",
          WebkitMaskSize: "contain",
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
              overflow: "hidden",
            }}
          >
            <motion.img
              src={content.src}
              alt={`moving-content-${i}`}
              style={{
                width: content.size || "1800px",
                height: "auto",
                marginTop: content.marginTop || "0px",
                marginLeft: content.marginLeft || "0px",
                zIndex: content.zIndex || 1,
              }}
              animate={{
                translateY: [distance * 0.98, -distance * 0.958], 
                translateX: [-distance , distance], 
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
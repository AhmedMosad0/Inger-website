import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="w-full h-[100dvh] overflow-hidden">
      <Navbar />
      {isMobile ? (
        <div className="absolute top-16 left-0 w-full h-[calc(100dvh-4rem)] overflow-hidden">
          <Hero />
        </div>
      ) : (
        <Hero />
      )}
    </div>
  );
}

export default App;

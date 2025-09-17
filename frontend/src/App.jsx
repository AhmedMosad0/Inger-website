import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-[100dvh] overflow-hidden">
      <Navbar />
      <div className="absolute top-16 left-0 w-full h-[calc(100dvh-4rem)] overflow-hidden">
        <Hero />
      </div>
    </div>
  );
}

export default App;

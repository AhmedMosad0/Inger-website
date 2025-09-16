import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />

      {/* Add other sections below so scrolling works */}
      {/* <section className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>
          This is just a placeholder section so you can scroll down and see the
          effect of the hero banner above.
        </p>
      </section>

      <section className="p-10 bg-white">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <p>Another section to test scrolling and layout.</p>
      </section> */}
    </div>
  );
}

export default App;

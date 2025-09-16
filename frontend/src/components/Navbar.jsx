import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 🎨 Colors based on line image
  const mainPurple = "#5A3DFF";
  const hoverPurple = "#8C70FF";

  return (
    <nav
      className="fixed top-0 left-0 w-full text-white shadow-md z-50"
      style={{ backgroundColor: mainPurple }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo-2.png"
              alt="Logo"
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="transition" style={{ color: "white" }} onMouseOver={(e) => e.target.style.color = hoverPurple} onMouseOut={(e) => e.target.style.color = "white"}>Home</a>
            <a href="#about" className="transition" style={{ color: "white" }} onMouseOver={(e) => e.target.style.color = hoverPurple} onMouseOut={(e) => e.target.style.color = "white"}>About</a>
            <a href="#services" className="transition" style={{ color: "white" }} onMouseOver={(e) => e.target.style.color = hoverPurple} onMouseOut={(e) => e.target.style.color = "white"}>Services</a>
            <a href="#contact" className="transition" style={{ color: "white" }} onMouseOver={(e) => e.target.style.color = hoverPurple} onMouseOut={(e) => e.target.style.color = "white"}>Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 py-3 space-y-2" style={{ backgroundColor: mainPurple }}>
          <a href="#home" className="block" style={{ color: "white" }} onMouseOver={(e) => e.target.style.color = hoverPurple} onMouseOut={(e) => e.target.style.color = "white"}>Home</a>
          <a href="#about" className="block" style={{ color: "white" }} onMouseOver={(e) => e.target.style.color = hoverPurple} onMouseOut={(e) => e.target.style.color = "white"}>About</a>
          <a href="#services" className="block" style={{ color: "white" }} onMouseOver={(e) => e.target.style.color = hoverPurple} onMouseOut={(e) => e.target.style.color = "white"}>Services</a>
          <a href="#contact" className="block" style={{ color: "white" }} onMouseOver={(e) => e.target.style.color = hoverPurple} onMouseOut={(e) => e.target.style.color = "white"}>Contact</a>
        </div>
      )}
    </nav>
  );
}

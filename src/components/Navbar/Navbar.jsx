// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Detect scroll and change navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Smooth scroll function
//   const handleMenuItemClick = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsOpen(false);

//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "work", label: "Projects" },
//     { id: "education", label: "Education" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
//         isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="text-white py-5 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-lg font-semibold cursor-pointer">
//           <span className="text-[#8245ec]">&lt;</span>
//           <span className="text-white">Rajan</span>
//           <span className="text-[#8245ec]">/</span>
//           <span className="text-white">Prasad</span>
//           <span className="text-[#8245ec]">&gt;</span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-gray-300">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               className={`cursor-pointer hover:text-[#8245ec] ${
//                 activeSection === item.id ? "text-[#8245ec]" : ""
//               }`}
//             >
//               <button onClick={() => handleMenuItemClick(item.id)}>
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Social Icons */}
//         <div className="hidden md:flex space-x-4">
//           <a
//             href="https://github.com/Rajan875514"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec]"
//           >
//             <FaGithub size={24} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/rajan-prasad-7200b0248/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec]"
//           >
//             <FaLinkedin size={24} />
//           </a>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           {isOpen ? (
//             <FiX
//               className="text-3xl text-[#8245ec] cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             />
//           ) : (
//             <FiMenu
//               className="text-3xl text-[#8245ec] cursor-pointer"
//               onClick={() => setIsOpen(true)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu Items */}
//       {isOpen && (
//         <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
//           <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`cursor-pointer hover:text-white ${
//                   activeSection === item.id ? "text-[#8245ec]" : ""
//                 }`}
//               >
//                 <button onClick={() => handleMenuItemClick(item.id)}>
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//             <div className="flex space-x-4">
//               <a
//                 href="https://github.com/Rajan875514"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white"
//               >
//                 <FaGithub size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/rajan-prasad-7200b0248/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//             </div>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
















import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function and active section highlighting
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = menuItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for better active state

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          if (scrollPosition >= section.offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Call on mount to set initial active section
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false); // Close mobile menu on click

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-80 backdrop-blur-md shadow-xl" // Slightly higher opacity, stronger shadow
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center relative"> {/* Added relative for mobile menu positioning */}
        {/* Logo */}
        <div
          className="text-xl md:text-2xl font-bold cursor-pointer transition-all duration-200 hover:text-[#a074ec] transform hover:scale-105" // Bolder font, subtle color change on hover
          onClick={() => handleMenuItemClick("hero")} // Assuming your top section has id="hero"
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Rajan</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Prasad</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer relative group transition-colors duration-200 ${
                activeSection === item.id ? "text-[#8245ec]" : "hover:text-white" // Active color, hover to white
              }`}
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className="py-2 px-1 focus:outline-none relative z-10" // Added z-10 for button content
              >
                {item.label}
              </button>
              <span
                className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#8245ec] transform origin-left transition-transform duration-300 ${ // Thicker line, origin-left
                  activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100" // Always scaled for active, scales on hover
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Rajan875514"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile" // Added for accessibility
            className="text-gray-300 hover:text-[#8245ec] transition-transform duration-200 transform hover:scale-125" // Stronger scale on hover
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajan-prasad-7200b0248/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile" // Added for accessibility
            className="text-gray-300 hover:text-[#8245ec] transition-transform duration-200 transform hover:scale-125" // Stronger scale on hover
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50"> {/* Higher z-index for icon */}
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer animate-fade-in"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu" // Added for accessibility
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer animate-fade-in"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu" // Added for accessibility
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#050414] bg-opacity-90 backdrop-filter backdrop-blur-xl z-40 rounded-b-lg shadow-2xl md:hidden animate-slide-down-fade border-t border-gray-700"> {/* Full width, stronger blur/shadow, border-t */}
          <ul className="flex flex-col items-center space-y-6 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer text-lg font-medium transition-all duration-200 ${ // Larger font, medium weight
                  activeSection === item.id ? "text-[#8245ec] transform scale-105" : "hover:text-white" // Active scales up, hover to white
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)} className="focus:outline-none">
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-6 pt-6 border-t border-gray-700 w-4/5 justify-center mt-4"> {/* Increased padding, slightly narrower border width */}
              <a
                href="https://github.com/Rajan875514"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-gray-300 hover:text-white transition-transform duration-200 transform hover:scale-125"
              >
                <FaGithub size={28} /> {/* Slightly larger icons */}
              </a>
              <a
                href="https://www.linkedin.com/in/rajan-prasad-7200b0248/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-300 hover:text-white transition-transform duration-200 transform hover:scale-125"
              >
                <FaLinkedin size={28} /> {/* Slightly larger icons */}
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


   const navAnim  = () => {
      const tl = gsap.timeline()
  
      tl.from("nav", {
        y:-30,
        opacity:0,
        duration:1,
      })
      
      tl.from(".navTabs li", {
        y:-30,
        opacity:0,
        duration:0.5,
        stagger:0.2
      },"-=0.5")
    }
    
  
    useGSAP(() => {
      navAnim()
    })


  const navElement = [
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experiance" },
    { id: "projects", title: "Projects" },
    { id: "education", title: "Education" },
  ];

  useEffect(() => {
    setIsScrolled(window.scrollY > 50);
  });

  const handleNavLink = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      section.scroll()
    }
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`nav fixed top-0 z-50 backdrop-blur-2xl w-full text-white font-bold flex justify-around text-[13px] h-15 items-center`}
    >
      <div>
        <span className="text-[15px]">Aryan Dhirhi</span>
      </div>
      <div>
        <ul className="navTabs hidden md:flex gap-5 ">
          {navElement.map((item) => (
            <li
              onClick={() => handleNavLink(item.id)}
              className={`cursor-pointer hover:text-[#793542] ${
                activeSection === item.id ? "text-[#793542]" : null
              }`}
              key={item.id}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex space-x-8">
        <a
          href="https://github.com/ARYANDHIRHI004"
          target="_blank"
          className="hover:text-[#793542]"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/aryan-dhirhi-85734826b/"
          target="_blank"
          className="hover:text-[#793542]"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <div className="md:hidden justify-end">
        {isOpen ? <FiX onClick={closeMenu} /> : <FiMenu onClick={openMenu} />}
      </div>

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50">
          <ul className="bg-red-600 w-full">
            {navElement.map((item) => (
              <li
                onClick={() => handleNavLink(item.id)}
                className={`cursor-pointer hover:text-blue-400 ${
                  activeSection === item.id ? "text-blue-400" : null
                }`}
                key={item.id}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

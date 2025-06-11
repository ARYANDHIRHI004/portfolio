import React from "react";
import html from "../assets/tech_logo/html.png";
import css from "../assets/tech_logo/css.png";
import react from "../assets/tech_logo/reactjs.png";
import nodejs from "../assets/tech_logo/nodejs.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Logos = () => {
  gsap.registerPlugin(useGSAP);

  const logoAnim = () => {
    gsap.from(".html", { 
            y:" 9vw",
            x:"20vw", 
            opacity:0,
            delay:0.2,
            duration:0.7

        });

        gsap.from(".css", { 
            y:" 10vw", 
            x:"-20vw",
            opacity:0, 
            delay:0.2,
            duration:0.7

        });

        gsap.from(".react", { 
            y:" 10vw", 
            opacity:0, 
            delay:0.2,
            duration:0.7

        });

        gsap.from(".nodejs", { 
            y:"-10vw", 
            x:"2vw",
            opacity:0, 
            delay:0.2,
            duration:0.7

        });
  }
  

    useGSAP(() => {
        logoAnim()
    });

  return (
    <div className="w-50">
      <img className="html absolute top-40 left-50 w-30" src={html} alt="" />
      <img className=" css absolute top-30 left-250 w-30" src={css} alt="" />
      <img className=" react absolute top-20 left-150 w-30" src={react} alt="" />
      <img className=" nodejs absolute top-150 left-130 w-30" src={nodejs} alt="" />
    </div>
  );
};

export default Logos;

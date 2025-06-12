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
            opacity:0, 
            delay:0.2,
            duration:0.7
            
          });
          
          gsap.from(".react", { 
            y:" 10vw", 
            x:"-20vw",
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
      <img className="html absolute top-40 left-[10vw] xl:left-[10vw] w-[5vw]" src={html} alt="" />
      <img className=" css absolute top-30 left-[40vw] xl:left-[27vw] w-[5vw]" src={css} alt="" />
      <img className=" react absolute top-35 left-[80vw] xl:left-[45vw] w-[5vw]" src={react} alt="" />
      <img className=" nodejs absolute top-150 left-[18vw] xl:left-[27vw] w-[5vw]" src={nodejs} alt="" />
    </div>
  );
};

export default Logos;

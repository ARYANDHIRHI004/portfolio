import React from "react";
import { SkillsInfo } from "../../constents.js";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section id="skills" className="mt-20 bg-[linear-gradient(38.73deg,#8e1d29_0%,#0000_30%),linear-gradient(141.27deg,#050414_70%,#8e1d29_100%)] clip-path-custom pb-30 ">
      <div className="text-white font-bold text-center ">
        <h1 className="text-4xl ">SKILLS</h1>
        <div className="h-1 w-17 bg-[#8e1d29] m-auto"></div>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          fugit?
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-10  mx-10 md:w-[70vw]  md:m-auto flex-wrap ">
        {SkillsInfo.map((Skills) => (
          <Tilt
          
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={1000}
            
          >
            <div
              key={Skills.title}
              className="bg-gray-800 md:w-150 min-h-80 outline-2 outline-[#8e1d29] outline-offset-2  rounded-3xl mt-10 hover:drop-shadow-[0px_0px_30px_#8e1d29] hover:transition delay-100 "
            >
              <h2 className="text-center text-2xl pt-5 text-white">
                {Skills.title}
              </h2>
              <div className="flex gap-5 flex-wrap p-5 justify-center">
                {Skills.skills.map((skill) => (
                  <div className="flex justify-center items-center text-white bg-gray-500 px-5 pt-1 rounded-3xl gap-2 w-40">
                    <img className=" w-5 md:w-8" src={skill.logo} alt="" />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;

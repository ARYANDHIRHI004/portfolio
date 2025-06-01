import React from 'react'
import mypic4 from "../../assets/mypic4.jpg"
import Typed from 'typed.js';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Programmer', 'Backend Engineer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section id='about' className='pt-45 text-white flex flex-col-reverse gap-5 md:flex-row justify-around items-center w-[80vw] mx-auto '>
      <div className='text-4xl text-center sm:text-6xl  font-bold'>Hi, I am <span className='text-[#8e1d29]'> Aryan Dhirhi</span><div className='mt-5 mb-5'>and I am a Passionate</div> <span className='text-[#8e1d29]' ref={el} /></div>
      <div className='sm:w-120 '>
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <img className='rounded-full border-[#8e1d29] border-4  drop-shadow-[0px_0px_30px_#8e1d29]' src={mypic4} alt="" />
        </Tilt>
      </div>
    </section>
  )
}

export default About
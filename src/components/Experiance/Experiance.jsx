import React from 'react'
import { experiences } from '../../constents'

const Experiance = () => {
  return (
    <section id='experience'>
      <div className="text-white font-bold text-center ">
        <h1 className="text-4xl ">EXPERIANCE</h1>
        <div className="h-1 w-45 bg-[#8e1d29] m-auto"></div>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          fugit?
        </p>
      </div>
      <div className='flex items-center flex-col relative'>
        <div className='bg-white w-[80vw] h-1'></div>
        <div className=' sm:left-1/2 left-0 transform -translate-x-1/2 w-1 bg-white h-[100vh] text-white'></div>
        <div className='text-white absolute '>
          {
            experiences.map((experience, index)=>(
              <div
                key={experience.id}
                className={`  flex flex-col sm:flex-row items-center mb-16 ${index%2===0 ? "sm:justify-end ":"sm:justify-start"} text-2xl mt-20  `}
              >
                <div >
                    <img src={experience.img} className='w-50 object-cover rounded-full '/>
                </div>

              </div>
              
            ))
          }
        </div>
      </div>
      
    </section>
  )
}

export default Experiance
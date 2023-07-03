import React from 'react';
import Tools from './Tools';
const Skills = () => {
    
    return (
    <div className='md:flex'>
        <div className='md:w-6/12 mt-14'>
            <h3 className='mb-8 text-3xl text-center text-violet-900'>Skills</h3>
          <div className='grid grid-cols-3 gap-5 '>
            <button className='p-4 text-center border-2 border-green-600 rounded-full hover:animate-spin'>HTMl</button>
            <p className='p-4 text-center border-2 border-green-600 rounded-full hover:animate-spin'>CSS</p>
            <p className='p-4 text-center border-2 border-green-600 rounded-full hover:animate-spin'>Tailwind</p>
            <p className='p-4 text-center border-2 border-green-600 rounded-full hover:animate-spin'>Bootstrap</p>
            <p className='p-4 text-center border-2 border-green-600 rounded-full hover:animate-spin'>JavaScript</p>
            <p className='p-4 text-center border-2 border-green-600 rounded-full hover:animate-spin'>ReactJS</p>
            <p className='p-4 text-center border-2 border-green-600 rounded-full hover:animate-spin'>NodeJS</p>
            <p className='p-4 text-center border-2 border-green-600 rounded-full hover:animate-spin'>ExpressJS</p>
            <p className='p-4 text-center border-2 border-green-600 rounded-full hover:animate-spin'>MongoDB</p>
            <p className='p-4 text-center border-2 border-green-600 rounded-full hover:animate-spin'>Firebase</p>
         </div>
  </div>
  <div>
  <Tools></Tools>
  </div>
    </div>
               
    

    );
};

export default Skills; 
import React from 'react';
//import '/Banner.css';
//import { useSpring, animated } from '@react-spring/web'

const Banner = () => {
    
    return (
        <div className='grid w-full grid-cols-1 mx-auto md:grid-cols-2'>
            <div className='w-full mx-auto mt-24 '>
            {/* <div className="flex justify-end">
      <img
        className="inline-block max-w-full"
        src="https://miro.medium.com/max/700/0*FGD6BUzzZs1VJLuY.gif"
        alt="GIF"
      />
    </div> */}
  <h3 className='text-3xl'>HI, I am Mehedi Hasan. <br /> A frontend Developer</h3>
    
    <p>Self-taught programmer with proficiency in the MERN stack, solid understanding of JavaScript, HTML, and CSS, Tailwind.Committed to continuous learning and staying updated with industry trends. Skilled in creating responsive user interfaces and building RESTful APIs.</p>
    <div className='flex gap-10'> 
    <p>Linkedin</p>
    <p>github</p>
    <p>facebook </p>
    <p>twiteer</p>
    </div>
     <h3 className='btn btn-primary'> Get Resume</h3>
            </div>
            <div className='w-6/12 mx-auto mt-7'>
                <img className='mt-10 ' src="https://miro.medium.com/v2/resize:fit:1360/0*7Q3yvSIv_t0ioJ-Z.gif" alt="" />
            </div>
        </div>
    );
};

export default Banner;
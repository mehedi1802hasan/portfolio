import React from 'react';
import { Link } from 'react-router-dom';
const Myself = () => {
    return (
        <div className='mt-10'>
            {/* <h3 className='text-2xl text-orange-700'>Who am I?</h3> */}
            <div className='flex flex-wrap justify-center gap-28 md:flex-nowrap'>
                <div className='w-full md:w-1/2'>
                    <img src="https://i.ibb.co/PQJtS4M/352104323-780488737077625-6792931088336609684-n.jpg" alt="..." className="h-auto max-w-full mx-auto align-middle border-2 border-green-600 rounded-full shadow" />
                    <p className='mt-2 font-semibold text-center text-green-900'>Mehedi Hasan</p>
                    <div className='flex justify-center gap-5'>
                    <Link  target="_blank" to="https://wa.me/8801580324781"><img className='w-8 h-8 hover:animate-spin' src="https://i.ibb.co/SmHn3sg/download-5.jpg" alt="" /></Link>
                    <Link  target="_blank" to='https://www.linkedin.com/in/mehedi-hasan1802/'> <img className='h-9 w-9 hover:animate-spin' src="https://i.ibb.co/g90k4nh/145807.png" alt="" /></Link>
     <Link  target="_blank" to='https://github.com/mehedi1802hasan'>  <img className='w-8 h-8 hover:animate-spin' src="https://i.ibb.co/dMHqs5M/2111432.png" alt="" /></Link>
     <Link  target="_blank" to='mailto:mehedi1802hasan@gmail.com'>  <img className='w-8 h-8 hover:animate-spin' src="https://i.ibb.co/7KrrmKz/2913990.png" alt="" /></Link>
     <Link  target="_blank" to="https://wa.me/8801580324781"><img className='w-8 h-8 hover:animate-spin' src="https://i.ibb.co/YNR70DC/3670051.png" alt="" /></Link>
                    </div>
                    <h4 className='text-center text-green-600'>Contact me anytime. I'd love to hear from you.</h4>
                </div>
                <div className='w-full text-center md:w-1/2 mt-8'>
                    <p>I am an undergraduate student pursuing  BSS Course. I have expertise in Mern-Stack Technology. I am passionate about leveraging data-driven solutions to solve real-world problems and have a strong foundation in Mern-stack development. Additionally,I have experience building interactive web applications and creating intuitive user interfaces.I am a motivated problem solver who thrives in collaborative environments. Let's connect and explore opportunities to collaborate!</p>
                </div>
            </div>
        </div>
    );
};

export default Myself;
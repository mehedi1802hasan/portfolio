import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="items-center p-4 rounded-full footer bg-base-100 text-neutral-content">
  <div className="items-center grid-flow-col">
  <img class="w-16 h-14 -mr-4 rounded-full  " src="https://i.ibb.co/vY6ZXv6/352104323-780488737077625-6792931088336609684-n.jpg" alt="" />
    <p className='text-black '>Copyright © 2023 - All right reserved by Mehedi Hasan</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
     <Link  target="_blank" to='https://www.linkedin.com/in/mehedi-hasan1802/'> <img className='h-9 w-9 hover:animate-spin' src="https://i.ibb.co/g90k4nh/145807.png" alt="" /></Link>
     <Link  target="_blank" to='https://github.com/mehedi1802hasan'>  <img className='h-9 w-9 hover:animate-spin' src="https://i.ibb.co/dMHqs5M/2111432.png" alt="" /></Link>
     <Link  target="_blank" to='mailto:mehedi1802hasan@gmail.com'>  <img className='h-9 w-9 hover:animate-spin' src="https://i.ibb.co/7KrrmKz/2913990.png" alt="" /></Link>
     <Link  target="_blank" to="https://wa.me/8801580324781"><img className='h-9 w-9 hover:animate-spin' src="https://i.ibb.co/YNR70DC/3670051.png" alt="" /></Link>
  </div>
</footer>
    );
};

export default Footer;
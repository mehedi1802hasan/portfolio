import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
        <div className="navbar bg-base-100">
<div className="navbar-start">
 <div className="dropdown">
   <label tabIndex={0} className="btn btn-ghost lg:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </label>
   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    
     <li>
      
       <ul className="p-2">
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/project'>Project</Link></li>
        <li tabIndex={0}>
     <details>
       <summary>Contact</summary>
       <ul className="p-2">
         <li><a>Email</a></li>
         <li><a>LinkeDin</a></li>
         <li><a>Whatsapp</a></li>
         <li><a>Facebook</a></li>
       </ul>
     </details>
   </li>
       </ul>
     </li>
    
   </ul>
 </div>
 <img class="w-10 h-10 -mr-4 rounded-full  hover:animate-spin" src="https://i.ibb.co/vY6ZXv6/352104323-780488737077625-6792931088336609684-n.jpg" alt="" />
 <a className="text-xl normal-case btn btn-ghost">Mehedi</a>
</div>
<div className="hidden navbar-center lg:flex">
 <ul className="px-1 menu menu-horizontal">
 <li><Link to ='/'>Home</Link></li>
 <li><Link to ='/project'>Project</Link></li>
 
   <li tabIndex={0}>
     <details>
       <summary>Contact</summary>
       <ul className="p-2 ">
        <li> <Link  target="_blank" to='https://www.linkedin.com/in/mehedi-hasan1802/'> linkedin</Link></li>
    <li> <Link  target="_blank" to='https://github.com/mehedi1802hasan'> Github </Link></li>
    <li> <Link  target="_blank" to='mailto:mehedi1802hasan@gmail.com'> Email</Link></li>
<li>     <Link  target="_blank" to="https://wa.me/8801580324781">whatsapp</Link>
</li>       </ul>
     </details>
   </li>
   
 </ul>
</div>
<div className="navbar-end">
<Link target="_blank" to='https://drive.google.com/file/d/1seDWcGIkn6K7IJR1ryaAs5fI2esVgRu3/view '> <h3 className='flex items-center justify-center mt-4 border-2 border-black btn-sm btn '>  Resume</h3></Link>
</div>
</div>
     </div>
    );
};

export default Navbar;
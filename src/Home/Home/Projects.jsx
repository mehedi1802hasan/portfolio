import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div>
      <h3 className="mt-16 text-3xl font-bold text-center text-teal-900">Projects</h3>
      <p className="mt-2 font-bold text-center mb-7">Here is my Lattest Best Mern-stack Project</p>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
        <div>
          <div className="border-2 shadow-xl border-[#4c1d95] card md:w-96 bg-base-100">
            <figure>
              <div className="image-container">
                <img
                  className="scale-100 scrolling-image "
                  src="https://i.ibb.co/pKft7DG/sportcamp.jpg   "
                  alt="Shoes"
                />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-[#c026d3] card-title">
               SportCamp
                
              </h2>
              <p className='h-48 mb-16 md:mb-2'>SportCamp is a sport related course website .In this website user are 3 category.Like: Student ,Instructor and Admin..Instructors can provide some sport related courses
Student can access there choising class.they can access the class/course by successfully payment.and Admin can control this website.
</p>
              <div className=" card-actions">
                <div className="">
                  <div className='items-center justify-center gap-3 my-2 md:flex'>
                  <h4 className='flex' > <Link target='_blank' to='https://sportcamp-cf139.web.app/' className=' btn-sm btn btn-outline btn-primary'> Live website</Link> </h4>
                  <h4 className='flex' >  <Link target='_blank' to='https://github.com/mehedi1802hasan/SportCamp-client-12' className=' btn-sm btn btn-outline btn-primary'><span><img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" /></span> <span>client</span></Link></h4>
                    <h4 className='flex'><Link target='_blank' to='https://github.com/mehedi1802hasan/SportCamp-server-12' className=' btn-sm btn btn-outline btn-primary'><span><img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" /></span> server</Link></h4>
                      </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <p className='text-black border-black rounded-full btn-sm btn'>Tailwind</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>JavaScript</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>ReactJs</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>ExpressJs</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>Firebase</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>Stripe.Js</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>NodeJs</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>MOngodb</p>
                 
                  
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-2 border-[#4c1d95] shadow-xl card md:w-96 bg-base-100">
          <figure>
              <div className="image-container">
                <img
                  className="scale-100 scrolling-image "
                  src="https://i.ibb.co/LRNYgVm/learn-toyss.jpg"
                  alt="learntoy"
                />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-[#c026d3] card-title">
               LearnToys
               
              </h2>
              <p className='h-48 mb-16 md:mb-2'>LearnToys website have lot of exclusive features.Its like Toys Product related website.Owner can Add Product .every owener have diffrent dashboard.They can see their add toys and also update and delete their toys..</p>
              <div className=" card-actions">
                <div className="">
                <div className='items-center justify-center gap-3 my-2 md:flex'>
                <h4 className='flex' >   <Link target='_blank' to='https://learn-toys.web.app/' className=' btn-sm btn btn-outline btn-primary'> Live website</Link> </h4>
                <h4 className='flex' >   <Link target='_blank' to='https://github.com/mehedi1802hasan/Edukid-client-11' className=' btn-sm btn btn-outline btn-primary'><span><img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" /></span> Client</Link></h4>
                <h4 className='flex' >    <Link target='_blank' to='https://github.com/mehedi1802hasan/EduKid-server-11' className=' btn-sm btn btn-outline btn-primary'><span><img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" /></span>Server</Link></h4>
                      </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <p className='text-black border-black rounded-full btn-sm btn'>Tailwind</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>JavaScript</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>ReactJs</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>ExpressJs</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>Firebase</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>NodeJs</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>MOngodb</p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-2 border-[#4c1d95] shadow-xl card md:w-96 ">
          <figure>
              <div className=" image-container">
                <img
                  className="scale-100 scrolling-image"
                  src="https://i.ibb.co/9GBzMdx/kitcheass.jpg"
                  alt="Shoes"
                />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-[#c026d3] card-title">
                Italian Chef
            
              </h2>
              <p className='h-48 mb-16 md:mb-2'>Italian Chef is a Chef related website.There are lot of chef available in this website.Valied user can add new chef .Its a safe and secure website.i used Firebse authentication.Valied user can see every  chef details.valied user have diffrent dashboard.Each valied user can see their add chef list and update and delate also. </p>
              <div className=" card-actions">
                <div className="">
                <div className='items-center justify-center gap-3 my-2 md:flex'>
                <h4 className='flex' >  <Link target='_blank' to='https://italian-kichen-chef.web.app/' className=' btn-sm btn btn-outline btn-primary'> Live website</Link> </h4>
                <h4 className='flex ' >  <Link target='_blank' to='https://github.com/mehedi1802hasan/chef-recipe-hunter-client-side-10' className='btn-sm btn btn-outline btn-primary'><span><img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" /></span> Client</Link></h4>
                <h4 className='flex' >   <Link target='_blank' to='https://github.com/mehedi1802hasan/chef-recipe-hunter-server-10-side' className=' btn-sm btn btn-outline btn-primary'><span><img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" /></span> server</Link></h4>
                      </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <p className='text-black border-black rounded-full btn-sm btn'>Tailwind</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>JavaScript</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>ReactJs</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>ExpressJs</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>Firebase</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>NodeJs</p>
                  <p className='text-black border-black rounded-full btn-sm btn'>MOngodb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

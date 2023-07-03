
import React, { useState } from 'react';

const Contact = () => {
   
  const handleSend=(event)=>{
    event.preventDefault();    
    const form = event.target;
    const name=form.name.value;
    const email = form.email.value; 
    const message= form.message.value;
    
    console.log(email,name,message)
    const send={name,email,message}
   
}
   
    return (
        <div className="min-h-screen hero ">
        <div className="flex-col hero-content lg:flex-row">
          <div className="text-center lg:text-left">
           <img className='w-8/12' src="https://i.ibb.co/wCV4Zvs/76038-contact-mail-1.gif" alt="" />
          </div>
          <div className="flex-shrink-0 w-full max-w-sm ">
            <form onSubmit={handleSend} className="">
           <h3 className='my-5 text-3xl font-bold text-blue-700'>Contact Us</h3>
              <div className="form-control ">
                <label className="label">
                  <span className="font-semibold label-text ">Name</span>
                </label>
                <input name="name" type="text" placeholder="enter your name" className="border-sky-700 border-1 input"required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold label-text">Email</span>
                </label>
                <input name="email" type="text" placeholder="enter your email" className="border-sky-700 border-1 input "required />
                <label className="label">
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold label-text">message</span>
                </label>
                <input name='message' type="text" placeholder="enter your valueable message or feedback" className="w-full border-1 border-sky-700 input p-9" required/>
              </div>
              <div className="mt-6 form-control">
                <button className="btn hover:bg-purple-950 btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;
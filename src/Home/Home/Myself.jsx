import React from 'react';

const myself = () => {
    return (
        <div className='mt-14'>
            <h3 className='text-2xl text-orange-700'>Who AM i?</h3>
            <div className='flex items-center justify-center'>
                <div className='w-1/2'>
                <img src="https://i.ibb.co/PQJtS4M/352104323-780488737077625-6792931088336609684-n.jpg" alt="..." className="h-auto max-w-full mx-auto align-middle border-2 border-green-600 rounded-full shadow" />
                <p className='mt-2 text-center'>Mehedi Hasan</p>
                <div className='flex justify-center gap-5'><p>fb</p>linkedin<p>github</p>email<p>whatsapp</p></div>
          <h4 className='text-center text-blue-700'>Contact me anytime. I'd love to hear from you.
</h4>
                </div>
                <div className='w-1/2'>
                    <p>I am an undergraduate student pursuing a BSc in Computer Science with a specialization in Data Science. I have expertise in software engineering, particularly as a MERN web developer, Android developer, and React.js enthusiast. I am passionate about leveraging data-driven solutions to solve real-world problems and have a strong foundation in computer science fundamentals. I am skilled in extracting insights from complex datasets and applying machine learning algorithms. Additionally, I have experience building interactive web applications and creating intuitive user interfaces. I am a motivated problem solver who thrives in collaborative environments. Let's connect and explore opportunities to collaborate!</p>
                </div>
            </div>
            
        </div>
    );
};

export default myself;
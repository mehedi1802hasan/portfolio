import React from 'react';
//import '/Banner.css';
//import { useSpring, animated } from '@react-spring/web'

const Banner = () => {

  return (
    <div className='grid w-full grid-cols-1 md:grid-cols-2'>
           <div className='w-full mx-auto mt-9'>
               <h3 className='text-3xl'>HI, I am Mehedi Hasan . <br /> A frontend Developer</h3>
                   <p>Self-taught programmer with proficiency in the MERN stack, solid understanding of JavaScript, HTML, and CSS, Tailwind.Committed to continuous learning and staying updated with industry trends. Skilled in creating responsive user interfaces and building RESTful APIs.</p>
                    <h3 className='btn btn-primary'> Get Resume</h3>
          </div>
        <div className='w-9/12 mx-auto ' >
          <img src="https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966"  alt="" />
          {/* <img className='mt-10 ' src="https://miro.medium.com/v2/resize:fit:1360/0*7Q3yvSIv_t0ioJ-Z.gif" alt="" /> */}
        </div>
    </div>
  );
};

export default Banner;
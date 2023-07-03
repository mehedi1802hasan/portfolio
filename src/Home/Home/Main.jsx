import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const Main = () => {
    return (
       <div className='w-10/12 ml-7 md:ml-28'>
        <Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
       </div>
    );
};

export default Main;
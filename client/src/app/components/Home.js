import React from 'react';
import heroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';

const Home = () => {
 const { lang } = useSelector((state) => state.lang);
 return (
  <>
   {lang === 'english' ? (
    <div
     name='home'
     className='h-screen pt-80 pb-10 w-full bg-gradient-to-b from-black via-black to-gray-800'>
     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-1 md:flex-row'>
      <div className='flex flex-col justify-center h-full w-full text-center'>
       <h2 className='text-4xl sm:text-6xl font-bold text-white'>
        I'm a Full Stack Developer
       </h2>
       <h6 className='text-gray-500 py-4 px-4 max-w text-center'>
        I'm a graduated from Henry Bootcamp. I love to work on web application
        using technologies like React, Tailwind, MaterialUI, NodeJS with
        Express.js or Nest.js and PostgreSQL.
       </h6>
       <div className='mx-auto'>
        <Link
         to='portfolio'
         smooth
         duration={500}
         className='group text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-900 to-orange-700 cursor-pointer'>
         Portfolio
         <span className='group-hover:rotate-90 duration-300'>
          <MdOutlineKeyboardArrowRight
           size={25}
           className='ml-1'
          />
         </span>
        </Link>
       </div>
      </div>
      <div>
       <img
        src={heroImage}
        alt='my profile'
        className='rounded-2xl mx-auto w-4/6 md:w-4/6'
       />
      </div>
     </div>
    </div>
   ) : (
    // Spanish
    <div
     name='home'
     className='h-screen pt-80 pb-10 w-full bg-gradient-to-b from-black via-black to-gray-800'>
     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-1 md:flex-row'>
      <div className='flex flex-col justify-center h-full w-full text-center'>
       <h2 className='text-4xl sm:text-6xl font-bold text-white'>
        Soy un programador Full Stack
       </h2>
       <h6 className='text-gray-500 py-4 px-4 max-w text-center'>
        Me gradué del Bootcamp de programación de SoyHenry. Me encanta trabajar
        en aplicaciones web usando tecnologias como React, Tailwind, MaterialUI,
        NodeJS en junto con Express.js o Nest.js y PostgreSQL entre otras.
       </h6>
       <div className='mx-auto'>
        <Link
         to='portfolio'
         smooth
         duration={500}
         className='group text-white w-fit px-6 py-4 my-10 flex items-center rounded-md bg-gradient-to-r from-violet-900 to-orange-700 cursor-pointer'>
         Portafolio
         <span className='group-hover:rotate-90 duration-300'>
          <MdOutlineKeyboardArrowRight
           size={25}
           className='ml-1'
          />
         </span>
        </Link>
       </div>
      </div>
      <div>
       <img
        src={heroImage}
        alt='my profile'
        className='rounded-2xl mx-auto w-4/6 md:w-4/6'
       />
      </div>
     </div>
    </div>
   )}
  </>
 );
};

export default Home;

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
     className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-1 md:flex-row'>
      <div className='flex flex-col justify-center h-full'>
       <h2 className='text-4xl sm:text-6xl font-bold text-white'>
        I'm a Full Stack Developer
       </h2>
       <p className='text-gray-500 py-4 max-w-md'>
        I'm a graduated from Henry Bootcamp. I love to work on web application
        using technologies like React, Tailwind, NodeJS and PostgreSQL.
       </p>
       <div>
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
        className='rounded-2xl mx-auto w-4/6 md:w-3/5'
       />
      </div>
     </div>
    </div>
   ) : (
    // Spanish
    <div
     name='home'
     className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-1 md:flex-row'>
      <div className='flex flex-col justify-center h-full'>
       <h2 className='text-4xl sm:text-6xl font-bold text-white'>
        Soy un programador Full Stack
       </h2>
       <p className='text-gray-500 py-4 max-w-md'>
        Me gradué del Bootcamp de programación de SoyHenry. Me encanta trabajar
        en aplicaciones web usando tecnologias como React, Tailwind, NodeJS y
        PostgreSQL entre otras.
       </p>
       <div>
        <Link
         to='portfolio'
         smooth
         duration={500}
         className='group text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-900 to-orange-700 cursor-pointer'>
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
        className='rounded-2xl mx-auto w-4/6 md:w-3/5'
       />
      </div>
     </div>
    </div>
   )}
  </>
 );
};

export default Home;

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';

import english from '../assets/britishFlag.png';
import spanish from '../assets/spainFlag.png';
import { setLang } from '../store/slices/langSlice';

function NavBar() {
 const dispatch = useDispatch();
 const [nav, setNav] = useState(false);

 const { lang } = useSelector((state) => state.lang);

 const changeLang = () => {
  dispatch(setLang());

  // console.log(lang);
 };

 return (
  <>
   {lang === 'english' ? (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-50'>
     <div>
      <h1 className='font-signature text-5xl ml-4'>Pedrocaloi</h1>
     </div>

     <ul className='hidden md:flex mr-4'>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
       <Link
        to='home'
        smooth
        duration={500}>
        Home
       </Link>
      </li>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
       <Link
        to='about'
        smooth
        duration={500}>
        About
       </Link>
      </li>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
       <Link
        to='portfolio'
        smooth
        duration={500}>
        Portfolio
       </Link>
      </li>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
       <Link
        to='experience'
        smooth
        duration={500}>
        Experience
       </Link>
      </li>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
       <Link
        to='contact'
        smooth
        duration={500}>
        Contact
       </Link>
      </li>
      <li
       className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'
       onClick={changeLang}>
       {lang === 'english' ? (
        <img
         alt='eng'
         src={english}
         style={{ width: '37px', height: '23px' }}
        />
       ) : (
        <img
         alt='spa'
         src={spanish}
         style={{ width: '37px', height: '23px' }}
        />
       )}
      </li>
     </ul>
     <div
      onClick={() => setNav(!nav)}
      className='cursor-pointer pr-4 z-10 text-gray-400 transition duration-150 hover:text-gray-600 md:hidden'>
      {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
     </div>

     {nav && (
      <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 '>
       <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400'>
        <Link
         onClick={() => setNav(!nav)}
         to='home'
         smooth
         duration={500}>
         Home
        </Link>
       </li>
       <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400'>
        <Link
         onClick={() => setNav(!nav)}
         to='about'
         smooth
         duration={500}>
         About
        </Link>
       </li>
       <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400'>
        <Link
         onClick={() => setNav(!nav)}
         to='portfolio'
         smooth
         duration={500}>
         Portfolio
        </Link>
       </li>
       <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400'>
        <Link
         onClick={() => setNav(!nav)}
         to='experience'
         smooth
         duration={500}>
         Experience
        </Link>
       </li>
       <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400'>
        <Link
         onClick={() => setNav(!nav)}
         to='contact'
         smooth
         duration={500}>
         Contact
        </Link>
       </li>

       <li
        className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400'
        onClick={changeLang}>
        {lang === 'english' ? (
         <img
          alt='eng'
          src={english}
          style={{ width: '60px', height: '40px' }}
         />
        ) : (
         <img
          alt='spa'
          src={spanish}
          style={{ width: '60px', height: '40px' }}
         />
        )}
       </li>
      </ul>
     )}
    </div>
   ) : (
    // Spanish NavBar
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-50'>
     <div>
      <h1 className='font-signature text-5xl ml-4'>Pedrocaloi</h1>
     </div>

     <ul className='hidden md:flex mr-4'>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
       <Link
        to='home'
        smooth
        duration={500}>
        Home
       </Link>
      </li>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
       <Link
        to='about'
        smooth
        duration={500}>
        Sobre mí
       </Link>
      </li>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
       <Link
        to='portfolio'
        smooth
        duration={500}>
        Portafolio
       </Link>
      </li>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
       <Link
        to='experience'
        smooth
        duration={500}>
        Experiencia
       </Link>
      </li>
      <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
       <Link
        to='contact'
        smooth
        duration={500}>
        Contacto
       </Link>
      </li>
      <li
       className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'
       onClick={changeLang}>
       {lang === 'english' ? (
        <img
         alt='eng'
         src={english}
         style={{ width: '37px', height: '23px' }}
        />
       ) : (
        <img
         alt='spa'
         src={spanish}
         style={{ width: '37px', height: '23px' }}
        />
       )}
      </li>
     </ul>
     <div
      onClick={() => setNav(!nav)}
      className='cursor-pointer pr-4 z-10 text-gray-400 transition duration-150 hover:text-gray-600 md:hidden'>
      {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
     </div>

     {nav && (
      <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 '>
       <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400'>
        <Link
         onClick={() => setNav(!nav)}
         to='home'
         smooth
         duration={500}>
         Home
        </Link>
       </li>
       <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400'>
        <Link
         onClick={() => setNav(!nav)}
         to='about'
         smooth
         duration={500}>
         Sobre mí
        </Link>
       </li>
       <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400'>
        <Link
         onClick={() => setNav(!nav)}
         to='portfolio'
         smooth
         duration={500}>
         Portafolio
        </Link>
       </li>
       <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400'>
        <Link
         onClick={() => setNav(!nav)}
         to='experience'
         smooth
         duration={500}>
         Experiencia
        </Link>
       </li>
       <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400'>
        <Link
         onClick={() => setNav(!nav)}
         to='contact'
         smooth
         duration={500}>
         Contacto
        </Link>
       </li>

       <li
        className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-400'
        onClick={changeLang}>
        {lang === 'english' ? (
         <img
          alt='eng'
          src={english}
          style={{ width: '60px', height: '40px' }}
         />
        ) : (
         <img
          alt='spa'
          src={spanish}
          style={{ width: '60px', height: '40px' }}
         />
        )}
       </li>
      </ul>
     )}
    </div>
   )}
  </>
 );
}

export default NavBar;

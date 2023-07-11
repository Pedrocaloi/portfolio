import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import express from '../assets/express.png';
import node from '../assets/node.png';
import reactImage from '../assets/react.png';
import postgresql from '../assets/postgresql.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';
import { useSelector } from 'react-redux';

const Experience = () => {
 const { lang } = useSelector((state) => state.lang);

 const tech = [
  {
   id: 1,
   src: html,
   title: 'HTML',
   style: 'shadow-orange-500',
  },
  {
   id: 2,
   src: css,
   title: 'CSS',
   style: 'shadow-blue-700',
  },
  {
   id: 3,
   src: javascript,
   title: 'Javascript',
   style: 'shadow-yellow-600',
  },
  {
   id: 4,
   src: reactImage,
   title: 'React.js',
   style: 'shadow-sky-600',
  },
  {
   id: 5,
   src: node,
   title: 'Node.js',
   style: 'shadow-green-800',
  },
  {
   id: 6,
   src: express,
   title: 'Express.js',
   style: 'shadow-gray-300',
  },
  {
   id: 7,
   src: postgresql,
   title: 'PostgreSQL',
   style: 'shadow-blue-900',
  },
  {
   id: 8,
   src: tailwind,
   title: 'Tailwind',
   style: 'shadow-sky-400',
  },
  {
   id: 9,
   src: github,
   title: 'GitHub',
   style: 'shadow-gray-200',
  },
 ];

 return (
  <>
   {lang === 'english' ? (
    <div
     name='experience'
     className=' bg-gradient-to-b from-gray-800 to-black w-full md:h-screen'>
     <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
      <div>
       <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
        Experience
       </p>
       <p className='py-6'>These are the technologies I've worked with.</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
       {tech.map(({ id, src, title, style }) => (
        <div
         key={id}
         className={
          'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + style
         }>
         <img
          src={src}
          alt=''
          className='w-20 mx-auto'
         />
         <p className='mt-4'>{title}</p>
        </div>
       ))}
      </div>
     </div>
    </div>
   ) : (
    // Spanish
    <div
     name='experience'
     className=' bg-gradient-to-b from-gray-800 to-black w-full md:h-screen'>
     <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
      <div>
       <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
        Experiencia
       </p>
       <p className='py-6'>
        Estas son algunas de las tecnologias con las cuales trabajé.
       </p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
       {tech.map(({ id, src, title, style }) => (
        <div
         key={id}
         className={
          'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + style
         }>
         <img
          src={src}
          alt=''
          className='w-20 mx-auto'
         />
         <p className='mt-4'>{title}</p>
        </div>
       ))}
      </div>
     </div>
    </div>
   )}
  </>
 );
};

export default Experience;

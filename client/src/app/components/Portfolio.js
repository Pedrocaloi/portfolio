import React from 'react';
import NutriU from '../assets/portfolio/Screenshot_1.png';
import Videogames from '../assets/portfolio/Screenshot_2.png';
import RifasMX from '../assets/portfolio/Screenshot_4.png';
import Pixie from '../assets/portfolio/Screenshot_5.png';
import { useSelector } from 'react-redux';

const Portfolio = () => {
 const { lang } = useSelector((state) => state.lang);

 const portfolios = [
  {
   id: 1,
   name: 'Nutri-U Food App',
   src: NutriU,
   demo: 'https://nutriapp-beryl.vercel.app',
   code: 'https://github.com/facoogle/Nutri-APP',
  },
  {
   id: 2,
   name: 'Videogames Proyect',
   src: Videogames,
   demo: 'https://mrjuegoskapos.vercel.app',
   code: 'https://github.com/Pedrocaloi/MRjuegoskapos',
  },
  {
   id: 3,
   name: 'RifasMX',
   src: RifasMX,
   demo: '',
   code: 'https://github.com/Pedrocaloi/RifasMX',
  },
  {
   id: 4,
   name: 'Pixie',
   src: Pixie,
   demo: '',
   code: 'https://github.com/Pedrocaloi/Pixie',
  },
 ];

 return (
  <>
   {lang === 'english' ? (
    <div
     name='portfolio'
     className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-max'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
        Portfolio
       </p>
       <p className='py-6'>
        Check out some of my work here! if the demo doesn't work it's because of
        the API keys or the proyect is of a private enterprise.
       </p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
       {portfolios.map(({ id, src, demo, code, name }) => (
        <div>
         <h5 className='text-gray-400 py-4 max-w-md text-center'>{name}</h5>
         <div
          key={id}
          className='shadow-md shadow-gray-600 rounded-lg '>
          <img
           src={src}
           alt=''
           className='rounded-md duration-200 h-44 hover:scale-105'
          />
          <div className='flex items-center justify-center'>
           <a
            href={demo}
            target='_blank'
            rel='noreferrer'>
            <button className='w-1/2 px-10 py-4 m-4 duration-200 hover:scale-105'>
             Demo
            </button>
           </a>
           <a
            href={code}
            target='_blank'
            rel='noreferrer'>
            <button className='w-1/2 px-10 py-3 m-4 duration-200 hover:scale-105'>
             Code
            </button>
           </a>
          </div>
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>
   ) : (
    // Spanish Portfolio
    <div
     name='portfolio'
     className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-max'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
        Portafolio
       </p>
       <p className='py-6'>
        Mira algunos de mis trabajos aqui! Si la demo no funciona, seguramente
        es debido a las API keys o porque el proyecto de una empresa privada.
       </p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
       {portfolios.map(({ id, src, demo, code, name }) => (
        <div>
         <h5 className='text-gray-400 py-4 max-w-md text-center'>{name}</h5>
         <div
          key={id}
          className='shadow-md shadow-gray-600 rounded-lg'>
          <img
           src={src}
           alt=''
           className='rounded-md duration-200 h-44 hover:scale-105'
          />
          <div className='flex items-center justify-center'>
           <a
            href={demo}
            target='_blank'
            rel='noreferrer'>
            <button className='w-1/2 px-10 py-4 m-4 duration-200 hover:scale-105'>
             Demo
            </button>
           </a>
           <a
            href={code}
            target='_blank'
            rel='noreferrer'>
            <button className='w-1/2 px-10 py-3 m-4 duration-200 hover:scale-105'>
             Codigo
            </button>
           </a>
          </div>
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>
   )}
  </>
 );
};

export default Portfolio;

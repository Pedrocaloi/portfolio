import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Portfolio.css';

import portfolio from '../assets/portfolio/portfolio.js';

const Portfolio = () => {
 const { lang } = useSelector((state) => state.lang);
 const [modalInfo, setModalInfo] = useState(null);
 const [modalOpen, setModalOpen] = useState(false); // Estado para controlar si el modal está abierto o cerrado

 useEffect(() => {
  if (modalInfo) {
   document.documentElement.classList.add('overflow-hidden');
  } else {
   document.documentElement.classList.remove('overflow-hidden');
  }
 }, [modalInfo]);

 const handleCardDetail = (id) => {
  const project = portfolio.find((item) => item.id === id);
  setModalInfo(project);
  setModalOpen(true); // Abrir el modal al hacer clic en una tarjeta
 };

 const handleCloseModal = () => {
  // Agregar clase para la animación de cierre del modal-content
  document
   .querySelector('.modal-content')
   .classList.add('modal-content-scaleOut');
  // Agregar clase para la animación de cierre del modal-container
  document.querySelector('.modal-container').classList.add('modal-scaleOut');

  setModalOpen(false);
  setModalInfo(null);
  // Remover las clases de animación después de 300ms (misma duración que la transición CSS)
  document
   .querySelector('.modal-content')
   .classList.remove('modal-content-scaleOut');
  document.querySelector('.modal-container').classList.remove('modal-scaleOut');
 };

 return (
  <>
   {lang === 'english' ? (
    <div
     name='portfolio'
     className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-max'>
     {modalInfo && (
      <div
       className={`modal-container fixed inset-0 z-50 flex items-center justify-center ${
        modalOpen ? 'modal-scaleIn' : 'modal-scaleOut'
       }`}>
       <div
        className={`modal-bg-container fixed inset-0 bg-gray-800 bg-opacity-75 ${
         modalOpen ? 'bg-fadeIn ' : 'bg-fadeOut'
        }`}
        onClick={handleCloseModal}
       />
       <div className='modal-content overflow-y-auto inline-block align-middle bg-gray-900 rounded-lg text-left w-full h-full md:w-5/6 md:h-5/6 mx-auto md:my-4 lg:my-8 xl:my-12 overflow-hidden shadow-lx transform transition-all duration-200'>
        <div className='modal-wrapper px-10 pt-10 '>
         <div className='modal-wrapper-flex flex flex-col'>
          <button
           className='ml-auto mb-5 text-gray-400 transition duration-150 hover:text-gray-600'
           onClick={handleCloseModal}>
           <FaTimes
            size={30}
            style={{ cursor: 'pointer' }}
           />
          </button>
          <div className='modal-content2'>
           <h1 className='text-4xl mb-10 text-center underline font-semibold'>
            {modalInfo.name}
           </h1>
           <div className='w-full md:w-5/6 lg:w-3/4 xl:w-4/6 mx-auto'>
            <Slider
             autoplay
             pauseOnHover
             autoplaySpeed={2800}
             arrows // Muestra los botones de flecha para navegar entre las imágenes
             prevArrow={
              <div
               className='slick-prev'
               style={{ left: '-30px' }}
              />
             }
             nextArrow={
              <div
               className='slick-next'
               style={{ right: '-30px' }}
              />
             }>
             {modalInfo.images.map((imageUrl, index) => (
              <div key={index}>
               <img
                src={imageUrl}
                className='w-full h-64 md:h-80 lg:h-96 xl:h-auto object-contain'
                alt={`${index + 1}`}
               />
              </div>
             ))}
            </Slider>
           </div>
           <p className='mt-10 mb-10 text-justify text-base'>
            {modalInfo.descriptionEng}
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
     )}
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
        Portfolio
       </p>
       <p className='py-6'>
        Check out some of my work here! if the demo doesn't work it's because of
        the API keys or the proyect is of a private enterprise.
       </p>
       <p className='pb-6'>
        Click on the images to see more information about any of the projects!
       </p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-center'>
       {portfolio.map(({ id, src, demo, code, name }) => (
        <div
         key={id}
         className='max-w-md'>
         <h5 className='text-gray-400 py-4 max-w-md text-center'>{name}</h5>
         <div className='shadow-md shadow-gray-600 rounded-lg '>
          <img
           onClick={() => handleCardDetail(id)}
           src={src}
           alt=''
           className='rounded-md duration-200 h-44 w-full hover:scale-105 hover:cursor-pointer'
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
     {modalInfo && (
      <div
       className={`modal-container fixed inset-0 z-50 flex items-center justify-center ${
        modalOpen ? 'modal-scaleIn' : 'modal-scaleOut'
       }`}>
       <div
        className={`modal-bg-container fixed inset-0 bg-gray-800 bg-opacity-75 ${
         modalOpen ? 'bg-fadeIn ' : 'bg-fadeOut'
        }`}
        onClick={handleCloseModal}
       />
       <div className='modal-content overflow-y-auto inline-block align-middle bg-gray-900 rounded-lg text-left w-full h-full md:w-5/6 md:h-5/6 mx-auto md:my-4 lg:my-8 xl:my-12 overflow-hidden shadow-lx transform transition-all duration-200'>
        <div className='modal-wrapper px-10 pt-10 '>
         <div className='modal-wrapper-flex flex flex-col'>
          <button
           className='ml-auto mb-5 text-gray-400 transition duration-150 hover:text-gray-600'
           onClick={handleCloseModal}>
           <FaTimes
            size={30}
            style={{ cursor: 'pointer' }}
           />
          </button>
          <div className='modal-content2'>
           <h1 className='text-4xl mb-10 text-center underline font-semibold'>
            {modalInfo.name}
           </h1>
           <div className='w-full md:w-5/6 lg:w-3/4 xl:w-4/6 mx-auto'>
            <Slider
             autoplay
             pauseOnHover
             autoplaySpeed={2800}
             arrows // Muestra los botones de flecha para navegar entre las imágenes
             prevArrow={
              <div
               className='slick-prev'
               style={{ left: '-30px' }}
              />
             }
             nextArrow={
              <div
               className='slick-next'
               style={{ right: '-30px' }}
              />
             }>
             {modalInfo.images.map((imageUrl, index) => (
              <div key={index}>
               <img
                src={imageUrl}
                className='w-full h-64 md:h-80 lg:h-96 xl:h-auto object-contain'
                alt={`${index + 1}`}
               />
              </div>
             ))}
            </Slider>
           </div>
           <p className='mt-10 mb-10 text-justify text-base'>
            {modalInfo.descriptionEsp}
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
     )}
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
        Portafolio
       </p>
       <p className='py-6'>
        Mira algunos de mis trabajos aqui! Si la demo no funciona, seguramente
        es debido a las API keys o porque el proyecto de una empresa privada.
       </p>
       <p className='pb-6'>
        Clickee en las imagenes para ver información detallada acerca de los
        proyectos!
       </p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-center'>
       {portfolio.map(({ id, src, demo, code, name }) => (
        <div
         key={id}
         className='max-w-md'>
         <h5 className='text-gray-400 py-4 max-w-md text-center'>{name}</h5>
         <div className='shadow-md shadow-gray-600 rounded-lg'>
          <img
           onClick={() => handleCardDetail(id)}
           src={src}
           alt=''
           className='rounded-md duration-200 h-44 w-full hover:scale-105 hover:cursor-pointer'
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

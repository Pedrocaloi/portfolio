import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {
 const { lang } = useSelector((state) => state.lang);

 return (
  <>
   {lang === 'english' ? (
    <div
     name='contact'
     className='w-full h-screen bg-gradient-to-b from-black to bg-gray-800 p-4 text-white'>
     <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
      <div className='pb-8'>
       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
        Contact
       </p>
       <p className='py-6'>Submit the form below to get in touch with me.</p>
      </div>
      <div className='flex justify-center items-center'>
       <form
        action='https://getform.io/f/95323f16-ff69-43b3-a283-2650cc462006'
        method='POST'
        className=' flex flex-col w-full md:w-1/2'>
        <input
         type='text'
         name='name'
         placeholder='Enter your name'
         className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
        />
        <input
         type='email'
         name='email'
         placeholder='Enter your email'
         className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
        />
        <textarea
         name='message'
         rows='10'
         placeholder='Enter your message'
         className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
         style={{
          width: '100%',
          height: '20em',
          resize: 'none', // Evita el redimensionamiento vertical y horizontal
          overflow: 'auto', // Agrega una barra de desplazamiento si el contenido excede el tamaño del textarea
         }}
        />
        <button className='text-white bg-gradient-to-r from-violet-900 to-orange-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
         Submit
        </button>
       </form>
      </div>
     </div>
    </div>
   ) : (
    //Spanish
    <div
     name='contact'
     className='w-full h-screen bg-gradient-to-b from-black to bg-gray-800 p-4 text-white'>
     <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
      <div className='pb-8'>
       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
        Contáctame
       </p>
       <p className='py-6'>
        Completa el formulario para mantenerte en contacto conmigo.
       </p>
      </div>
      <div className='flex justify-center items-center'>
       <form
        action='https://getform.io/f/95323f16-ff69-43b3-a283-2650cc462006'
        method='POST'
        className=' flex flex-col w-full md:w-1/2'>
        <input
         type='text'
         name='name'
         placeholder='Ingresa tu nombre'
         className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
        />
        <input
         type='email'
         name='email'
         placeholder='Ingresa tu mail'
         className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
        />
        <textarea
         name='message'
         rows='10'
         placeholder='Ingresa tu mensaje'
         className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
         style={{
          width: '100%',
          height: '20em',
          resize: 'none', // Evita el redimensionamiento vertical y horizontal
          overflow: 'auto', // Agrega una barra de desplazamiento si el contenido excede el tamaño del textarea
         }}
        />
        <button className='text-white bg-gradient-to-r from-violet-900 to-orange-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
         Enviar
        </button>
       </form>
      </div>
     </div>
    </div>
   )}
  </>
 );
};

export default Contact;

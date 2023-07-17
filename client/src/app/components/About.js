import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
 const { lang } = useSelector((state) => state.lang);

 return (
  <>
   {lang === 'english' ? (
    <div
     name='about'
     className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
        About me
       </p>
      </div>
      <p className='text-xl mt-10'>
       I am a Full Stack Developer from Tucumán, Argentina. Graduated from Henry
       Bootcamp. Attentive, friendly and very predisposed to teamwork and great
       adaptability. I have experience in organization and conflict resolution.
      </p>
      <br />
      <p className='text-xl'>
       I'm a very proactive person who loves challenges, when I try to solve a
       part of a code basically I don't sleep until I solve it. I started in the
       world of programming at the beginning of 2022 and since then I haven't
       stopped studying and adding new knowledge to my tech stack.
      </p>
     </div>
    </div>
   ) : (
    // Spanish Portfolio
    <div
     name='about'
     className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
        Sobre mí
       </p>
      </div>
      <p className='text-xl mt-10'>
       Soy un programador Full Stack de Tucumán, Argentina. Graduado del
       bootcamp de programación de SoyHenry. Atento, amistoso y muy predispuesto
       al trabajo en equipo, con gran adaptabilidad. Tengo experiencia en la
       organizacion y resolucion de problemas.
      </p>
      <br />
      <p className='text-xl'>
       Soy una persona muy proactiva que ama los desafíos, cuando intento
       resolver alguna parte del codigo, basicamente no descanso hasta
       arreglarlo. Empecé en la programación al principio de 2022 y desde
       entonces no he parado de estudiar y añadir conocimientos y experiencia a
       mi stack de tecnologías.
      </p>
     </div>
    </div>
   )}
  </>
 );
};

export default About;

import React from 'react';
import Screenshot_1 from '../assets/portfolio/Screenshot_1.png';
import Screenshot_2 from '../assets/portfolio/Screenshot_2.png'

const Portfolio = () => {
  
    const portfolios = [
        {
            id: 1,
            name: 'Nutri-U Food App',
            src: Screenshot_1,
            demo: 'https://nutriapp-beryl.vercel.app',
            code: 'https://github.com/facoogle/Nutri-APP'

        },
        {
            id: 2,
            name: 'Videogames Proyect',
            src: Screenshot_2,
            demo: 'https://mrjuegoskapos.vercel.app',
            code: 'https://github.com/Pedrocaloi/MRjuegoskapos'
        }
    ]
  
    return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work here! if the demo doesn't work it's because of the API keys</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id, src, demo, code, name}) => (
                        <div>
                            <h5 className='text-gray-400 py-4 max-w-md text-center'>{name}</h5>
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                                <div className='flex items-center justify-center'>
                                    <a href={demo} target='_blank' rel='noreferrer'>
                                        <button className='w-1/2 px-10 py-4 m-4 duration-200 hover:scale-105' >
                                            Demo
                                        </button>
                                    </a>
                                    <a href={code} target='_blank' rel='noreferrer'>
                                        <button className='w-1/2 px-10 py-3 m-4 duration-200 hover:scale-105' >
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))  
                }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio
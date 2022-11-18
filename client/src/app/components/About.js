import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            I am a Full Stack Developer from Buenos Aires, Argentina. Graduated from
            Henry Bootcamp. Attentive, friendly, and very predisposed to teamwork and
            great adaptability. I have experience in organization and conflict resolution.
            </p>
            <br/>
            <p className='text-xl'>
            I'm a very proactive person who loves challenges, when I try to solve a part of a code basically I don't sleep until I solve it. I started in the world of programming at the beginning of 2022 and since then I haven't stopped studying and adding new knowledge to my tech stack.
            </p>
        </div>
    </div>
  )
}

export default About
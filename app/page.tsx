import React from 'react';
import Header from '@/components/header';
import { skills } from '@/consts';
import { Quote } from 'lucide-react';

import About from '@/app/about';
import Work from '@/app/work';
import Contact from '@/app/contact';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <About />
        
        <div id='skills' className='p-6 lg:px-8'>
          <div className='flex justify-center items-center text-center mb-2'>
            <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
            <h1 className="text-3xl font-bold w-[585px] md:w-[65%] lg:w-[50%]">Skills</h1>
            <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
          </div>

          <div className='flex justify-center items-center flex-wrap gap-3'>
            {skills.map((skill) => (
              <div key={skill.name} className='flex flex-col items-center justify-center p-3 w-36 h-40 bg-accent rounded-md'>
                <img src={skill.icon} alt={skill.name} className='h-16 w-16 mb-2' />
                <h2 className='text-lg font-semibold'>{skill.name}</h2>
              </div>
            ))}
          </div>
        </div>

        <Work />

        <Contact />

        <div id='about' className='flex justify-center items-center p-6 h-[284px] lg:px-8'>
          <div className='flex gap-0.5'>
            <Quote className='rotate-180 fill-primary' />
            <h3 className='text-5xl font-extrabold'>Thanks for scrolling</h3>
            <Quote className='fill-primary' />
          </div>
        </div>
      </main>

      <footer id="footer" className='flex justify-center items-center w-full h-[78px] bg-secondary'>
        <p>© 2024 Tyler Beadle</p>
      </footer>
    </>
  );
}
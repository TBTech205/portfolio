import React from 'react';
import Header from '@/components/header';
import { cv_link, skills } from '@/consts';
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

        <div id='about' className='p-6 lg:px-8'>
          <div className='flex justify-center items-center text-center mb-2'>
            <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
            <h1 className="text-3xl font-bold w-[585px] md:w-[65%] lg:w-[50%]">My resume</h1>
            <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
          </div>
          
          <div className='flex justify-center items-center gap-2 mt-6'>
            <a
              key={'resume link'}
              href={cv_link}
              target='_blank'
              className="flex items-center gap-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>
        
        <div id='skills' className='p-6 bg-secondary lg:px-8'>
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
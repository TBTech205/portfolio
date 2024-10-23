"use client";

import React from 'react';
import { work } from '@/consts';
import { cn } from '@/lib/utils';

export default function Work() {
  return (
    <div id='work' className='p-6 lg:px-8'>
      <div className='flex justify-center items-center text-center mb-2'>
        <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
        <h1 className="text-3xl font-bold w-[585px] md:w-[65%] lg:w-[50%]">My work</h1>
        <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
      </div>

      {/* Work */}
      {work.map((work) => (
        <div key={work.name} className={cn(
          'flex justify-center items-center gap-6 h-full w-full mb-6 last:mb-0',
          work.position === 1 ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'
        )}>
          <img 
            src={work.thumbnail}
            alt="Big image"
            className='h-auto lg:h-[254px]' 
          />
          <div className='w-full lg:w-96'>
            <div className='flex items-center gap-1 mb-2'>
              <img src={work.icon} alt={work.name} className='h-8 w-8' />
              <h2 className='text-2xl font-semibold'>{work.name}</h2>
            </div>
            
            <p className='mb-3'>{work.description}</p>

            <a 
              href={work.url} 
              className="flex items-center gap-2 rounded-md bg-blue-600 px-3.5 py-2.5 w-fit text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
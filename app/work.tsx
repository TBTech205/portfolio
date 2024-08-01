"use client";

import React from 'react';
import { work } from '@/consts';
import { cn } from '@/lib/utils';
import prismadb from '@/lib/prismadb';

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
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              onClick={() => {
                fetch('/api/linkClick', {
                  method: 'POST',
                  body: JSON.stringify({ url: work.url }),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });
              }}
            >
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
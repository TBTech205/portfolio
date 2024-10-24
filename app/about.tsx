"use client";

import React from 'react';
import { socials } from '@/consts';

export default function About() {

  return (
    <div id='about' className='p-6 bg-secondary lg:px-8'>
      <div className='flex justify-center items-center text-center mb-2'>
        <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
        <h1 className="text-3xl font-bold w-[585px] md:w-[65%] lg:w-[50%]">About me</h1>
        <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
      </div>

      <p>oh dear, what do I put here.</p>

      <div className='flex justify-center items-center gap-2 mt-6'>
        {socials.map((social) => (
          <a 
            key={social.name} 
            href={social.url} 
            className='p-2 border-2 border-solid border-white rounded-md'
          >
            <img src={social.icon} alt={social.name} className='h-7' />
          </a>
        ))}
      </div>
    </div>
  );
}
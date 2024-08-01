"use client";

import React from 'react';
import { socials } from '@/consts';
import { Mail } from 'lucide-react';
import prismadb from '@/lib/prismadb';

export default function Contact() {
  return (
    <div id='contact' className='p-6 bg-secondary lg:px-8'>
      <div className='flex justify-center items-center text-center mb-2'>
        <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
        <h1 className="text-3xl font-bold w-[585px] md:w-[65%] lg:w-[50%]">Contact me</h1>
        <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
      </div>

      <div className='flex justify-center items-center gap-2 mt-6'>
        {/* email */}
        <a href="mailto:tylebeadle658:gmail.com" className='flex items-center gap-2 p-2 bg-card border-2 border-solid border-white rounded-md'>
          <Mail size={32} />
          <span>tylerbeadle658@gmail.com</span>
        </a>

      </div>

      <div className='flex justify-center items-center gap-2 mt-6'>
        {socials.map((social) => (
          <a 
            key={social.name} 
            href={social.url} 
            className='p-2 border-2 border-solid border-white rounded-md'
            onClick={() => {
              fetch('/api/linkClick', {
                method: 'POST',
                body: JSON.stringify({ url: social.url }),
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            }}
          >
            <img src={social.icon} alt={social.name} className='h-7' />
          </a>
        ))}
      </div>
    </div>
  );
}
"use client";

import React from 'react';
import { skills } from '@/consts';

export default function Skills() {
  return (
    <div id='skills' className='p-6 bg-secondary lg:px-8'>
      <div className='flex justify-center items-center text-center mb-2'>
        <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
        <h1 className="text-3xl font-bold w-[585px] md:w-[65%] lg:w-[50%]">Skills</h1>
        <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
      </div>

      <div className='flex justify-center items-center flex-wrap gap-3'>
        {skills.map((skill) => (
          <div key={skill.name} className='flex flex-col items-center justify-center p-3 w-36 h-40 bg-background rounded-md'>
            <img src={skill.icon} alt={skill.name} className='h-16 w-16 mb-2' />
            <h2 className='text-lg font-semibold'>{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
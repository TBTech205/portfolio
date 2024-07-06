import React from 'react';
import Header from '@/components/header';
import { skills, socials, work } from '@/consts';
import { cn } from '@/lib/utils';
import { Mail, Quote } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div id='about' className='p-6 bg-secondary lg:px-8'>
          <div className='flex justify-center items-center text-center mb-2'>
            <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
            <h1 className="text-3xl font-bold w-[585px] md:w-[65%] lg:w-[50%]">About me</h1>
            <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolor quia quo a dolorem. Aut, consequuntur nesciunt asperiores quidem corrupti eligendi tempore dicta, repellendus nam ducimus minima distinctio enim aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ipsam at in voluptates! Fuga aperiam ut magnam autem, dolor excepturi pariatur debitis, vero ad consectetur nobis, expedita cumque dignissimos ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non veniam quas ex est nam, velit, exercitationem maxime expedita debitis, natus voluptatibus tenetur quod id eaque. Cumque laboriosam tempore accusamus.</p>

          <div className='flex justify-center items-center gap-2 mt-6'>
            {socials.map((social) => (
              <a key={social.name} href={social.url} className='p-2 border-2 border-solid border-white rounded-md'>
                <img src={social.icon} alt={social.name} className='h-7' />
              </a>
            ))}
          </div>
        </div>
        
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

        <div id='work' className='p-6 lg:px-8'>
          <div className='flex justify-center items-center text-center mb-2'>
            <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
            <h1 className="text-3xl font-bold w-[585px] md:w-[65%] lg:w-[50%]">My work</h1>
            <div className='border-t-4 border-solid border-indigo-600 w-full h-0'></div>
          </div>

          <div className=''>
            {/* Work */}
            {work.map((work) => (
              <div key={work.name} className={cn(
                'flex justify-center items-center gap-6 h-full w-full mb-6 last:mb-0',
                work.position === 1 ? 'flex-row' : 'flex-row-reverse'
              )}>
                <img 
                  src=""
                  alt="Big image"
                  className='h-[254px]' 
                />
                <div className='h-full w-96'>
                  <div className='flex items-center gap-1 mb-2'>
                    <img src={work.icon} alt={work.name} className='h-8 w-8' />
                    <h2 className='text-2xl font-semibold'>{work.name}</h2>
                  </div>
                  
                  <p className='mb-3'>{work.description}</p>

                  <a href={work.url} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">View</a>
                </div>
              </div>
            ))}
          </div>
        </div>


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
              <a key={social.name} href={social.url} className='p-2 border-2 border-solid border-white rounded-md'>
                <img src={social.icon} alt={social.name} className='h-7' />
              </a>
            ))}
          </div>
        </div>

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
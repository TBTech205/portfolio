"use client";

import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // loginClick();
  }, []);

  const loginClick = () => {
    fetch('/dev/verify', { method: 'POST' })
  };
  
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-3xl font-bold mb-3'>Devs eyes only</h1>

      <Button onClick={loginClick}>Log In</Button>
    </div>
  )
}
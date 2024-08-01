"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default async function Page() {
  const [links, setLinks] = useState(null);

  useEffect(() => {

    fetch('/api/links')
      .then((res) => res.json())
      .then((data) => setLinks(data));
  }, []);

  return (
    <div>
      <h1>Home</h1>

      <div>{JSON.stringify(links, null, 2)}</div>
    </div>
  )
}
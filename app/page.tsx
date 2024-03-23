"use client"

import React, { useEffect, useState } from 'react';
import ProgressBar from './_component/ProgressBar';

const Page = () => {
  const [value, setValue] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < 100) {
          return prevValue + 1;
        } else {
          clearInterval(intervalId); // Clear interval when progress reaches 100%
          setSuccess(true); // Trigger success state when progress completes
          return prevValue; // Return previous value
        }
      });
    }, 100);

    return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
  }, []);

  return (
    <div className='w-full h-screen flex flex-col gap-6 justify-center items-center bg-zinc-300'>
      <h2 className='font-semibold text-xl'>Progress Bar</h2>
      <ProgressBar value={value} onComplete={() => true}/> 
      <span>{success ? "Loading Complete" : "Loading..."}</span>
    </div>
  );
};

export default Page;

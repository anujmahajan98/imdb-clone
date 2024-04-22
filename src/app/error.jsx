'use client'

import React from 'react'
import { useEffect } from 'react'

export default function Error( {error, reset} ) {

    useEffect(() => {
        console.log(error);
    }, [error]);

  return (
    <div className='text-center text-red-500 mt-10 p-4 rounded-lg bg-red-100'>
        <h1>Something went wrong. Please try again after some time.</h1>
        {/* <button className='hover:text-amber-600' onClick={() => reset()}> Try again after some time</button> */}
    </div>
  )
}

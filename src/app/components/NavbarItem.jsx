'use client'

import Link from 'next/link'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'



export default function NavbarItem({title, param}) {
    const searchParam = useSearchParams();
    const genre = searchParam.get('genre');

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>
        <Link 
            className = {`hover:text-amber-600 font-semibold
            ${genre == param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 round-lg' : ''}`}
            href={`/?genre=${param}`}
            >{title}
        </Link>
    </div>
    </Suspense>
  )
}

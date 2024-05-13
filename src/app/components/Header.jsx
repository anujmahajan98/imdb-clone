'use client'

import React, { useState, useEffect } from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'
import {FaSearch} from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import useDebounce from './UseDebounce'

export default function Header() {

    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 500);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search)
        router.push(`/search/${search}`);
    }

    useEffect(() => {
        if (debouncedSearch) {
          router.push(`/search/${debouncedSearch}`);
        }
      }, [debouncedSearch]);
    

  return (
        <div className='flex justify-between items-center p-3 max-w-7xl mx-auto'>
            <div className='flex gap-10 items-center'>
                {/* <MenuItem title = 'Home' address = "/" Icon = {AiFillHome}/> */}
                <Link href={"/"} className='flex gap-1 items-center'>
                    <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
                    <span className='text-xl hidden sm:inline'>Clone</span>
                </Link>
                <MenuItem title = 'About' address = "/about" Icon = {BsFillInfoCircleFill}/>
            </div>

            <div className='flex items-center gap-10 light:bg-black'>
                <div className='flex justify-between items-center'>
                    <form className='bg-slate-200 dark:bg-slate-50 p-3 rounded-lg flex justify-between item-center'
                    onSubmit = {handleSubmit}>
                        <input type='text' placeholder='Search ...' 
                        className='bg-transparent focus:outline-none w-24 sm:w-64 dark:text-black'
                        value = {search}
                        onChange={(e) => setSearch(e.target.value)}/>
                        <button>
                            <FaSearch className="text-slate-700"></FaSearch>
                        </button>
                        
                    </form>  
                </div>
                <DarkModeToggle />
            </div>
        
    </div>
  )
}

import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex dark:bg-gray-500 bg-amber-100 p-5 lg:text-lg justify-center gap-6'>
        <NavbarItem title = "Trending" param = "fetchTrending" />
        <p className='ml-3 mr-3'>|</p>
        <NavbarItem title = "Top Rated" param = "fetchTopRated" />
    </div>
  )
}

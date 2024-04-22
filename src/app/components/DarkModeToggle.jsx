"use client"

import React from 'react'

import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function DarkModeToggle() {

    const{theme, setTheme, systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme

    const [isChecked, setIsChecked] = useState(currentTheme === 'light');

    useEffect(() => {
        // Load the dark mode state from local storage
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme !== null) {
          setIsChecked(savedTheme === 'true');
        }
      }, []);
    

    const toggleTheme = () => {
        setTheme(isChecked ? 'light' : 'dark');
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        localStorage.setItem('darkMode', newCheckedState.toString());
    };

    return (
        // <div>
        //     {currentTheme === 'dark' ? ( 
        //     <MdLightMode onClick={() => setTheme('light')} className='text-xl cursor-pointer hover:amber-text-500'/> 
        //     ) : ( 
        //     <MdDarkMode onClick={() => setTheme('dark')} className='text-xl cursor-pointer hover:amber-text-500'/>
        // )}
        // </div>
        <div className="relative">
            <input
                type="checkbox"
                id="darkModeToggle"
                className="hidden"
                checked={isChecked}
                onChange={toggleTheme}
            />
            <label htmlFor="darkModeToggle" className="cursor-pointer">
                <div className="w-12 h-7 bg-gray-400 rounded-full shadow-inner hover:text-amber-400">
                {/* <div className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transition-transform transform ${isChecked ? 'translate-x-4' : 'translate-x-0'}`}> */}
                    <div className={`absolute left-2 top-1.5 w-6 h-6 shadow transition-transform transform ${isChecked ? 'translate-x-4' : 'translate-x-0'}`}>
                    {/* {currentTheme === 'dark' ? <MdLightMode /> : <MdDarkMode />} */}
                    {isChecked ? <MdLightMode /> : <MdDarkMode />}
                    </div>
                </div>
            </label>
        </div>
    )
}

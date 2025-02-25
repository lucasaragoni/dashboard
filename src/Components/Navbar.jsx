import React from 'react'
import { TfiMenu } from "react-icons/tfi";
import { IoMdNotifications } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { BsTranslate } from "react-icons/bs";

import profile from '../assets/profile.jpg'


function Navbar() {
  return (
    <div className='w-full bg-stone-200 h-1/10 p-2 items-center'>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <TfiMenu className='text-lg'/>


          <input type="search" name="" id="" className='border-2 ml-6 w-2xl rounded p-2' />
        </div>

        <div className="flex items-center">
          <BsTranslate className='text-2xl mr-4 text-stone-900'/>

          <MdDarkMode className='text-2xl mr-4' />

          <IoMdNotifications className='text-2xl mr-4' />

          <img src={profile} alt="" className='rounded-full size-[50px] object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Navbar

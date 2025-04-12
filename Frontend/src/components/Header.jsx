import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/*-----------------Left Side------------- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight lg:leading-tight'>
                Book Appoinment <br />With Trusted Doctors
            </p>
            <div className='flex flex-col md:flex-row items-center gap-4 text-white text-sm '>
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br className='hidden sm:block'/>Eum, assumenda! Lorem ipsum dolor sit amet.</p>
            </div>
            <a className='flex items-center bg-white group rounded-full p-3 px-5 text-gray-600 gap-3 m-auto md:m-0' href="">
                Book appoinment <img src={assets.arrow_icon} className='group-hover:ml-1 duration-300' alt="" />
            </a>
        </div>

        {/*-----------------Right Side------------- */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div>
        <p className='text-center text-gray-500 pt-10 text-2xl'>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center my-10 gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] ' src={assets.contact_image} alt="" />
        <div className='flex flex-col gap-6 text-gray-500 items-start'>
          <b className='text-lg text-gray-600'>OUR OFFICE</b>
          <p>00000 Willms Station <br />
          Suite 000, Washington, USA</p>
          <p>Tel: (000) 000-0000 <br />Email: smarsathsara@gmail.com</p>
          <b className='text-lg text-gray-600'>CAREERS AT PRESCRIPTO</b>
          <p>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm text-gray-800'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
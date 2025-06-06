import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {

  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our list of trusted doctors schedule your appoinment hassel-free.</p>
        <div className='flex sm:justify-center overflow-scroll gap-4 pt-5 w-full'>
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)}  className='flex flex-col items-center cursor-pointer flex-shrink-0 group text-xs transition-all' key={index} to={`/doctors/${item.speciality}`}>
                    <img className='w-16 sm:w-24 mb-2 group-hover:translate-y-[-10px] duration-300' src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu
"use client"

import React from 'react'

interface Typeprops {
    Name: string,
    Age: number,
    RollNo: number,
    class: string
}

const Card = (props:Typeprops) => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-105 max-w-sm mx-auto my-6'>
        <h1 className='text-2xl font-extrabold text-white mb-2'>Name: {props.Name} </h1>
        <h1 className='text-xl text-gray-200 mb-2'>Age: {props.Age} </h1>
        <h1 className='text-xl text-gray-200'>RollNo: {props.RollNo}</h1>
        <h1 className='text-xl text-gray-200 mb-2'>Class: {props.class}</h1>
    </div>
   )
}

export default Card
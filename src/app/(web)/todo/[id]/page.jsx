"use client"
import Link from 'next/link';
import React, {useEffect, useState } from 'react'

function Page({params : {id}}) {

const [toDo, setToDo] = useState();

useEffect(()=>{
  const savedTodos = JSON.parse(localStorage.getItem("todo_list"))
  setToDo(savedTodos.filter(todo => todo.id === parseInt(id)))
},[])

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='absolute w-full h-screen z-1 bg-white opacity-[20%]'></div>
      <div className='z-10 bg-white'>
        <Link href={"/"} className='py-2 px-4 bg-white text-black font-bold rounded-md mb-4 inline-block'>Back</Link>
        <h1 className='text-xl font-bold mb-2'>{toDo?.[0].title}</h1>
        <p>{toDo?.[0].description}</p>
      </div>
    </div>
  )
}

export default Page

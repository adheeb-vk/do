"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function page() {

const [completedTodos, setCompletedTodos] = useState([])
const [toDos, setToDos] = useState([])

useEffect(()=>{
  const completed_todos = JSON.parse(localStorage.getItem("completed_list"))
  if(completed_todos){
    setCompletedTodos(completed_todos)
  }
  const savedTodos = JSON.parse(localStorage.getItem("todo_list"))
  if(savedTodos){
    setToDos(savedTodos)
  }
},[])

useEffect(()=>{
  if(toDos.length > 0){
    localStorage.setItem("todo_list", JSON.stringify(toDos))
  }
},[toDos])

useEffect(()=>{
  if(completedTodos.length > 0){
    localStorage.setItem("completed_list", JSON.stringify(completedTodos))
  }
},[completedTodos])

const deleteCompleted = (id) =>{
    setCompletedTodos(completedTodos.filter(todo => todo.id !== id))
}

const redo = (id) =>{
  let new_todo = completedTodos.filter(todo => todo.id === id)
  if(toDos.length > 0){
    setToDos([...toDos, new_todo?.[0]])
  }else{
    setToDos(new_todo)
  }

  if(completedTodos.length === 1){
    setCompletedTodos(completedTodos.filter(todo => todo.id !== id))
    localStorage.removeItem("completed_list")
  }else{
    setCompletedTodos(completedTodos.filter(todo => todo.id !== id))
  }
}

  return (
    <div className='px-12 py-8'>
      <Link href={"/"} className='py-2 px-4 font-bold bg-white inline-block mb-4 text-black rounded-lg'>Back</Link>
      <div className='w-full flex justify-center items-center p-8'>
        {completedTodos.length > 0 ?
        <ul className='w-[70%] flex flex-col items-center gap-2 mx-auto'>
          {completedTodos?.map((completedTodo)=>{
            return(
              <li className='w-full flex items-center justify-between mb-6 border p-2 border-solid border-white' key={completedTodo.id}>
                <div className='w-[80%] flex items-center gap-4 max-[1200px]:w-[80%] max-[700px]:w-[78%] max-[700px]:w-[70%] max-[425px]:w-[68%] max-[380px]:text-sm'>
                  <div>{completedTodo?.id}</div>
                  <p>{completedTodo?.title}</p>
                </div>
                <div className='flex items-center'>
                  <button className='mr-4' 
                  onClick={(e)=>{
                    e.preventDefault()
                    console.log(toDos)
                    redo(completedTodo.id)
                  }}
                  >
                    <Image
                    src={require('../../assets/icons/rotate-right-solid.svg')}
                    width={19}
                    height={19}
                    alt='check'
                    />
                  </button>
                  <button onClick={(e)=>{
                    e.preventDefault()
                    deleteCompleted(completedTodo.id)
                  }}
                  >
                    <Image
                    src={require('../../assets/icons/delete.svg')}
                    width={25}
                    height={25}
                    alt='delete'
                    />
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
        :
        <h1 className='text-center font-bold text-2xl'>No completed tasks.</h1>}
      </div>
    </div>
  )
}

export default page

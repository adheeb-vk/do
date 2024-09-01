"use client"
import React, { use } from 'react'
import { useState, useEffect} from 'react'
import Image from 'next/image'

function Todo() {

const [value, setValue] = useState("");
const [toDos, setToDos] = useState([]);
const [completedTodos, setCompletedTodos] = useState([])
const [description, setDescription] = useState("")

const [isNewTodo, setIsNewTodo] = useState(false)

useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem("todo_list"))
    const completed_todos = JSON.parse(localStorage.getItem("completed_list"))
    if(savedTodos){
        setToDos(savedTodos)
    }
    if(completed_todos){
        setCompletedTodos(completedTodos)
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

const removeToDo = (id) => {
    let editedtoDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(editedtoDos)
}

const addToDO = () =>{
    let newToDo = {
        id: toDos?.length + 1,
        title: value,
        description: description
    }
    setToDos([...toDos,newToDo])
}

const handleInput = (e) => {
    e.preventDefault()
    setValue(e.target.value)
}

const addToCompleted = (id) => {
    let new_completed_todo = toDos.filter(toDo => toDo.id === id)
    if(completedTodos.length > 0){
        setCompletedTodos([...completedTodos,new_completed_todo])
    }else{
        setCompletedTodos([new_completed_todo])
    }
    let editedtoDos = toDos.filter(toDo => toDo.id !== id)
    if(toDos.length === 1){
        setToDos(editedtoDos)
        localStorage.removeItem("todo_list")
    }else{
        setToDos(editedtoDos)
    }
}

const date = new Date();
const year = date.getFullYear();
const day = date.getDate();
const month = date.getMonth();

  return (
    <div className='w-full'>
      <div className='wrapper'>
        {/* <button className='py-3 px-4 bg-red-400' onClick={(e)=>{
            e.preventDefault()
            if(completedTodos.length > 0){
            console.log(completedTodos)
            }
        }}>test</button> */}
        <div className='w-[40%] max-[1280px]:w-[50%] max-[1080px]:w-[60%] max-[980px]:w-[70%] max-[580px]:w-[80%] max-[480px]:w-[90%] mx-[auto]'>
            <h1 className='text-center font-bold text-2xl mb-6'>Things to DO !</h1>
            <div className='mb-6'>
                <span>{`DATE: ${day}/${month}/${year}`}</span>
            </div>
            <button className={`${isNewTodo ? "bg-red-500" : "bg-green-700"} text-white py-2 px-4 text-black font-bold text-center rounded-md mb-2`} onClick={()=>{
                if(isNewTodo){
                    setIsNewTodo(false)
                }else{
                    setIsNewTodo(true)
                }
            }}>{isNewTodo ? "Back" : "Add New"}</button>
            {isNewTodo ? 
            <div className='flex flex-col bg-transparent border-2 border-solid rounded-md border-white py-2 px-2 mb-6'>
                <input value={value}
                    onChange={(e)=> {
                        handleInput(e)
                    }}
                    className='w-full bg-transparent text-white mb-2 border-2 rounded-md py-2 border-solid border-white outline-none font-semibold px-3' maxLength={40} placeholder='Enter Title' type='text'/>
                <textarea value={description}
                    onChange={(e)=> {
                        e.preventDefault()
                        setDescription(e.target.value)
                        console.log(description)
                    }}
                    className='w-full bg-transparent text-white border-2 rounded-md py-2 border-solid border-white mb-2 outline-none px-3' placeholder='Enter Description'/>
                <button type='submit' className='py-2 px-3 bg-white text-black font-bold rounded-md' onClick={(e)=>{
                    e.preventDefault()
                    if(value !== ""){
                        addToDO(e)
                        setValue("")
                        setDescription("")
                        setIsNewTodo(false)
                    }
                }}>Add</button>
            </div> :
            <div className='p-[30px]'>
                {toDos?.length === 0 ? 
                <h1 className='font-bold text-xl text-center max-[380px]:text-[18px] max-[345px]:text-[16px]'>
                    Create your new ToDo list
                </h1> :
                <>
                <ul>
                    {toDos?.map((toDo)=>{
                        return(
                        <li className='w-full flex items-center justify-between mb-6 border p-2 border-solid border-white' key={toDo.id}>
                            <div className='flex items-center gap-4 max-[800px]:w-[40%]'>
                                <div>{toDo.id}</div>
                                <p>{toDo.title}</p>
                            </div>
                            <div className='flex items-center'>
                                <button className='mr-4' 
                                onClick={(e)=>{
                                    e.preventDefault()
                                    addToCompleted(toDo.id)
                                }}
                                >
                                    <Image
                                    src={require('../../assets/icons/check.svg')}
                                    width={19}
                                    height={19}
                                    alt='check'
                                    />
                                </button>
                                <button onClick={(e)=>{
                                    e.preventDefault()
                                    window.localStorage.clear()
                                    removeToDo(toDo.id)
                                    }
                                    }>
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
                <button className='py-2 px-3 text-center text-black w-full bg-white rounded-md font-bold' onClick={()=>{
                    localStorage.removeItem("todo_list")
                    setToDos([])
                }}>Clear All</button>
                </>
                }   
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Todo

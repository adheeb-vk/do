"use client"
import React, { use } from 'react'
import { useState, useEffect} from 'react'
import Image from 'next/image'

function Todo() {

const [value, setValue] = useState("");

const [toDos, setToDos] = useState([]);
// useEffect(()=>{
//     const stored_data = window.localStorage.getItem("todo_list")
//     if(stored_data){
//         setLocalStorageToDos(stored_data)
//         console.log(stored_data)
//     }else{
//         window.localStorage.setItem("todo_list", [])
//         console.log(stored_data);
//     }
// },[])

// useEffect(()=>{
    
//     console.log(storedData)
// },[])

// useEffect(()=>{
//     if(storedData !== null){
//         if(storedData.length > 2){
//             let stored_data = JSON.parse(storedData)
//             // setToDos(stored_data)
//             if(toDos.length > 0){
//                 stored_data.push(toDos)
//                 localStorage.removeItem("todo_list")
//                 localStorage.setItem("todo_list", JSON.stringify(stored_data))
//             }
//         }else{
//             if(toDos.length > 0){
//                 console.log(toDos.length)
//                 localStorage.removeItem("todo_list")
//                 localStorage.setItem("todo_list", JSON.stringify(toDos))
//             }
//         }
//     }else{
//         window.localStorage.setItem("todo_list", JSON.stringify([]))
//         // console.log(storedData);
//     }
// },[toDos])

useEffect(()=>{
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

const removeToDo = (id) => {
    let editedtoDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(editedtoDos)
}

const addToDO = () =>{
    let newToDo = {
        id: toDos?.length + 1,
        title: value
    }
    setToDos([newToDo,...toDos])
}

const date = new Date();
const year = date.getFullYear();
const day = date.getDate();
const month = date.getMonth();

  return (
    <div className='w-full'>
      <div className='wrapper'>
        <div className='w-[40%] max-[1280px]:w-[50%] max-[1080px]:w-[60%] max-[980px]:w-[70%] max-[580px]:w-[80%] max-[480px]:w-[90%] mx-[auto]'>
            <h1 className='text-center font-bold text-2xl mb-6'>Things to DO !</h1>
            <div className='mb-6'>
                <span>{`DATE: ${day}/${month}/${year}`}</span>
            </div>
            <div className='flex bg-transparent border-2 border-solid rounded-md border-white py-2 px-2 mb-6'>
                <input value={value} onChange={(e)=> 
                    {e.preventDefault()
                    setValue(e.target.value)}} className='w-full bg-transparent outline-none font-semibold px-3' maxLength={40} placeholder='What to DO?' type='text'/>
                <button type='submit' className='py-2 px-3 bg-white text-black font-bold rounded-md' onClick={(e)=>{
                    e.preventDefault()
                    if(value !== ""){
                        addToDO(e)
                        setValue("")
                    }
                }}>Add</button>
            </div>
            <div className='p-[30px]'>
                {toDos?.length === 0 ? 
                <h1 className='font-bold text-xl text-center max-[380px]:px-[30px]'>
                    Create your new ToDo list
                </h1> :
                <ul>
                    {toDos?.map((toDo)=>{
                        return(
                        <li className='w-full flex items-center justify-between mb-6' key={toDo.id}>
                            <div className='flex items-center gap-4'>
                                <div className='w-5 h-5 rounded-xl bg-red-400 border-2 border-solid border-red-600'></div>
                                <p>{toDo.title}</p>
                            </div>
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
                        </li>
                        )
                    })}
                </ul>
                }   
            </div>
        </div>
      </div>
    </div>
  )
}

export default Todo

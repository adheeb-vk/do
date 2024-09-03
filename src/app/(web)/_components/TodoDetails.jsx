import React from 'react'

function TodoDetails({activeDescription, activeTitle, close}) {
  return (
    <div className='w-full h-full absolute flex items-center justify-center'>
        <div className='w-full z-10 h-full absolute bg-black opacity-[50%]'></div>
        <div className='z-[100] bg-white w-[90%] mx-auto px-4 py-6 rounded-md'>
            <button onClick={()=>{
                close()
            }} className='py-2 px-4 max-[380px]:text-sm bg-red-500 text-white font-bold rounded-md mb-4 inline-block'>Close</button>
            <h1 className='text-xl font-bold mb-2 text-black'>{activeTitle}</h1>
            <p className='text-black'>{activeDescription}</p>
        </div>
    </div>
  )
}

export default TodoDetails

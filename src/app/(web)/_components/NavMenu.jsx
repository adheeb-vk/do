"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NavMenu() {

const [isOpen, setOpen] = useState(false)

  return (
    <div>
        <button onClick={()=>{
            if(isOpen){
                setOpen(false)
            }else{
                setOpen(true)
            }
        }} className='hidden max-[560px]:block w-full max-[430px]:w-[90%]'>
        <Image
            src={require('../../assets/icons/menu-icon.svg')}
            width={25}
            height={25}
            alt='menu-icon'
        />
        </button>
        {isOpen ? <div className='p-3 bg-white w-max fixed h-max max-[560px]:block hidden right-10 rounded-md'>
            <ul>
                <li>
                    <Link href={"/completed"} className='inline-block text-black max-[380px]:text-sm'>Completed List</Link>
                </li>
            </ul>
        </div> : null}
    </div>
  )
}

export default NavMenu

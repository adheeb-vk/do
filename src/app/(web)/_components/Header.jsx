import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavMenu from './NavMenu'

function Header() {
  return (
    <header className='w-full py-6 px-[40px] max-[380px]:py-4 flex justify-between items-center bg-black'>
        <h1 className='max-[380px]:w-[16%] max-[330px]:w-[17%] max-[580px]:w-[14%]'>
            <Link href={'/'}>
                <Image 
                    src={'/logo.png'}
                    width={60}
                    height={60}
                    alt='logo'
                />
            </Link>
        </h1>
        <nav className='w-[60%] flex items-center text-right justify-end'>
          <NavMenu/>
          <Link href={"/completed"} className='max-[560px]:hidden py-[4px] px-[10px] rounded-md font-bold bg-white text-black max-[380px]:text-sm'>Completed Tasks</Link>
        </nav>
    </header>
  )
}

export default Header

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className='w-full py-8 px-[40px] max-[380px]:py-6 flex justify-between items-center'>
        <h1 className='max-[380px]:w-[20%]'>
            <Link href={'/'}>
                <Image 
                    src={'/logo.png'}
                    width={80}
                    height={80}
                    alt='logo'
                />
            </Link>
        </h1>
        <nav className=''>
          <Link href={"/completed"} className='max-[380px]:text-sm'>Completed Tasks</Link>
        </nav>
    </header>
  )
}

export default Header

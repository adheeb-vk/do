import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className='w-full py-8 px-[40px]'>
        <h1>
            <Link href={'/'}>
                <Image 
                    src={'/logo.png'}
                    width={80}
                    height={80}
                />
            </Link>
        </h1>
    </header>
  )
}

export default Header

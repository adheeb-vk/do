import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='flex items-center justify-center flex-col w-full h-screen'>
      <h1>
        <Image 
            src={'/logo.png'}
            width={200}
            height={200}
            alt='Logo'
            priority={true}
        />
      </h1>
      <p className='mt-6 font-bold text-2xl'>Stay Tuned for Demos</p>
    </div>
  )
}

export default page

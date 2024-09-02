import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='p-4'>
      <Link href={"/"} className='p-2 bg-white inline-block mb-4 text-black'>Back</Link>
      <h1>Completed List coming soon...</h1>
    </div>
  )
}

export default page

import React from 'react'
import Calendar from './Calendar'

export default function Home() {

  return (
    <section id='home' className='flex justify-center min-h-screen  items-center font-serif'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-7xl max-md:text-5xl max-sm:text-3xl text-center'>¡ Hi, I'm Elvio !</h1>
            <span className='text-3xl max-sm:text-xl text-center'>Developer Fullstack</span>
            <span className='text-xl text-center'>Contribution activity</span>
            <Calendar />
        </div>
    </section>
  )
}
<video src=""></video>
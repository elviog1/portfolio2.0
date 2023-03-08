import React from 'react'

export default function Certificate() {
  return (
    <section className='flex flex-col justify-center items-center min-h-screen gap-10'>
        <div className='w-full'>
            <h2 className='flex justify-center font-serif text-5xl pb-5 text-center'>Languages ​​& Certificates</h2>
            <div className='flex justify-around'>
                <div className='text-xl'>
                    <span>Spanish: </span>
                    <span>Native</span>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className='text-xl'>
                    <span>English: </span>
                    <span>Essential</span>
                    <p>⭐⭐</p>
                </div>
            </div>
        </div>
        <div>
            <div className='flex justify-center flex-wrap gap-4'>
                <img src='https://images.credly.com/size/340x340/images/9ab2bbf5-a5cd-4c36-9c5a-1ce7e0e0cd32/Insignia_MERN-20.png' alt='Certificado de ' className='w-60' />
                <img src='openbootcampJS.jpeg' alt='Certificado' className='w-80' />
                <img src='freecodecamp.jpeg' alt='Certificado' className='w-80' />
            </div>
        </div>
    </section>
  )
}

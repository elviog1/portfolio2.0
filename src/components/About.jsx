import React from 'react'

export default function About() {
  return (
    <section id='about' className='flex justify-center items-center min-h-screen '>
        <div className='w-full'>
            <h2 className='flex justify-center font-serif text-5xl pb-5'>About me</h2>
            <div className='flex justify-evenly w-full flex-wrap'>
                <img src='elvio-selfie.jpeg' alt='Picture Elvio' className='rounded-full w-52 overflow-hidden object-cover' />
                <div className=' max-w-xl text-center self-center'>
                    <span className='text-xl'>
                    I am a Frontend Developer, a programming Technician student at the University of Quilmes. I finished a bootcamp at MINDHUB where I learned to use the following technologies: Javascript, CSS, Bootstrap, React / React Native, Tailwind, Redux, Node.js, Express.js, MongoDB, Postman, REST API. We develop projects simulating a REAL work environment, implementing Agile SCRUM Methodologies.
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

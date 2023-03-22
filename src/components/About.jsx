import React from 'react'

export default function About() {
  return (
    <section id='about' className='flex justify-center items-center max-w-6xl mx-auto my-0 '>
        <div className='w-full'>
            <div className='flex justify-evenly w-full flex-wrap '>
                <img src='elvio-selfie.jpeg' alt='Picture Elvio' className='rounded-full w-64 overflow-hidden object-cover shadow' />
                <div className=' max-w-xl text-left self-center'>
                  <h2 className='flex  font-serif text-5xl pb-5'>About me</h2>
                  <span className='text-xl'>
                  I am a Frontend Developer, a programming Technician student at the University of Quilmes. I finished a bootcamp at MINDHUB where I learned to use the following technologies: Javascript, CSS, Bootstrap, React / React Native, Tailwind, Redux, Node.js, Express.js, MongoDB, Postman, REST API. We develop projects simulating a REAL work environment, implementing Agile SCRUM Methodologies.
                  </span>
                </div>
            </div>
        </div>
    </section>
  )
}

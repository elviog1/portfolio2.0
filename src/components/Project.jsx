import React from 'react'

export default function Project({project}) {
  return (
    <div className='flex flex-col max-w-sm text-center justify-between text-xl dark:bg-gray-300 dark:text-gray-900 rounded-xl hover:scale-105 duration-300 m-2 hover:shadow-xl'>
      <div>
        <span className='font-serif text-center font-bold'>{project.name}</span>
        <img src={project.picture} alt='picture project' className='h-44 w-full' />
      </div>
        <span className='font-serif '>{project.description}</span>
        <div className='flex justify-around  '>
            <a href={project.github} target="_blank" className='dark:bg-neutral-500 w-full rounded-bl-xl pb-1 hover:bg-neutral-700 hover:text-gray-200 hover:font-bold'>Code</a>
            <a href={project.url} target="_blank" className='dark:bg-neutral-500 w-full rounded-br-xl pb-1 hover:bg-neutral-700 hover:text-gray-200 hover:font-bold'>Deploy</a>  
        </div>
    </div>
  )
}

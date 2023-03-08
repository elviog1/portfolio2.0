import React from 'react'
import { DiHtml5 , DiCss3, DiNodejsSmall } from "react-icons/di";
import { SiRedux, SiJavascript, SiReact, SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiGithub } from "react-icons/si";
export default function Tecnology() {

  return (
    <section className='flex flex-col justify-center items-center min-h-screen gap-10'>
        <div className='w-full'>
            <span className='flex justify-center font-serif text-5xl pb-5 mb-5'>Technologies</span>
            <div className='flex flex-wrap justify-center gap-5'>

              <div className='flex flex-col overflow-hidden items-center group'>
                <DiHtml5 className='text-orange-600 duration-300 text-9xl relative group-hover:-translate-y-32' />
                <span className='relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-orange-600'>HTML</span>
              </div>

              <div className='flex flex-col overflow-hidden items-center group'>
                <DiCss3 className='text-blue-500 duration-300 text-9xl relative group-hover:-translate-y-32' />
                <span className='relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-blue-500'>CSS</span>
              </div>
              <div className='flex flex-col overflow-hidden items-center group'>
                <SiJavascript className='text-yellow-500 duration-300 text-9xl relative group-hover:-translate-y-32' />
                <span className='relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-yellow-500'>Javascript</span>
              </div>
              <div className='flex flex-col overflow-hidden items-center group'>
                <SiReact className='text-blue-800 duration-300 text-9xl relative group-hover:-translate-y-32' />
                <span className='relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-blue-800'>React</span>
              </div>
              <div className='flex flex-col overflow-hidden items-center group'>
                <SiReact className='text-blue-300 duration-300 text-9xl relative group-hover:-translate-y-32' />
                <span className='relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-blue-300'>React Native</span>
              </div>
              <div className='flex flex-col overflow-hidden items-center group'>
                <SiRedux className='text-violet-500 duration-300 text-9xl relative group-hover:-translate-y-32' />
                <span className='relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-violet-500'>Redux</span>
              </div>
              <div className='flex flex-col overflow-hidden items-center group'>
                <SiTailwindcss className='text-blue-300 duration-300 text-9xl relative group-hover:-translate-y-32' />
                <span className='relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-blue-300'>Tailwind</span>
              </div>
              <div className='flex flex-col overflow-hidden items-center group'>
                <SiExpress className='text-gray-600 duration-300 text-9xl relative group-hover:-translate-y-32' />
                <span className='relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-gray-600'>Express.js</span>
              </div>
              <div className='flex flex-col overflow-hidden items-center group'>
                <DiNodejsSmall className='text-green-400 duration-300 text-9xl relative group-hover:-translate-y-32' />
                <span className='relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-green-400'>Node.js</span>
              </div>
              <div className='flex flex-col overflow-hidden items-center group'>
                <SiMongodb className='text-green-700 duration-300 text-9xl relative group-hover:-translate-y-32' />
                <span className='relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-green-700'>MongoDB</span>
              </div>
              <div className='flex flex-col overflow-hidden items-center group'>
                <SiPostman className='text-orange-500 duration-300 text-9xl relative group-hover:-translate-y-32' />
                <span className='relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-orange-500'>Postman</span>
              </div>
              <div className='flex flex-col overflow-hidden items-center group'>
                <SiGithub className='text-gray-700 duration-300 text-9xl relative group-hover:-translate-y-32' />
                <span className='relative translate-y-8 group-hover:-translate-y-16 text-xl font-bold font-serif text-gray-700'>Github</span>
              </div>

            </div>
        </div>
    </section>
  )
}

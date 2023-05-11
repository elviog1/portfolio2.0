import React from 'react'
import { useTranslation } from 'react-i18next'
export default function About() {
  const {t} = useTranslation()
  return (
    <section id='about' className='flex justify-center items-center  px-4 '>
        <div className='w-full'>
            <div className='flex justify-evenly w-full flex-wrap '>
                <img src='elvio-selfie.jpeg' alt='Picture Elvio' className='rounded-full w-64 h-64 object-cover shadow' />
                <div className=' max-w-xl text-left self-center'>
                  <h2 className='flex  font-serif text-5xl pb-5'>{t("about-title")}</h2>
                  <span className='text-xl'>
                  {t("about-description")}
                  </span>
                </div>
            </div>
        </div>
    </section>
  )
}

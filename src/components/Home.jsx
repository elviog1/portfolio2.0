import React from 'react'
import Calendar from './Calendar'
import { useTranslation } from 'react-i18next'
export default function Home() {
  const {t} = useTranslation()

  return (
    <section id='home' className='flex justify-center my-20  items-center font-serif'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-7xl max-md:text-5xl max-sm:text-3xl text-center'>{t("hello")}</h1>
            <span className='text-3xl max-sm:text-xl text-center'>{t("developer")}</span>
            <span className='text-xl text-center'>{t("contribution")}</span>
            <Calendar />
        </div>
    </section>
  )
}
import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Certificate() {
  const {t} = useTranslation()

  return (
    <section className='flex flex-col justify-center items-center min-h-screen gap-10 max-w-6xl mx-auto my-0'>
        <div className='w-full'>
            <h2 className='flex justify-center font-serif text-5xl pb-5 mb-5 text-center'>{t("certificates-title")}</h2>
            <div className='flex justify-around'>
                <div className='text-xl'>
                    <span>{t("certificates-es")}</span>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className='text-xl'>
                    <span>{t("certificates-en")}</span>
                    <p>⭐⭐</p>
                </div>
            </div>
        </div>
        <div>
            <div className='flex justify-center flex-wrap gap-4'>
                <a target='_blank' href='https://www.credly.com/badges/b95e81c0-105e-4baa-a0e3-93ec593ceb7a/linked_in_profile'>
                    <img src='https://images.credly.com/size/340x340/images/9ab2bbf5-a5cd-4c36-9c5a-1ce7e0e0cd32/Insignia_MERN-20.png' alt='Certificado de Mindhub' className='w-60 shadow-2xl' />
                </a>
                <a target='_blank'>
                    <img src='openbootcampJS.jpeg' alt='Certificado de JS' className='w-80 shadow-2xl' />
                </a>
                <a target='_blank' href='https://www.freecodecamp.org/certification/Elviog1/javascript-algorithms-and-data-structures'>
                    <img src='freecodecamp.jpeg' alt='Certificado de JS' className='w-80 shadow-2xl' />
                </a>
                <a target='_blank' href='https://storage.googleapis.com/openvitae-prod/diplomas%2F2907393f-6c9a-4568-9e78-c9f3b06a47f9.pdf'>
                    <img src='openbootcamp-sql.jpeg' alt='Certificado de SQL' className='w-80 shadow-2xl' />
                </a>
            </div>
        </div>
    </section>
  )
}

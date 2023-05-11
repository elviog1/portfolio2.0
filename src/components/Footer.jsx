import React from 'react'
import { useTranslation } from 'react-i18next';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillYoutube,AiOutlineWhatsApp } from "react-icons/ai";
import { BsRocket } from "react-icons/bs";
export default function Footer() {
    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    const {t} = useTranslation()
  return (
    <footer className='flex flex-col items-center text-4xl mb-5  gap-3  '>
        <div className=''>
            <a href='Elvio_Galeano(Developer).pdf'  target="_blank" rel="noopener noreferrer" download="Elvio_Galeano.pdf" className='text-2xl font-bold font-serif duration-200 hover:text-orange-400' >{t("footer-cv")}</a>
        </div>
        <div className='flex gap-2 flex-wrap '>
            <a target='_blank' className='hover:animate-pulse duration-200 hover:text-gray-600' href='https://github.com/elviog1' ><AiFillGithub /></a>
            <a target='_blank' className='hover:animate-pulse duration-500 hover:text-rose-600' href='https://instagram.com/pochuchui' ><AiFillInstagram /></a>
            <a target='_blank' className='hover:animate-pulse duration-200 hover:text-blue-500' href='mailto: elvio.galeano827@gmail.com' ><AiFillMail /></a>
            <a target='_blank' className='hover:animate-pulse duration-200 hover:text-red-600' href='https://www.youtube.com/channel/UC7UHsR2jNrMieWknwVJvP7Q'   ><AiFillYoutube /></a>
            <a target='_blank' className='hover:animate-pulse duration-200 hover:text-blue-600' href='https://www.linkedin.com/in/elviogaleano-fullstack-developer/'  ><AiFillLinkedin /></a>
            <a target='_blank' className='hover:animate-pulse duration-200 hover:text-green-600' href='https://wa.me/+5491153761167' ><AiOutlineWhatsApp /></a>
        </div>
        <div onClick={scrollToTop} className='px-5'>
            <BsRocket className='cursor-pointer animate-bounce duration-200 hover:text-orange-400' />
        </div>
    </footer>
  )
}

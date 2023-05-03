import React from 'react'
import { useTranslation } from 'react-i18next'
import Project from './Project'
export default function Works() {
    const projects = [
        {name:"Login App",description:"projects-description1", picture:"login-app.jpeg",url:"https://loggin-app.vercel.app/",github:"https://github.com/elviog1/loggin-app"},
        {name: "Pizzeria", description: "projects-description2", picture: "pizzeria1.jpeg",  url: "https://pizzeria-solano.vercel.app/", github: "https://github.com/elviog1/id-pizza" },
        {name: "Memory Game", description: "projects-description3", picture: "braille-traductor.jpeg", url:"https://memory-fruit-game.netlify.app/", github:"https://github.com/elviog1/game-memory"},
        {name: "Braille Traductor", description: "projects-description8", picture: "game1.jpeg", url:"https://braille-traductor.vercel.app/", github:"https://github.com/elviog1/braille-traductor"},
        {name: "Youtu-Channels", description: "projects-description7", picture: "youtu-channels.jpeg", url:"https://youtu-channels.vercel.app/", github:"https://github.com/elviog1/youtu-channels"},
        {name:"Rifa Online", description:"projects-description4", picture:"rifa2.jpeg", url:"https://rifa-ten.vercel.app/", github:"https://github.com/elviog1/rifa-front"},
        {name:"Futbol Ciego Avellaneda", description: "projects-description5", picture:"futbolciego1.jpeg", url:"https://futbolciegoavellaneda.vercel.app/", github:"https://github.com/elviog1/piranias"},
        {name:"Amazing Events",description:"projects-description6", picture:"amazingEvents1.jpeg",url:"https://amazing-e.vercel.app/",github:"https://github.com/elviog1/amazing-events-front"}
    ]
  const {t} = useTranslation()

  return (
    <section id='projects' className='flex justify-center items-center min-h-screen max-w-6xl mx-auto my-0'>
        <div className='w-full'>
            <span className='flex justify-center font-serif text-5xl pb-5'>{t("projects-title")}</span>
            <div className='flex flex-wrap gap-5 justify-center'>
                {projects.map((project,index) =>(
                    <Project key={index} project={project} />
                ))}
            </div>
        </div>
    </section>
  )
}

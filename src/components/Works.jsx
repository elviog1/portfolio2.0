import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Project from './Project'
export default function Works() {
    const projects = [
        {name:"Free Figma Templates (Clone)",description:"projects-description10", picture:"freefigmatemplates.jpeg",url:"https://freefigmatemplates-clone.netlify.app/",github:"https://github.com/elviog1/freeFigmaTemplates-clone"},
        {name:"Shooting",description:"projects-description9", picture:"Shooting.jpeg",url:"https://game-shooting.vercel.app/",github:"https://github.com/elviog1/game-shooting"},
        {name:"Login App",description:"projects-description1", picture:"login-app.jpeg",url:"https://loggin-app.vercel.app/",github:"https://github.com/elviog1/loggin-app"},
        {name: "Pizzeria", description: "projects-description2", picture: "pizzeria1.jpeg",  url: "https://pizzeria-solano.vercel.app/", github: "https://github.com/elviog1/id-pizza" },
        {name: "Memory Game", description: "projects-description3", picture: "game1.jpeg", url:"https://memory-fruit-game.netlify.app/", github:"https://github.com/elviog1/game-memory"},
        {name: "Braille Traductor", description: "projects-description8", picture: "braille-traductor.jpeg", url:"https://braille-traductor.vercel.app/", github:"https://github.com/elviog1/braille-traductor"},
        {name: "Youtu-Channels", description: "projects-description7", picture: "youtu-channels.jpeg", url:"https://youtu-channels.vercel.app/", github:"https://github.com/elviog1/youtu-channels"},
        {name:"Rifa Online", description:"projects-description4", picture:"rifa2.jpeg", url:"https://rifa-ten.vercel.app/", github:"https://github.com/elviog1/rifa-front"},
        {name:"Futbol Ciego Avellaneda", description: "projects-description5", picture:"futbolciego1.jpeg", url:"https://futbolciegoavellaneda.vercel.app/", github:"https://github.com/elviog1/piranias"},
        {name:"Amazing Events",description:"projects-description6", picture:"amazingEvents1.jpeg",url:"https://amazing-e.vercel.app/",github:"https://github.com/elviog1/amazing-events-front"}
    ]
  const {t} = useTranslation()

  const noticiasPorSeccion = 6; // Define el número de noticias por sección

  const [seccionActual, setSeccionActual] = useState(1);

  const totalSecciones = Math.ceil(projects.length / noticiasPorSeccion); // cantidad de noticias dividido noticias secciones

  const cambiarSeccion = (seccion) => {
    setSeccionActual(seccion);
  };
  const startIndex = (seccionActual - 1) * noticiasPorSeccion;
  const endIndex = startIndex + noticiasPorSeccion;
  const noticiasSeccion = projects.slice(startIndex, endIndex);

  return (
    <section id='projects' className='flex justify-center items-center  max-w-7xl mx-auto '>
        <div className='w-full'>
            <span className='flex justify-center font-serif text-5xl pb-5'>{t("projects-title")} - {projects.length}</span>
            <div className='flex flex-wrap gap-5 justify-center'>
                {noticiasSeccion.map((project,index) =>(
                    <Project key={index} project={project} noticiasPorSeccion={noticiasPorSeccion}
                    seccionActual={seccionActual} />
                ))}
            </div>
            <div className='flex justify-center'>
            {Array.from({ length: totalSecciones }, (_, index) => (
                <button
                key={index + 1}
                onClick={() => cambiarSeccion(index + 1)}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-2xl font-bold my-5"
                >
                  {index + 1}
                </button>
              ))}
            </div>
        </div>
    </section>
  )
}

import React from 'react'
import Project from './Project'

export default function Works() {
    const projects = [
        {name:"Login App",description:"Small application through a registration form you can enter a tab where you can leave a comment for the community.", picture:"login-app.jpeg",url:"https://loggin-app.vercel.app/",github:"https://github.com/elviog1/loggin-app"},
        {name: "Pizzeria", description: "Personal project where I carry out an ecommerce where you can buy, withdraw and edit the quantities of the product and as an administrator you get a table with the user's order to make.", picture: "pizzeria1.jpeg",  url: "https://pizzeria-solano.vercel.app/", github: "https://github.com/elviog1/id-pizza" },
        {name: "Memory Game", description: "Game in which you will have to find two identical cards until there are no cards left upside down.", picture: "game1.jpeg", url:"https://memory-fruit-game.netlify.app/", github:"https://github.com/elviog1/game-memory"},
        {name:"Rifa Online", description:"Small application of a raffle in which by entering a name a board will be displayed with the available numbers, once the number is saved the option to pay with MercadoPago will be enabled and once the raffle time is over, no more numbers can be purchased.", picture:"rifa2.jpeg", url:"https://rifa-ten.vercel.app/", github:"https://github.com/elviog1/rifa-front"},
        {name:"Futbol Ciego Avellaneda", description: "Project of a football team for the blind, where the players are shown with their personal description, a contact tab, club information and as an administrator you can create and edit players.", picture:"futbolciego1.jpeg", url:"https://futbolciegoavellaneda.vercel.app/", github:"https://github.com/elviog1/piranias"},
        {name:"Amazing Events",description:"MindHub project where different types of events are rendered. It has a search engine that shows the events found, each one has its detail and there is a section of the statistics of the events.", picture:"amazingEvents1.jpeg",url:"https://amazing-e.vercel.app/",github:"https://github.com/elviog1/amazing-events-front"}
    ]
  return (
    <section id='projects' className='flex justify-center items-center min-h-screen max-w-6xl mx-auto my-0'>
        <div className='w-full'>
            <span className='flex justify-center font-serif text-5xl pb-5'>Projects</span>
            <div className='flex flex-wrap gap-5 justify-center'>
                {projects.map((project,index) =>(
                    <Project key={index} project={project} />
                ))}
            </div>
        </div>
    </section>
  )
}

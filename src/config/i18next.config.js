import i18n from 'i18next'
import { initReactI18next} from 'react-i18next'
const userLang = navigator.language.substring(0,2)

i18n
    .use(initReactI18next)
    .init({
    interpolation:{
        escaleValue: false
    },
    lng: userLang,
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                //home
                "hello": "¡ Hi, I'm Elvio !",
                "developer": "Developer Fullstack",
                "contribution": "Contribution activity",
                //header
                "home": "Home",
                "about": "About Me",
                "projects": "Projects",
                "contact": "Contact",
                //about me
                "about-title": "About me",
                "about-description": "I am a Frontend Developer, a programming Technician student at the University of Quilmes. I finished a bootcamp at MINDHUB where I learned to use the following technologies: Javascript, CSS, Bootstrap, React / React Native, Tailwind, Redux, Node.js, Express.js, MongoDB, Postman, REST API. We develop projects simulating a REAL work environment, implementing Agile SCRUM Methodologies.",
                //certificate
                "certificates-title": "Languages ​​& Certificates",
                "certificates-es": "Spanish: Native",
                "certificates-en": "English: Essential",
                //technologies
                "technologies-title" : "Technologies",
                //projects
                "projects-title": "Projects",
                "projects-description1": "Small application through a registration form you can enter a tab where you can leave a comment for the community.",
                "projects-description2": "Personal project where I carry out an ecommerce where you can buy, withdraw and edit the quantities of the product and as an administrator you get a table with the user's order to make.",
                "projects-description3":"Game in which you will have to find two identical cards until there are no cards left upside down.",
                "projects-description4":"Small application of a raffle in which by entering a name a board will be displayed with the available numbers, once the number is saved the option to pay with MercadoPago will be enabled and once the raffle time is over, no more numbers can be purchased.",
                "projects-description5":"Project of a football team for the blind, where the players are shown with their personal description, a contact tab, club information and as an administrator you can create and edit players.",
                "projects-description6":"MindHub project where different types of events are rendered. It has a search engine that shows the events found, each one has its detail and there is a section of the statistics of the events.",
                "projects-description7":"Personal application where I play live videos from youtube and filter according to the selected category.",
                "projects-code": "Code",
                "projects-deploy": "Deploy",
                //contact
                "contact-title": "Contact",
                "contact-name": "Name",
                "contact-email": "Email",
                "contact-message": "Message",
                "contact-send": "Send",
                //footer
                "footer-cv": "Download CV"
            }
        },
        es:{
            translation: {
                //home
                "hello": "¡ Hola, soy Elvio !",
                "developer": "Desarrollador Fullstack",
                "contribution": "Actividad de contribución",
                //header
                "home": "Inicio",
                "about": "Sobre mi",
                "projects": "Proyectos",
                "contact": "Contacto",
                //about me
                "about-title": "Sobre mi",
                "about-description": "Soy Desarrollador Frontend, estudiante de Técnico en Programación en la Universidad de Quilmes. Realicé un bootcamp en MINDHUB donde aprendí a utilizar las siguientes tecnologías: Javascript, CSS, Bootstrap, React/React Native, Tailwind, Redux, Node.js, Express.js, MongoDB, Postman, REST API. Desarrollamos proyectos simulando un ambiente de trabajo REAL, implementando Metodologías Ágiles SCRUM.",
                //certificate
                "certificates-title": "Idiomas y Certificados",
                "certificates-es": "Español: Nativo",
                "certificates-en": "Inglés: Esencial",
                //technologies
                "technologies-title" : "Tecnologias",
                //projects
                "projects-title": "Projectos",
                "projects-description1": "Pequeña aplicación a través de un formulario de registro puede ingresar a una pestaña donde puede dejar un comentario para la comunidad.",
                "projects-description2": "Proyecto personal donde realizo un ecommerce donde puedes comprar, retirar y editar las cantidades del producto y como administrador te sale una tabla con el pedido del usuario a realizar.",
                "projects-description3":"Juego en el que tendrás que encontrar dos cartas iguales hasta que no queden cartas boca abajo.",
                "projects-description4":"Pequeña aplicación de una rifa en la que al ingresar un nombre se desplegará un tablero con los números disponibles, una vez guardado el número se habilitará la opción de pagar con MercadoPago y una vez finalizado el tiempo de la rifa no se podrán adquirir más números.",
                "projects-description5":"Proyecto de un equipo de fútbol para ciegos, donde se muestran los jugadores con su descripción personal, ficha de contacto, información del club y como administrador puedes crear y editar jugadores.",
                "projects-description6":"Proyecto MindHub donde se renderizan diferentes tipos de eventos. Tiene un buscador que muestra los eventos encontrados, cada uno tiene su detalle y hay un apartado de las estadísticas de los eventos.",
                "projects-description7":"Aplicacion personal donde reproduzco videos en vivo de youtube y filtra segun la categoria seleccionada.",
                "projects-code": "Codigo",
                "projects-deploy": "Desplegar",
                //contact
                "contact-title": "Contacto",
                "contact-name": "Nombre",
                "contact-email": "Correo Electronico",
                "contact-message": "Mensaje",
                "contact-send": "Enviar",
                //footer
                "footer-cv": "Descargar CV"
            }
        }
    }
})
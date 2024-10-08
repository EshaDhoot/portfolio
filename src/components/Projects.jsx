import React,{useEffect} from 'react'
import "./projects.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: "https://img.freepik.com/free-vector/book-your-flight-isometric-landing-page_88138-484.jpg",
      desc: "Flight Booking Management System is a booking App made using: Node.js, Express.js, MySQL, Axios, JWT, Nodemailer, RabbitMQ",
      demo: "/",
      code: "https://github.com/EshaDhoot/API_Gateway"
    },
    {
      id: 2,
      src: "https://img.freepik.com/premium-photo/twitter-logo-icon-technological-background-with-code-elements_272306-153.jpg",
      desc: "Backend of a Twitter like application made using: Node.js, Express.js, MongoDB, Jest, Passport.js, AWS S3",
      demo: "/",
      code: "https://github.com/EshaDhoot/Twitter_Backend"
    },
    {
      id: 3,
      src: "https://eskaji-sweets.vercel.app/static/media/Logo.c22f0ff505cc1e92f434.png",
      desc: "Full-Stack Application for a Virtual E-Commerce Store made using:React.js, Node.js, Express.js, MongoDB",
      demo: "https://eskaji-sweets.vercel.app/",
      code: "https://github.com/EshaDhoot/EsKaJi_Sweets"
    },
    {
      id: 4,
      src: "https://st4.depositphotos.com/14431644/22311/i/450/depositphotos_223116984-stock-photo-handwriting-text-writing-hi-chat.jpg",
      desc: "Tele Bot made using:HTML,CSS,JavaScript",
      demo: "/",
      code: "https://github.com/EshaDhoot/Tele_Bot"
    },
    {
      id: 5,
      src: "https://media.dev.to/cdn-cgi/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F654tlh0e3qd5y19fe12o.png",
      desc: "Instagram clone made using:HTML,CSS",
      demo: "https://eshadhoot.github.io/Insta_Clone/",
      code: "https://github.com/EshaDhoot/Insta_Clone"
    },
    {
      id: 6,
      src: "https://media.dev.to/cdn-cgi/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F654tlh0e3qd5y19fe12o.png",
      desc: "ToothSomePie made using:HTML,CSS",
      demo: "https://eshadhoot.github.io/ToothsomePie/",
      code: "https://github.com/EshaDhoot/ToothsomePie"
    },
    
  ]


  return (
    <div id='project_heading' className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
    md:h-screen'>
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects
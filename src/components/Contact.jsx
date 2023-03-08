import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const handleForm = (e)=>{
        e.preventDefault()
        if(name.length <3){
          toast.warn("The name is required to have more than 4 characters")
          }else if(email.length === 0){
            toast.warn("Email invalid")
          }else if(message.length < 10){
            toast.warn("Enter a comment with more than 10 characters")
          }else{
            emailjs.sendForm("service_er5bkel","template_jx93opg",e.target,"nAw2N6DYf4535Zve3")
            .then(response => {
              toast.success("Message sent :D !")
              nameRef.current.value = ""
              emailRef.current.value = ""
              messageRef.current.value = ""
              setName("")
              setEmail("")
              setMessage("")
            }) 
            .catch(error => console.log(error)) 
          }
        }
    
  return (
    <section id='contact' className='flex justify-center items-center min-h-screen  font-serif px-2'>
        <div className='w-full max-w-sm'>
            <span className='flex justify-center text-5xl pb-5'>Contact</span>
            <form className=' flex flex-col  justify-center gap-2 text-xl' onSubmit={handleForm}>
                <label htmlFor='name' className=' block font-bold'>Name</label>
                <input 
                  ref={nameRef} 
                  id='name' 
                  name='input-name' 
                  type="text" 
                  required={true}
                  className='w-full bg-gray-300 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out' 
                  onChange={(e)=> setName(e.target.value)} />
                <label htmlFor='email' className=' block font-bold'>Email</label>
                <input 
                  ref={emailRef} 
                  id='email' 
                  name='input-email' 
                  required={true}
                  type="email" 
                  className='w-full bg-gray-300 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out' 
                  onChange={(e)=> setEmail(e.target.value)}/>
                <label htmlFor='message' className=' block font-bold'>Message</label>
                <textarea 
                  ref={messageRef} 
                  name='textarea' 
                  className='resize-none leading-10 w-full bg-gray-300 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700  px-3 transition-colors duration-200 ease-in-out'
                  onChange={(e)=> setMessage(e.target.value)}>
                </textarea>
                <button className='w-full leading-10 font-bold text-xl mt-2 dark:bg-gray-300 dark:text-gray-800 rounded-lg' >Send</button>
            </form>
        </div>
        <ToastContainer />
    </section>
  )
}

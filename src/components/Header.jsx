import { useState } from 'react';
import { BsFillMoonStarsFill,BsFillSunFill } from "react-icons/bs";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const listLI = [
    {name:"Home", href:"#home"},
    {name:"About Me", href: "#about"},
    {name:"Proyects", href:"#projects"},
    {name:"Contact", href:"#contact"}
  ]

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const toggleDarkMode = ()=>{
          document.documentElement.classList.toggle("dark")
          setIsDark(!isDark)
        }

  return (
    <nav className="flex items-center justify-between flex-wrap p-3 md:fixed w-full z-10 ">
      <div className="flex items-center flex-shrink-0  mr-6">
        {!isDark 
          ? 
          <img src='logo-name.png' alt='logo-portfolio' className='w-40' />
          :
          <img src='logo-name-dark.png' alt='logo-portfolio' className='w-40' /> 
        }
        
      </div>
      <div className=" md:hidden flex items-center gap-4">
      <div onClick={toggleDarkMode} className="">
            {isDark ? <BsFillSunFill />   : <BsFillMoonStarsFill />  }
      </div>
        <button
          onClick={handleMenuClick}
          className="flex items-center px-3 py-2 border rounded "
        >
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 12 12"
            stroke="currentColor"
          >
            {!isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4h6M3 8h6"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.5 4.5l3 3M7.5 4.5l-3 3"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? '' : 'hidden'
        } w-full block flex-grow md:flex md:items-center md:w-auto justify-end`}
      >
        <div className="text-sm md:flex-grow">
          {listLI.map((link,index) =>(
            <a
            href={link.href}
            className="block mt-4 md:inline-block md:mt-0 mr-4 text-xl font-bold hover:text-orange-400 duration-200"
            key={index}
          >
            {link.name}
          </a>
          ))}
          
        </div>
      </div>
      <div onClick={toggleDarkMode} className="max-md:hidden   right-5 z-10c">
            {isDark
             ? 
             <BsFillSunFill className='duration-200 hover:text-orange-400 text-3xl mr-5 cursor-pointer' />
             : 
             <BsFillMoonStarsFill className='duration-200 hover:text-blue-400 text-3xl mr-5 cursor-pointer' /> 
            }
      </div>
    </nav>
  );
}

export default Header;
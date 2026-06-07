import React from 'react'
import Logo from "../assets/MF-Logo.png"
import {useState} from "react"


const navLinks= [
    { href: "#experience", label:"Experience"},
     { href: "#projects", label:"Projects"},
    { href: "/MasonFancherCV.docx", label:"Resume"},
    { href: "#contact", label:"Contact"},
]




const NavBar = () => {


const [open, setOpen] = useState(false)


function handleOpen(){
  setOpen(!open)
}



  return (
<header className="
  fixed top-0 left-0 right-0 z-50
  bg-background/90 backdrop-blur
  text-white py-5
  border-b border-blue-400
  shadow-[0_6px_15px_-4px_rgba(59,130,246,0.6)]
"
>
  <nav className="container mx-auto flex items-center justify-between">
    <img className="h-15 ml-2 md:h-20" src={Logo} alt="Logo" />

    


    <div>
        <div className="hidden md:flex">
            {navLinks.map((link,index) => {
                return (
                <a key={index} href={link.href} className="
                    relative
                    mx-4
                    px-1 text-white
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-0.5
                    after:w-0
                    after:bg-blue-400
                    after:shadow-[0_0_8px_rgba(59,130,246,0.8)]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                ">{link.label} </a>
                          )
                      })}
                  </div>
            

            <button
              onClick={handleOpen}
              className="md:hidden mr-4 flex flex-col justify-center items-center gap-1.5 w-8 h-8"
              >
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
  
            </div>
          </nav>



            <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col items-center gap-6 py-6 border-t border-blue-400/40">
                    {navLinks.map((link, index) => {
                      return (
                        <a 
                        key={index} 
                        href={link.href}
                        className="text-white text-lg hover:text-blue-400 transition-colors duration-200"
                        onClick={() => setOpen(false)}
                          >{link.label}</a>
                      )
                    })}
              </div>
            </div>        
        </header>
          )
        }

export default NavBar
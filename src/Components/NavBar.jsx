import React from 'react'
import Logo from "../assets/MF-Logo.png"
const navLinks= [
    { href: "#experience", label:"Experience"},
     { href: "#projects", label:"Projects"},
    { href: "#resume", label:"Resume"},
    { href: "#skills", label:"Skills"},
    { href: "#contact", label:"Contact"},
]


const NavBar = () => {
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
    <img className="h-13 ml-2 md:h-15" src={Logo} alt="Logo" />

    

{/* Desktop Nav */}
    <div>
     <div>
        {navLinks.map((link,index) => {
            return (
            <a key={index} href={link.href} className="
    relative
    mx-5
    px-1
    text-white
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
    </div>
  </nav>
</header>
  )
}

export default NavBar
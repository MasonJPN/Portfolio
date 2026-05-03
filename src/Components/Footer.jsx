import React from 'react'
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

const Footer = () => {
  return (
    <footer className="bg-background text-gray-400 border-t border-blue-400/30 py-10 px-10">
      <div className="flex flex-col items-center gap-6 max-w-5xl mx-auto">
        
        <div className="flex gap-8 items-center">
          <a href="https://github.com/MasonJPN" target="_blank" rel="noreferrer" className="hover:opacity-100 opacity-60 transition-opacity">
            <img src={github} alt="GitHub" className="h-10 w-10 invert" />
          </a>
          <a href="https://www.linkedin.com/in/mason-fancher-859156351/" target="_blank" rel="noreferrer" className="hover:opacity-100 opacity-60 transition-opacity">
            <img src={linkedin} alt="LinkedIn" className="h-10 w-10" />
          </a>
        </div>

        <p className="text-sm text-gray-500">© 2026 Mason Fancher. All rights reserved.</p>

        <p className="text-xs text-gray-600">Built with React & Tailwind</p>

      </div>
    </footer>
  )
}

export default Footer
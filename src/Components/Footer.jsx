import React from 'react'
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

const Footer = () => {
  return (
    <footer className="bg-background text-gray-400 border-t border-blue-400/30 py-8 px-10">
      <div className="flex flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
        
        <p className="text-sm">© 2026 Mason Fancher. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="https://github.com/MasonJPN" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub" className="h-15 mr-20 bg-white rounded-xl w-15 opacity-100 hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://www.linkedin.com/in/mason-fancher-859156351/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" className="h-15 w-15  mr-20 opacity-100 hover:opacity-120 transition-opacity" />
          </a>
        </div>

        <p className="text-sm">Built with React & Tailwind</p>

      </div>
    </footer>
  )
}

export default Footer
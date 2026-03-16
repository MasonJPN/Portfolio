import React from 'react'
import Mason from "../assets/Mason.png"
import GS from "../assets/GS.png"
import Tokyo from "../assets/photo.png"
import Github from "../assets/Github.png"
import linkedin from "../assets/linkedin.png"


const Hero = () => {
  return (
    <>
    <img src={Tokyo} alt="Background-Hero" className="absolute inset-0 w-full h-250 md:h-250 object-cover rounded-xl brightness-30" />
    
    <section className="relative mt-50 px-6 md:ml-25 md:mt-65 flex flex-col md:flex-row items-center justify-between gap-10 mb-80">

      <div className="max-w-4xl">
        <h1 className="text-white flex justify-center items-center md:flex-none text-2xl md:text-4xl font-semibold">
          Hi there! I'm Mason 👋
        </h1>

        <span className="block  mt-6 text-gray-300 text-base md:text-2xl leading-relaxed md:pr-20">
          I'm a Frontend Developer based in Tokyo 🗼. I specialize in React and modern UI,
          focused on delivering intuitive, scalable web experiences for global products.
        </span>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 mt-10">
          <button className="w-90 md:w-60 text-white text-base md:text-2xl border border-blue-500 bg-blue-500 hover:bg-blue-800 transition-colors py-3 md:py-4 rounded-lg">
            Resume
          </button>

          <button className="w-90 md:w-60 text-white text-base md:text-2xl border border-blue-500 bg-blue-500 hover:bg-blue-800 transition-colors py-3 md:py-4 rounded-lg">
            Contact Me
          </button>
        </div>

        






      </div>

      <div className="shrink-0 md:ml-20">
        <img
          src={GS}
          alt="Mason portrait"
          className=" puff w-100 mt-10 md:mr-20 md:h-74 md:w-120 object-cover rounded-2xl shadow-lg border border-gray-300 shadow-blue-400"
        />
      </div>

    </section>
    </>
  )
}

export default Hero

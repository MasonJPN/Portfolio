import React from 'react'
import GS from "../assets/GS.png"
import Tokyo from "../assets/photo.png"
import MasonActing1 from "../assets/MasonActing1.png"
import MasonActing2 from "../assets/MasonActing2.png"
import MasonTokyo from "../assets/MasonTokyo.png"
const Hero = () => {
  return (
    <div className="relative">
      <img src={Tokyo} alt="Background-Hero" className="absolute inset-0 w-full h-full object-cover rounded-xl brightness-30" />
      
      <section className="relative pt-40 md:pt-52 px-10 md:px-20 flex flex-col md:flex-row items-center justify-center gap-16 pb-32">

        <div className="max-w-xl flex flex-col gap-6">
          <h1 className="text-white text-3xl md:text-5xl font-semibold">
            Hi there! I'm Mason 👋
          </h1>

          <p className="text-gray-300 text-base md:text-xl leading-relaxed">
            I'm a Frontend Developer based in Tokyo 🗼. I specialize in React and modern UI,
            focused on delivering intuitive, scalable web experiences for global products.
          </p>

          <div className="flex flex-row gap-4 mt-2">
            <button className="text-white text-base md:text-lg border border-blue-500 bg-blue-500 hover:bg-blue-800 transition-colors px-8 py-3 rounded-lg">
              Resume
            </button>
            <button className="text-white text-base md:text-lg border border-blue-500 bg-blue-500 hover:bg-blue-800 transition-colors px-8 py-3 rounded-lg">
              Contact Me
            </button>
          </div>
        </div>

        <div className="shrink-0">
          <img
            src={GS}
            alt="Mason portrait"
            className="puff h-72 md:h-96 w-auto object-cover rounded-2xl shadow-lg border border-blue-400 shadow-blue-400"
          />
        </div>

      </section>
    </div>
  )
}

export default Hero

import React from 'react'
import briefcase from './assets/briefcase.png'
import hat from "./assets/hat.png"

const Experience = () => {
  return (
    <section  id="experience" className="px-10 py-32 bg-background text-white">

      {/* Section Header */}
      <div data-aos="fade-up" className="flex flex-col items-center text-center mb-16">
        <img src={briefcase} alt="Briefcase icon" className="h-20 mb-4" />
        <h2 className="text-4xl font-semibold underline decoration-blue-400 underline-offset-6">
          Professional Experience
        </h2>
      </div>

      <div className="flex flex-col items-center gap-12">

        {/* EXPERIENCE CARD 1 */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="experience-trans min-h-[400px] w-[80vw] max-w-5xl bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-8 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)]">
            <div className="flex items-start gap-6 mb-6">
              <img src={briefcase} className="w-16 h-16 object-contain" alt="briefcase" />
              <div>
                <h3 className="text-3xl font-semibold">Frontend Developer</h3>
                <p className="text-gray-400">Freelance</p>
                <p className="text-gray-400">October 2025 – Present</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Built and deployed 5+ web applications using React, Next.js, and TypeScript, including a restaurant tracker with Mapbox and Firestore integration.</span></li>
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Developed reusable component systems and managed application state using React Context API across multiple projects.</span></li>
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Designed and developed client websites for freelance clients, handling everything from requirements to deployment.</span></li>
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Integrated third-party APIs including Mapbox, Firestore, and the TCGdex API to build dynamic, data-driven interfaces.</span></li>
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Practiced consistent Git workflows, responsive design with Tailwind CSS, and performance-conscious coding habits across all projects.</span></li>
            </ul>
          </div>
        </div>

        {/* EXPERIENCE CARD 2 */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="experience-trans min-h-100 w-[80vw] max-w-5xl bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-8 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)] ">
            <div className="flex items-start gap-6 mb-6">
              <img src={briefcase} className="w-16 h-16 object-contain" alt="briefcase" />
              <div>
                <h3 className="text-3xl font-semibold">International English Instructor</h3>
                <p className="text-gray-400">Full time</p>
                <p className="text-gray-400">August 2025 – Present</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Planned and delivered structured lessons to over 60 students across varying proficiency levels, adapting communication style to meet individual needs.</span></li>
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Managed a consistent schedule of multiple classes per day, demonstrating reliability and professional accountability in a full-time role.</span></li>
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Developed original lesson materials and learning resources, applying structured thinking and an eye for clear, user-friendly presentation.</span></li>
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Collaborated with Japanese colleagues and staff daily in a bilingual environment, demonstrating cross-cultural communication skills.</span></li>
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Maintained detailed student progress records and adjusted curriculum based on performance data and feedback.</span></li>
            </ul>
          </div>
        </div>

        {/* Education Header */}
        <div data-aos="fade-up" className="flex flex-col items-center text-center mb-1 mt-20">
          <img src={hat} alt="Graduation hat icon" className="h-20" />
          <h2 className="text-4xl font-semibold underline decoration-blue-400 underline-offset-6">
            Education
          </h2>
        </div>

        <div className="flex gap-8 justify-center">

          {/* EDUCATION CARD 1 */}
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="experience-trans flex flex-col w-[35vw] max-w-md min-h-100 bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-8 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)]">
              <div className="flex flex-col items-center mb-6">
                <img src={hat} className="w-16 h-16 object-contain" alt="graduation hat" />
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Bachelor of Arts in Foreign Languages</h3>
                  <p className="text-gray-400">Indiana State University</p>
                  <p className="text-gray-400">August 2021 – May 2025</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300 flex-1">
                <li className="flex gap-3"><span className="text-blue-400">•</span><span>Pursued Japanese Language & Culture coursework, reaching conversational proficiency</span></li>
                <li className="flex gap-3"><span className="text-blue-400">•</span><span>Received the Most Outstanding Japanese Language Student award — 2024/2025</span></li>
                <li className="flex gap-3"><span className="text-blue-400">•</span><span>Received TESOL certification, demonstrating commitment.</span></li>
              </ul>
            </div>
          </div>

          {/* EDUCATION CARD 2 */}
          <div data-aos="fade-left" data-aos-delay="100">
            <div className="experience-trans flex flex-col w-[35vw] max-w-md min-h-[420px] bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-8 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)]">
              <div className="flex flex-col items-center mb-6">
                <img src={hat} className="w-16 h-16 object-contain mb-4" alt="graduation hat" />
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Tokyo International University</h3>
                  <p className="text-gray-400">Undergraduate Study Abroad</p>
                  <p className="text-gray-400">2024 – 2025</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300 flex-1">
                <li className="flex gap-3"><span className="text-blue-400">•</span><span>Studied web design fundamentals, building a foundation in HTML & CSS.</span></li>
                <li className="flex gap-3"><span className="text-blue-400">•</span><span>Immersed in Japanese language and culture, accelerating path to conversational proficiency.</span></li>
                <li className="flex gap-3"><span className="text-blue-400">•</span><span>First exposure to frontend development, sparking transition into self-taught software engineering</span></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
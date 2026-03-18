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
  <div className="experience-trans w-[80vw] max-w-5xl bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-8 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)]">
    <div className="flex items-start gap-6 mb-6">
      <img src={briefcase} className="w-16 h-16 object-contain" alt="briefcase" />
      <div>
        <h3 className="text-3xl font-semibold">Software Engineer</h3>
        <p className="text-gray-400">Freelance</p>
        <p className="text-gray-400">October 2025 – Present</p>
      </div>
    </div>
    <ul className="space-y-3 text-gray-300">
      <li className="flex gap-3"><span className="text-blue-400">•</span><span>Built React-based interfaces focused on performance and UX.</span></li>
      <li className="flex gap-3"><span className="text-blue-400">•</span><span>Completed FreeCodeCamp and Udemy coursework.</span></li>
      <li className="flex gap-3"><span className="text-blue-400">•</span><span>Completed FreeCodeCamp and Udemy coursework.</span></li>
      <li className="flex gap-3"><span className="text-blue-400">•</span><span>Completed FreeCodeCamp and Udemy coursework.</span></li>
      <li className="flex gap-3"><span className="text-blue-400">•</span><span>Completed FreeCodeCamp and Udemy coursework.</span></li>
    </ul>
  </div>
</div>

        {/* EXPERIENCE CARD 2 */}
       <div data-aos="fade-up" data-aos-delay="100">
        <div  className=" experience-trans w-[80vw] max-w-5xl bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-8 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)]">
          <div className="flex items-start gap-6 mb-6">
            <img src={briefcase} className="w-16 h-16 object-contain" alt="briefcase" />
            <div>
              <h3 className="text-3xl font-semibold">International English Instructor</h3>
              <p className="text-gray-400">Full time</p>
              <p className="text-gray-400">August 2025 – Present</p>
            </div>
          </div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3"><span className="text-blue-400">•</span><span>Developed portfolio and React applications.</span></li>
            <li className="flex gap-3"><span className="text-blue-400">•</span><span>Focused on responsive UI and accessibility.</span></li>
            <li className="flex gap-3"><span className="text-blue-400">•</span><span>Completed FreeCodeCamp and Udemy coursework.</span></li>
            <li className="flex gap-3"><span className="text-blue-400">•</span><span>Completed FreeCodeCamp and Udemy coursework.</span></li>
            <li className="flex gap-3"><span className="text-blue-400">•</span><span>Completed FreeCodeCamp and Udemy coursework.</span></li>
          </ul>
        </div>
      </div>

        {/* Education Header */}
          
        <div data-aos="fade-up"  className=" flex flex-col items-center text-center mb-1 mt-20">
          <img src={hat} alt="Graduation hat icon" className="h-20" />
          <h2 className="text-4xl font-semibold underline decoration-blue-400 underline-offset-6">
            Education
          </h2>
        </div>

        <div className="flex gap-8 justify-center">

          {/* EDUCATION CARD 1 */}

            <div data-aos="fade-right" data-aos-delay="100">
          <div  className=" experience-trans   w-[35vw] max-w-md bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-8 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)]">
            <div className="flex flex-col items-center mb-6">
              <img src={hat} className="w-16 h-16 object-contain" alt="graduation hat" />
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Bachelor of Arts in Language, Literature, and Linguistics</h3>
                <p className="text-gray-400">Indiana State University</p>
                <p className="text-gray-400">August 2021 – May 2025</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Studied Japanese Language & Culture</span></li>
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Received the Most Outstanding Japanese Language Student award — 2024/2025 </span></li>
              
            </ul>
          </div>
            </div>

          {/* EDUCATION CARD 2 */}
            <div data-aos="fade-left" data-aos-delay="100">
          <div  className=" experience-trans w-[35vw] max-w-md bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-8 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)]">
            <div className="flex flex-col items-center mb-6">
              <img src={hat} className="w-16 h-16 object-contain mb-4" alt="graduation hat" />
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
                <p className="text-gray-400">Various Platforms</p>
                <p className="text-gray-400">2024 – Present</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>FreeCodeCamp Responsive Web Design Certification.</span></li>
              <li className="flex gap-3"><span className="text-blue-400">•</span><span>Udemy Complete React Developer CourseJ</span></li>
            </ul>
          </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
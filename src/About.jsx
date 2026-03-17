import htmlIcon from "./assets/htmlIcon.png"
import cssIcon from "./assets/cssIcon.png"
import jsIcon from "./assets/jsIcon.png"
import reactIcon from "./assets/reactIcon.png"
import tsIcon from "./assets/tsIcon.png"
import nextIcon from "./assets/nextIcon.png"
import tailwindIcon from "./assets/tailwindIcon.png"

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "React", icon: reactIcon },
  { name: "NextJS", icon: nextIcon },
  { name: "Tailwind", icon: tailwindIcon },
]

const About = () => {
  return (
    <section id="skills" className="min-h-screen px-10 py-32 bg-background text-white">
      <h2 className="text-4xl font-semibold mb-6 flex justify-center items-center underline decoration-blue-400">
        Frontend Skills
      </h2>
      <p className="text-gray-300 max-w-3xl leading-relaxed">
        
      </p>

      <div className="flex flex-col items-center gap-10 mt-16">
        <div className="flex gap-30">
          {skills.slice(0, 4).map((skill) => (
            <div key={skill.name} className="group flex flex-col items-center gap-2 cursor-default">
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-20 w-20 md:h-30 md:w-30 object-contain opacity-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
              <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-150 transition-opacity duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-30">
          {skills.slice(4).map((skill) => (
            <div key={skill.name} className="group flex flex-col items-center gap-2 cursor-default">
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-20 w-20 md:h-30 md:w-30 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
              <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
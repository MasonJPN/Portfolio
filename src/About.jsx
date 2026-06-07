import htmlIcon from "./assets/htmlIcon.png"
import cssIcon2 from "./assets/cssIcon2.png"
import jsIcon from "./assets/jsIcon.png"
import reactIcon from "./assets/reactIcon.png"
import tsIcon from "./assets/tsIcon.png"
import nextIcon from "./assets/nextIcon.png"
import tailwindIcon from "./assets/tailwindIcon.png"
import github from "./assets/github.png"
import git from "./assets/git.png"
import Firebase from "./assets/Firebase.png"

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon2 },
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "React", icon: reactIcon },
  { name: "Next.js", icon: nextIcon, invert: true },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "GitHub", icon: github, invert: true },
  { name: "Git", icon: git },
  { name: "Firebase", icon: Firebase },
]

const About = () => {
  return (
    <section id="skills" className="min-h-screen px-10 py-32 bg-background text-white">
      <h2 className="text-4xl font-semibold mb-6 flex justify-center items-center underline decoration-blue-400">
        Frontend Skills
      </h2>

      <div className="flex flex-col items-center mt-16">
        <div className=" grid grid-cols-3 md:grid md:grid-cols-5 gap-16">
          {skills.map((skill) => (
            <div key={skill.name} className="group flex flex-col items-center gap-3 cursor-default">
              <img
                src={skill.icon}
                alt={skill.name}
                className={`h-20 w-20 md:h-30 md:w-30 object-contain group-hover:scale-110 transition-all duration-300 ${skill.whiteBg ? "bg-white rounded-xl p-1" : ""} ${skill.invert ? "invert" : ""}`}
              />
              <p className="text-base text-gray-400 group-hover:text-white transition-colors duration-300">
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
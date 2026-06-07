import TCGVaultSS from "./assets/tcgVaultSS.png"
import BeauBlendz from "./assets/BeauBlendz.png"
import GlobalRiseProject from "./assets/GlobalRiseProject.png"


export default function Projects(){
    return (
        <section id="projects" className="px-10 py-32 bg-background text-white">
            
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
                
                <h2 className="text-4xl font-semibold underline decoration-blue-400 underline-offset-6">
                    Personal Projects
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl">
                    Projects built by me to explore new technologies and solve real-world problems
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                
                {/* PROJECT CARD 1 */}
                <div className=" project-card bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-6 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)] flex flex-col">
                    <img 
                        src={TCGVaultSS}
                        alt="Project 1 screenshot" 
                        className="w-full h-48 object-cover rounded-lg mb-4 border border-blue-400/30"
                    />
                    <h3 className="text-2xl font-semibold mb-3">TCG Vault</h3>
                    <p className="text-blue-400 text-sm mb-4">React.js, CSS</p>
                    <p className="text-gray-300 mb-6 grow">
                        A web app that allows users to search Pokémon TCG cards using an API, view detailed card information, and build a personalized collection with persistent storage and interactive features.
                    </p>
                    <a 
                        href="https://tcg-vault.netlify.app/" 
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
                    >
                        Link to Project →
                    </a>
                </div>

                {/* PROJECT CARD 2 */}
                <div className= " project-card2 bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-6 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)] flex flex-col">
                    <img 
                         src={BeauBlendz}
                        alt="Project 2 screenshot" 
                        className="w-full h-48 object-cover rounded-lg mb-4 border border-blue-400/30"
                    />
                    <h3 className="text-2xl font-semibold mb-3">BeauBlendz</h3>
                    <p className="text-blue-400 text-sm mb-4">Typescript, Tailwind, Next.js</p>
                    <p className="text-gray-300 mb-6 grow">
                        A freelance barbershop website built for a client in Indianapolis. Features a service menu, an integrated booking system, and a working contact form via EmailJS — fully responsive across all devices.
                    </p>
                    <a 
                        href="https://beaublendzbarber.netlify.app/" 
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
                    >
                        Link to Project →
                    </a>
                </div>

                
                <div className=" project-card bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-6 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)] flex flex-col">
                    <img 
                        src={GlobalRiseProject}
                        alt="Project 3 screenshot" 
                        className="w-full h-48 object-cover rounded-lg mb-4 border border-blue-400/30"
                    />
                    <h3 className="text-2xl font-semibold mb-3">Global Rise</h3>
                    <p className="text-blue-400 text-sm mb-4">TypeScript, Tailwind, Next.js</p>
                    <p className="text-gray-300 mb-6 grow">
                        An internal school management app handling real-time student sign-in, teacher clock-in/out, and automated parent email notifications — deployed and used daily by staff and students.
                    </p>
                    <a 
                        href="https://globalrisegakudo.org/" 
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
                    >
                        Link to Project →
                    </a>
                </div>

            </div>
        </section>
    )
}

import TCGVaultSS from "./assets/tcgVaultSS.png"
import FilmDex from "./assets/FilmDex.png"





export default function Projects(){
    return (
        <section className="px-10 py-32 bg-background text-white">
            
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
                <div className="bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-6 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)] flex flex-col">
                    <img 
                        src={TCGVaultSS}
                        alt="Project 1 screenshot" 
                        className="w-full h-48 object-cover rounded-lg mb-4 border border-blue-400/30"
                    />
                    <h3 className="text-2xl font-semibold mb-3">TCG Vault</h3>
                    <p className="text-blue-400 text-sm mb-4">React.js, CSS</p>
                    <p className="text-gray-300 mb-6 grow">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus quis placeat dolorum vitae delectus, eveniet nobis nulla necessitatibus eum, quia rem quasi quae autem, laudantium ipsa minima. Amet, accusamus.
                    </p>
                    <a 
                        href="https://tcg-vault.netlify.app/" 
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
                    >
                        Link to Project →
                    </a>
                </div>

                {/* PROJECT CARD 2 */}
                <div className="bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-6 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)] flex flex-col">
                    <img 
                         src={FilmDex}
                        alt="Project 2 screenshot" 
                        className="w-full h-48 object-cover rounded-lg mb-4 border border-blue-400/30"
                    />
                    <h3 className="text-2xl font-semibold mb-3">Project 2 Name</h3>
                    <p className="text-blue-400 text-sm mb-4">React.js, Tailwind, Next.js</p>
                    <p className="text-gray-300 mb-6 grow">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus quis placeat dolorum vitae delectus, eveniet nobis nulla necessitatibus eum, quia rem quasi quae autem, laudantium ipsa minima. Amet, accusamus.
                    </p>
                    <a 
                        href="" 
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
                    >
                        Link to Project →
                    </a>
                </div>

                
                <div className="bg-slate-900/50 backdrop-blur border border-blue-400 rounded-lg p-6 shadow-[0_6px_20px_-4px_rgba(59,130,246,0.4)] flex flex-col">
                    <img 
                        
                        alt="Project 3 screenshot" 
                        className="w-full h-48 object-cover rounded-lg mb-4 border border-blue-400/30"
                    />
                    <h3 className="text-2xl font-semibold mb-3">Project 3 Name</h3>
                    <p className="text-blue-400 text-sm mb-4">React.js, Tailwind, Next.js</p>
                    <p className="text-gray-300 mb-6 grow">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus quis placeat dolorum vitae delectus, eveniet nobis nulla necessitatibus eum, quia rem quasi quae autem, laudantium ipsa minima. Amet, accusamus.
                    </p>
                    <a 
                        href="" 
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
                    >
                        Link to Project →
                    </a>
                </div>

            </div>
        </section>
    )
}

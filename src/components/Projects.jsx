import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects=[
    {
        id:1,
        title:"CRUD ",
        description:"This is crud operation project",
        image:"/src/assets/projects/INTERNN WEB PAGE.png",
        tags:["React","Mongodb","Node",],
        demoUrl:"#",
        giturl:"#"
    },
    {
        id:2,
        title:"Dashboard ",
        description:"This is crud operation project",
        image:"/src/assets/projects/Screenshot 2025-03-17 102722.png",
        tags:["React","Mongodb","Node",],
        demoUrl:"#",
        giturl:"#"
    },
    {
        id:3,
        title:"DIGI Shakti ",
        description:"This is crud operation project",
        image:"/src/assets/projects/Screenshot 2025-03-20 080619.png",
        tags:["React","Mongodb","Node",],
        demoUrl:"#",
        giturl:"#"
    },

];

export const Projects=()=>{
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Featured <span className="text-primary">Projetcs</span></h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some recently projects, Each projects was carefully craft with attention to details, performance and user experience (UX).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project,key)=>(
                <div key={key} className="group bg-card overflow-hidden shadow-xs card-hover">
                    <div className="h-48 outline-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag)=>(
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground ">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex justify-between items-center p-2">
                        <div className="flex space-x-3">
                            <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20} /></a>
                            <a href={project.giturl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2 "  target="_blank" href="http://github.com/jaynathkk1">Check My Github <ArrowRight  size={16}/></a>
        </div>
    </section>
}
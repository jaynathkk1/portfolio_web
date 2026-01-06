import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  //frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 86, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.Js", level: 90, category: "frontend" },
  { name: "Flutter", level: 90, category: "frontend" },
  //backend
  { name: "Node", level: 80, category: "backend" },
  { name: "Python", level: 77, category: "backend" },
  { name: "MongoDb", level: 77, category: "backend" },
  { name: "MySQL", level: 77, category: "backend" },
  { name: "PostgreSQL", level: 77, category: "backend" },
  { name: "Dart", level: 77, category: "backend" },

  //Tools
  { name: "Git/Github", level: 85, category: "tools" },
  { name: "Vs Code", level: 85, category: "tools" },
  { name: "Android Studio", level: 90, category: "tools" },
  { name: "Git/Github", level: 85, category: "tools" },
];

export const SkillsSection = () => {
    const [activeCategory,setActiveCategory]=useState("All");
    const categories=["All","frontend","backend","tools"];
    const filterSkills = skills.filter((skill)=>activeCategory === "All" || skill.category === activeCategory);
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto md:w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category,key)=>(
            <button
            onClick={()=>setActiveCategory(category)}
             className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category ? "bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-secondary"
             )} key={key}>{category}</button>
        ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width:skill.level +"%"}}/>
              </div>
              <div className="text-right mt-1"><span className="text-sm text-muted-foreground">{skill.level} %</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

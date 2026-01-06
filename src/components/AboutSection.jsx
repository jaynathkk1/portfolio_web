import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web & Mobile App Developer and Tech Creator
            </h3>
            <p className="text-muted-foreground">
              With over 2 years of experience in web and app Developement ,I
              specialize in creating responsive, accessible, and performat web
              application using moderntechnologies
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating elegant solution to complex
              problems, and I'm constancy learning new technolgies and techniues
              to stay at the forefront of the ever-evolving web landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color-duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 bg-primary/10">
                <div className="p-2 m-2 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary " />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">Web/App Developer</h4>
                  <p className="text-muted-foregraound">
                    Create responsive websites & App Developer with modern
                    framework
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 bg-primary/10">
                <div className="p-2 m-2 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">Web/App Developer</h4>
                  <p className="text-muted-foregraound">
                    Create responsive websites & App Developer with modern
                    framework
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 bg-primary/10">
                <div className="p-2 m-2 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foregraound">
                    Create responsive websites & App Developer with modern
                    framework
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

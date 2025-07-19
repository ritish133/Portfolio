import React from "react";
import { Briefcase, Code, User } from "lucide-react";
const AboutMe = () => {
  return (
    <div>
      <section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About<span className="text-primary"> Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Innovative Full Stack Developer & Problem Solver
              </h3>
              <p className="text-muted-foreground text-justify">
                {" "}
                I’m a dedicated full-stack developer with a passion for building modern, scalable, and user-centric web applications. With expertise in the MERN stack, I create responsive and high-performance solutions that solve real-world problems through clean architecture and thoughtful design.
              </p>
              <p className="text-muted-foreground text-justify">
                I’m driven by curiosity and a deep enthusiasm for learning.
                I constantly explore new technologies to stay ahead in the ever-evolving web development landscape.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  {""} Get in Touch
                </a>
                <a
                  href="/RitishKumarSingh.pdf"
                  download="RitishKumarSingh"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Devlopment</h4>
                    <p className="text-muted-foreground">
                      Building responsive and high-performance websites using the latest web technologies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                    <p className="text-muted-foreground">
                      Designing clean, intuitive interfaces focused on user experience and accessibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Project Management
                    </h4>
                    <p className="text-muted-foreground">
                      Executing full-cycle project development from planning to deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;

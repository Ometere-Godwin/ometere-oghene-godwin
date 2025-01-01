"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectCard } from "@/components/project-card";
import { SkillsCard } from "@/components/skills-card";
import { ContactSection } from "@/components/sections/contact";
import { projects, skills } from "@/lib/data";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main
        className={`min-h-screen bg-background transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <HeroSection />
        <AboutSection />

        {/* Projects Section */}
        <section className="py-20 px-4 sm:px-6" id="projects">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 sm:px-6 bg-muted/30" id="skills">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((category, index) => (
                <SkillsCard key={index} category={category} index={index} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />

        {/* Footer */}
        <footer className="py-20 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Ometere Oghene-Godwin. All rights
            reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

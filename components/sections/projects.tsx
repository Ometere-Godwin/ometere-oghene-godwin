"use client";

import { ProjectCard } from "@/components/project-card";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for project 1",
    image: "/project1.jpg",
    technologies: ["React", "TypeScript", "Tailwind"],
    link: "https://project1.com",
  },
  // Add more projects to fill 3 columns
];

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 sm:px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

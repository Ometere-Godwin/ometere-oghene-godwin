"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group border-primary/20 h-full">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href={project.link} target="_blank">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
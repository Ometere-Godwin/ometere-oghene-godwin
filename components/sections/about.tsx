"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const features = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Clean Code",
    description:
      "Writing maintainable and scalable code following best practices",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Modern Design",
    description: "Creating beautiful and intuitive user interfaces",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Performance",
    description: "Optimizing applications for the best user experience",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a passionate frontend developer with a keen eye for design
            and a commitment to creating exceptional user experiences. With
            expertise in modern web technologies, I bring ideas to life through
            clean code and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:border-primary transition-colors h-[250px] flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

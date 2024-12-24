"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/scroll-indicator";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative px-4 sm:px-6" id="home">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Frontend Developer
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-muted-foreground mb-8 px-4 sm:px-0"
          variants={itemVariants}
        >
          Crafting beautiful and performant web experiences
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4"
          variants={itemVariants}
        >
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <Link href="https://github.com" target="_blank">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <Link href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Link>
          </Button>
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
}
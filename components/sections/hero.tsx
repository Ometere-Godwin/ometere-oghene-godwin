"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

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
    <section
      className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 pt-20 md:pt-0"
      id="home"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center md:text-left">
          <motion.h1
            className="font-bold mb-6 space-y-2"
            variants={itemVariants}
          >
            <div className="flex flex-col">
              <h3 className="text-xl md:text-2xl">Hello, my name is</h3>
              <h3 className="text-3xl md:text-6xl">Ometere Godwin</h3>
            </div>
            <span className="text-2xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block mt-4">
              <TypeAnimation
                sequence={[
                  "I'm a Frontend Developer",
                  1000,
                  "I Build Web Applications",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </span>
          </motion.h1>
          <motion.p
            className="text-base md:text-2xl text-muted-foreground mb-8"
            variants={itemVariants}
          >
            Crafting beautiful and performant web experiences
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-[140px]"
            >
              <Link href="https://github.com/Ometere-Godwin" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-[140px]"
            >
              <Link
                href="https://www.linkedin.com/in/ometere-oghene-godwin/"
                target="_blank"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-[140px]"
            >
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="block order-first md:order-last mb-8 md:mb-0 mt-16 md:mt-0"
          variants={itemVariants}
        >
          <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto">
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=ometere"
              alt="Profile picture"
              fill
              className="rounded-full object-cover bg-muted"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
}

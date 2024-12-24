"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`absolute bottom-8 transition-opacity duration-300 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToProjects}
    >
      <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SkillCategory } from "@/lib/types";

interface SkillsCardProps {
  category: SkillCategory;
  index: number;
}

export function SkillsCard({ category, index }: SkillsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full bg-muted/50 hover:bg-muted/80 transition-colors">
        <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
        <div className="grid grid-cols-2 gap-2">
          {category.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
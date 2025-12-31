"use client";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { DATA } from "@/app/data";
import { getIconUrl, darkInvertList } from "@/lib/icons";

export function SkillsSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-24">
      <div className="flex items-center gap-3 mb-8">
        <Terminal className="w-5 h-5" />
        <h2 className="text-2xl font-bold tracking-tight">Technical Arsenal</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
         {[
           { title: "Languages", skills: DATA.skills.languages },
           { title: "Frameworks & Libraries", skills: DATA.skills.frameworks },
           { title: "Databases", skills: DATA.skills.databases },
           { title: "Tools & Devops", skills: DATA.skills.tools }
         ].map((category, idx) => (
           <div key={idx} className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="group flex items-center gap-2 rounded-lg border bg-card px-3 py-2 transition-colors hover:bg-secondary/50 hover:border-foreground/20">
                      <img 
                        src={getIconUrl(skill)} 
                        alt={skill} 
                        className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                           darkInvertList.includes(skill) ? "dark:invert" : ""
                        }`} 
                      />
                      <span className="text-sm font-medium text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
           </div>
         ))}
      </div>
    </motion.div>
  );
}
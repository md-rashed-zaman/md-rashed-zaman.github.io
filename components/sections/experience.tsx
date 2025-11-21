"use client";
import { motion } from "framer-motion";
import { Server } from "lucide-react";
import { Badge } from "@/components/ui";
import { DATA } from "@/app/data";

export function ExperienceSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-24">
      <div className="flex items-center gap-3 mb-10">
        <Server className="w-5 h-5" />
        <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
      </div>
      
      <div className="relative border-l-2 border-dashed border-muted-foreground/20 ml-3 space-y-12 pb-4">
        {DATA.experience.map((job, id) => (
          <div key={id} className="relative pl-12">
            <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-background bg-foreground shadow-sm" />
            
            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
              <div>
                <h3 className="font-bold text-xl text-foreground">{job.company}</h3>
                <div className="font-bold text-base text-blue-600 dark:text-blue-400 mt-1 flex items-center gap-2">
                  {job.role}
                </div>
              </div>
              <span className="mt-2 sm:mt-0 font-mono text-xs text-muted-foreground border border-border px-2 py-1 h-fit rounded-md bg-secondary/30">
                {job.period}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4 mt-3">
              {job.tech.map((t) => (
                 <Badge key={t} className="bg-secondary text-secondary-foreground hover:bg-secondary/80 border-0 font-medium text-xs px-2.5 py-1">
                    {t}
                 </Badge>
              ))}
            </div>
            
            <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
              {job.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { DATA } from "@/app/data";

export function EducationSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
       <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="w-5 h-5" />
        <h2 className="text-2xl font-bold tracking-tight">Education</h2>
      </div>
      
      <div className="grid gap-6">
          {DATA.education.map((edu, i) => (
              <div key={i} className="flex flex-col sm:flex-row justify-between items-start p-6 rounded-xl border bg-secondary/5">
                  <div>
                      <h3 className="font-bold text-lg">{edu.school}</h3>
                      <p className="text-foreground/80 font-medium mt-1">{edu.degree}</p>
                      {edu.coursework && (
                           <p className="text-sm text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                              <span className="font-semibold text-foreground/80">Relevant Coursework:</span> {edu.coursework}
                           </p>
                      )}
                      {edu.achievements && (
                           <p className="text-sm text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                              <span className="font-semibold text-foreground/80">Achievements:</span> {edu.achievements}
                           </p>
                      )}
                  </div>
                  <div className="mt-4 sm:mt-0 shrink-0">
                       <span className="inline-block text-xs font-mono bg-secondary px-2.5 py-1 rounded-md text-secondary-foreground">
                          {edu.period}
                      </span>
                  </div>
              </div>
          ))}
      </div>
    </motion.div>
  );
}
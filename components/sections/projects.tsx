"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Badge } from "@/components/ui";
import { DATA } from "@/app/data";

export function ProjectsSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-24">
      <div className="flex items-center gap-3 mb-8">
        <Code2 className="w-5 h-5" />
        <h2 className="text-2xl font-bold tracking-tight">Engineered Projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {DATA.projects.map((project, id) => (
          <div key={id} className="group relative rounded-2xl border bg-card p-6 md:p-8 transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <h3 className="font-bold text-xl flex items-center gap-2">
                     {project.title}
                     <Link href={project.link} target="_blank" className="text-muted-foreground hover:text-blue-600 transition-colors">
                         <ArrowUpRight className="w-4 h-4" />
                     </Link>
                  </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                      <Badge key={t} className="bg-secondary text-secondary-foreground hover:bg-secondary/80 border-0 font-medium text-xs px-2.5 py-1">
                          {t}
                      </Badge>
                  ))}
              </div>

              <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm leading-relaxed">
                  {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                  ))}
              </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
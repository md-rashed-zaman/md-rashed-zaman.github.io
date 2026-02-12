"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Github } from "lucide-react";
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { DATA } from "@/app/data";

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      <div className="mb-8 flex items-center gap-3">
        <Code2 className="h-5 w-5 text-brand" />
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {DATA.projects.map((project, id) => {
          const hasLink = Boolean(project.link && project.link !== "#");
          const isFeatured = id < 2;

          return (
            <Card
              key={id}
              className={[
                "group bg-card/60 backdrop-blur transition-shadow hover:shadow-md",
                isFeatured ? "border-brand/25" : "",
              ].join(" ")}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg leading-snug">
                    {project.title}
                    {isFeatured ? (
                      <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-wider text-brand">
                        Featured
                      </span>
                    ) : null}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-secondary/60">
                      {t}
                    </Badge>
                  ))}
                </div>

                <ul className="grid gap-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description.map((desc, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {hasLink ? (
                  <Button asChild variant="outline" className="w-full justify-center bg-background/40">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github />
                      View source
                    </Link>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.section>
  );
}

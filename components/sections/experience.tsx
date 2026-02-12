"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Server } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, Card, CardContent } from "@/components/ui";
import { DATA } from "@/app/data";

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      <div className="mb-8 flex items-center gap-3">
        <Server className="h-5 w-5 text-brand" />
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      </div>

      <Card className="bg-card/60 backdrop-blur">
        <CardContent className="pt-2">
          <Accordion type="single" collapsible defaultValue="item-0">
            {DATA.experience.map((job, id) => (
              <AccordionItem key={id} value={`item-${id}`}>
                <AccordionTrigger className="py-5">
                  <div className="flex w-full flex-col items-start gap-1 pr-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-left">
                      <div className="text-base font-semibold text-foreground">{job.company}</div>
                      <div className="text-sm text-muted-foreground">{job.role}</div>
                    </div>
                    <div className="mt-2 shrink-0 rounded-md border bg-background/40 px-2.5 py-1 text-xs font-medium text-muted-foreground sm:mt-0">
                      <span className="font-mono">{job.period}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      {job.location ? <span>{job.location}</span> : null}
                      {job.url ? (
                        <>
                          <span className="text-muted-foreground/50">•</span>
                          <Link
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline-offset-4 hover:underline"
                          >
                            Website
                          </Link>
                        </>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-secondary/60">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <ul className="grid gap-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {job.description.map((point, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </motion.section>
  );
}

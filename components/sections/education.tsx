"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { DATA } from "@/app/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Card, CardContent } from "@/components/ui";

export function EducationSection() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      <div className="mb-8 flex items-center gap-3">
        <GraduationCap className="h-5 w-5 text-brand" />
        <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
      </div>

      <Card className="bg-card/60 backdrop-blur">
        <CardContent className="p-2 sm:p-3">
          <Accordion type="single" collapsible defaultValue="edu-0">
            {DATA.education.map((edu, i) => (
              <AccordionItem key={i} value={`edu-${i}`} className="border-b-0">
                <div className="rounded-xl border bg-background/30 px-4 py-3 sm:px-5 sm:py-4">
                  <AccordionTrigger className="py-0 hover:no-underline">
                    <div className="flex w-full flex-col items-start justify-between gap-2 pr-4 sm:flex-row sm:items-center">
                      <div className="text-left">
                        <div className="text-base font-semibold text-foreground">{edu.school}</div>
                        <div className="text-sm text-muted-foreground">{edu.degree}</div>
                      </div>
                      <span className="shrink-0 rounded-md border bg-background/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        <span className="font-mono">{edu.period}</span>
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-0 pt-4">
                    <div className="grid gap-4 text-sm text-muted-foreground">
                      {edu.coursework ? (
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Relevant coursework
                          </div>
                          <p className="mt-2 leading-relaxed">{edu.coursework}</p>
                        </div>
                      ) : null}

                      {edu.achievements?.length ? (
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Achievements
                          </div>
                          <ul className="mt-2 grid gap-2">
                            {edu.achievements.map((a) => (
                              <li key={a} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </motion.section>
  );
}

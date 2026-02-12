"use client";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Image from "next/image";
import { DATA } from "@/app/data";
import { getIconUrl, darkInvertList } from "@/lib/icons";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export function SkillsSection() {
  const CLUSTERS: Array<{
    key: string;
    label: string;
    caption: string;
    skills: string[];
  }> = [
    {
      key: "languages",
      label: "Core languages",
      caption: "Strong foundations for performance and correctness.",
      skills: DATA.skills.languages,
    },
    {
      key: "backend",
      label: "Backend & architecture",
      caption: "APIs, services, and event-driven workflows.",
      skills: [...DATA.skills.frameworks, ...DATA.skills.messaging],
    },
    {
      key: "infra",
      label: "Data & delivery",
      caption: "Storage, environments, and engineering hygiene.",
      skills: [...DATA.skills.databases, ...DATA.skills.tools],
    },
  ];

  const renderSkill = (skill: string) => {
    const icon = getIconUrl(skill);
    const isInvert = darkInvertList.includes(skill);

    return (
      <Badge
        key={skill}
        variant="secondary"
        className="gap-2 rounded-lg border bg-background/40 px-3 py-2 text-sm font-medium text-foreground/90"
      >
        {icon ? (
          <Image
            src={icon}
            alt=""
            aria-hidden="true"
            width={16}
            height={16}
            className={isInvert ? "dark:invert" : ""}
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid h-4 w-4 place-items-center rounded-md border bg-secondary/40 text-[9px] font-semibold text-foreground/70"
          >
            {skill.slice(0, 2).toUpperCase()}
          </span>
        )}
        <span>{skill}</span>
      </Badge>
    );
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      <div className="mb-8 flex items-center gap-3">
        <Terminal className="h-5 w-5 text-brand" />
        <h2 className="text-2xl font-semibold tracking-tight">Technical stack</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {CLUSTERS.map((c) => {
          const sorted = c.skills;

          return (
            <Card key={c.key} className="bg-card/60 backdrop-blur">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="font-mono text-[11px] text-muted-foreground">
                      module.{c.key}
                    </div>
                    <CardTitle className="text-lg font-semibold">{c.label}</CardTitle>
                    <div className="text-sm text-muted-foreground">{c.caption}</div>
                  </div>
                  <span className="shrink-0 rounded-md border bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                    {c.skills.length}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-1">
                <div className="flex flex-wrap gap-2">
                  {sorted.map((skill) => renderSkill(skill))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.section>
  );
}

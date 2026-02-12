"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { DATA } from "@/app/data";
import { FADE_UP, STAGGER } from "@/lib/animations";
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Separator } from "@/components/ui";

export function HeroSection() {
  const now = DATA.experience?.[0];

  return (
    <motion.section
      id="top"
      initial="hidden"
      animate="show"
      variants={STAGGER}
      className="mb-20 grid items-start gap-10 lg:grid-cols-[1.25fr_0.9fr]"
    >
      <div className="space-y-7">
        <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="bg-background/40 font-mono text-[11px] tracking-tight">
            backend.systems
          </Badge>
          <Badge variant="outline" className="gap-2 bg-background/40">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
            {DATA.location}
          </Badge>
          <Badge variant="outline" className="gap-2 bg-background/40">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            Open to roles
          </Badge>
        </motion.div>

        <div className="space-y-4">
          <motion.h1 variants={FADE_UP} className="text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
            {DATA.name}
          </motion.h1>
          <motion.p variants={FADE_UP} className="text-base font-medium text-foreground/80 sm:text-lg">
            {DATA.role}
          </motion.p>
          <motion.p variants={FADE_UP} className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {DATA.about}
          </motion.p>
        </div>

        <motion.div variants={FADE_UP} className="flex flex-wrap gap-3 pt-1">
          <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90">
            <a href={DATA.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download />
              Resume
            </a>
          </Button>

          <Button asChild variant="outline" className="bg-background/40">
            <Link href={`mailto:${DATA.email}`}>
              <Mail />
              Email
            </Link>
          </Button>

          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
            <Link href="#projects">
              View projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div variants={FADE_UP} className="lg:pt-2">
        <Card className="bg-card/60 backdrop-blur">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-foreground">Highlights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="rounded-lg border bg-background/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Current</div>
              <div className="mt-2 space-y-1">
                <div className="text-sm font-semibold text-foreground">{now?.role ?? DATA.role}</div>
                <div className="text-sm text-muted-foreground">
                  {now?.company ? (
                    <>
                      <span className="text-foreground/80">@</span> {now.company}
                      {now.period ? <span className="font-mono text-xs">{"  "}· {now.period}</span> : null}
                    </>
                  ) : (
                    DATA.location
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Primary stack</div>
              <div className="flex flex-wrap gap-2">
                {["Spring Boot", "Node.js", "Go", "PostgreSQL", "MongoDB", "Kafka"].map((t) => (
                  <Badge key={t} variant="secondary" className="bg-secondary/60">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div className="grid gap-2 text-sm leading-relaxed text-muted-foreground">
              <div className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" />
                <span>Microservices with workflow-driven business logic</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" />
                <span>Performance-minded APIs (query tuning, pagination, indexing)</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" />
                <span>Testing discipline (unit tests, correctness, regression safety)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}

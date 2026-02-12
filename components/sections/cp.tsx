"use client";
import { motion } from "framer-motion";
import { Trophy, ArrowUpRight } from "lucide-react";
import Link from "next/link"; // Import Link
import { DATA } from "@/app/data";
import { Button, Card, CardContent } from "@/components/ui";

export function CPSection() {
  return (
    <motion.section
      id="competitive"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      <div className="mb-8 flex items-center gap-3">
        <Trophy className="h-5 w-5 text-brand" />
        <h2 className="text-2xl font-semibold tracking-tight">Competitive programming</h2>
      </div>

      <Card className="bg-card/60 backdrop-blur">
        <CardContent className="grid gap-8 p-6 md:grid-cols-3">
          <div className="space-y-3 md:col-span-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ratings</div>
            <div className="grid gap-2">
              {DATA.competitiveProgramming.stats.map((stat, i) => (
                <Button
                  key={i}
                  asChild
                  variant="outline"
                  className="h-auto justify-between gap-3 bg-background/40 px-4 py-3"
                >
                  <Link href={stat.link} target="_blank" rel="noopener noreferrer">
                    <span>
                      <span className="block text-sm font-semibold text-foreground">{stat.platform}</span>
                      <span className="block font-mono text-xs text-muted-foreground">{stat.rating}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3 md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Highlights</div>
            <ul className="grid gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {DATA.competitiveProgramming.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}

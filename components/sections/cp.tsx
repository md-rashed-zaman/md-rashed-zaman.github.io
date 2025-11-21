"use client";
import { motion } from "framer-motion";
import { Trophy, ArrowUpRight } from "lucide-react";
import Link from "next/link"; // Import Link
import { DATA } from "@/app/data";

export function CPSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-24">
       <div className="flex items-center gap-3 mb-8">
        <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
        <h2 className="text-2xl font-bold tracking-tight">Competitive Programming</h2>
      </div>

      <div className="rounded-2xl border bg-gradient-to-br from-secondary/20 to-background p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Stats Column - NOW CLICKABLE */}
              <div className="md:col-span-1 space-y-4">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Ratings</h3>
                  {DATA.competitiveProgramming.stats.map((stat, i) => (
                      <Link 
                        key={i} 
                        href={stat?.link}
                        target="_blank"
                        className="group block p-4 rounded-lg bg-background border shadow-sm transition-all hover:shadow-md hover:border-foreground/20 relative overflow-hidden"
                      >
                          <div className="flex justify-between items-start mb-1">
                            <div className="font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {stat.platform}
                            </div>
                            {/* Animated Arrow */}
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                          </div>
                          <div className="text-sm text-muted-foreground font-mono group-hover:text-foreground transition-colors">
                              {stat.rating}
                          </div>
                      </Link>
                  ))}
              </div>

              {/* Highlights Column */}
              <div className="md:col-span-2 space-y-4">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Highlights</h3>
                  <ul className="space-y-4">
                      {DATA.competitiveProgramming.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-3 text-sm sm:text-base text-muted-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70" />
                              {highlight}
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>
    </motion.div>
  );
}
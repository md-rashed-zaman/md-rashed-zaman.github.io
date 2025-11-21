"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { DATA } from "@/app/data";
import { FADE_UP, STAGGER } from "@/lib/animations";

export function HeroSection() {
  return (
    <motion.div initial="hidden" animate="show" variants={STAGGER} className="mb-24 space-y-6">
      <motion.div variants={FADE_UP} className="flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="text-sm font-mono text-muted-foreground">Available for work</span>
      </motion.div>

      <motion.h1 variants={FADE_UP} className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-foreground">
        Building scalable <br />
        <span className="text-muted-foreground">backend systems.</span>
      </motion.h1>
      
      <motion.p variants={FADE_UP} className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
        I am <strong>{DATA.name}</strong>, a software engineer specialized in backend architecture and high-performance APIs. 
        I engineer scalable ERP solutions using <span className="text-foreground font-medium underline underline-offset-4 decoration-muted-foreground/30">Spring Boot</span> and <span className="text-foreground font-medium underline underline-offset-4 decoration-muted-foreground/30">Node.js</span>, 
        while actively expanding into concurrent systems programming with <span className="text-foreground font-medium underline underline-offset-4 decoration-muted-foreground/30">Golang</span>.
      </motion.p>

      <motion.div variants={FADE_UP} className="flex flex-wrap gap-4 pt-4">
        <a 
          href={DATA.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-foreground px-8 font-medium text-background transition-all duration-300 hover:bg-foreground/90 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20" />
          </div>
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </div>
        </a>

        <Link 
          href={`mailto:${DATA.email}`}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <Mail className="w-4 h-4" />
          Contact Me
        </Link>
      </motion.div>
    </motion.div>
  );
}
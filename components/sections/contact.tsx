"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Copy, Github, Linkedin, Mail, Phone } from "lucide-react";

import { DATA } from "@/app/data";
import { Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export function ContactSection() {
  const [copied, setCopied] = React.useState<"email" | "phone" | null>(null);

  const copy = async (kind: "email" | "phone", value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      window.setTimeout(() => setCopied(null), 1200);
    } catch {
      // no-op (clipboard may be blocked)
    }
  };

  const github = DATA.social.find((s) => s.name === "GitHub")?.url ?? "https://github.com/";
  const linkedin = DATA.social.find((s) => s.name === "LinkedIn")?.url ?? "https://linkedin.com/";

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          If you’re hiring for backend roles (microservices, APIs, distributed systems), I’d love to talk.
        </p>
      </div>

      <Card className="bg-card/60 backdrop-blur">
        <CardHeader className="pb-4">
          <CardTitle className="text-base text-muted-foreground">Reach me</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border bg-background/40 p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90">
                <Link href={`mailto:${DATA.email}`}>
                  <Mail />
                  {DATA.email}
                </Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => copy("email", DATA.email)}
                className="bg-background/40"
              >
                <Copy />
                {copied === "email" ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>

          <div className="rounded-xl border bg-background/40 p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Button asChild variant="outline" className="bg-background/40">
                <Link href={`tel:${DATA.phone}`}>
                  <Phone />
                  {DATA.phone}
                </Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => copy("phone", DATA.phone)}
                className="bg-background/40"
              >
                <Copy />
                {copied === "phone" ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>

          <div className="md:col-span-2 rounded-xl border bg-background/40 p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Social</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <Button asChild variant="outline" className="bg-background/40">
                <Link href={github} target="_blank" rel="noopener noreferrer">
                  <Github />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-background/40">
                <Link href={linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}


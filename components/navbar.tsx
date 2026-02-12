import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui";
import { DATA } from "@/app/data";

export function Navbar() {
  const github = DATA.social.find((s) => s.name === "GitHub")?.url ?? "https://github.com/";
  const linkedin = DATA.social.find((s) => s.name === "LinkedIn")?.url ?? "https://linkedin.com/";
  const email = DATA.email;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-md border bg-card text-sm font-semibold">
              MR
            </span>
            <span className="hidden sm:block font-semibold tracking-tight">{DATA.name}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {[
              ["Skills", "#skills"],
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Education", "#education"],
              ["CP", "#competitive"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <Button key={href} asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Link href={href}>{label}</Link>
              </Button>
            ))}
          </nav>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
            <Link href={linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Email">
            <Link href={`mailto:${email}`}>
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
          <div className="mx-1 h-6 w-px bg-border" />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

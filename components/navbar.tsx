import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle"; // Import the toggle

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-4xl items-center mx-auto px-4 md:px-6">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 font-bold">
            <span className="text-lg tracking-tight">RASHED</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground">
              Home
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <div className="flex items-center gap-4">
              {/* Social Icons */}
              <Link href="https://github.com/md-rashed-zaman" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/in/md-rashed" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:md.rashed.dev@gmail.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
              
              {/* Separator */}
              <div className="h-6 w-px bg-border" />

              {/* Dark Mode Toggle */}
              <ModeToggle />
           </div>
        </div>
      </div>
    </header>
  );
}
import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider"; // Import this

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Md. Rasheduzzaman | Software Engineer",
  description: "Backend Software Engineer specializing in Spring Boot and Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {/* Wrap children with ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-10">
              <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-center text-sm text-muted-foreground md:flex-row md:px-6 md:text-left">
                <p className="leading-relaxed">
                  © {new Date().getFullYear()} Md. Rasheduzzaman. Built with Next.js + shadcn/ui.
                </p>
                <p className="font-mono text-xs">
                  Backend Software Engineer specializing in Spring Boot and Node.js
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

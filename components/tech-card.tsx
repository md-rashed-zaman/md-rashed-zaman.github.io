import { cn } from "@/lib/utils";

interface TechCardProps {
  title: string;
  skills: string[];
  className?: string;
  delay?: number;
}

export function TechCard({ title, skills, className }: TechCardProps) {
  return (
    <div className={cn("flex flex-col space-y-3 rounded-xl border bg-card p-6 shadow-sm", className)}>
      <h3 className="font-semibold tracking-tight text-sm uppercase text-muted-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="inline-flex items-center rounded-md bg-secondary/50 px-2.5 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-gray-500/10 transition-colors hover:bg-secondary hover:text-primary cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
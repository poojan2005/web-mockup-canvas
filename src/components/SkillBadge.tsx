import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  type: "have" | "want";
  className?: string;
}

export function SkillBadge({ skill, type, className }: SkillBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "text-xs px-2 py-1 rounded-full border-0",
        type === "have" 
          ? "bg-skill-have text-skill-have-foreground" 
          : "bg-skill-want text-skill-want-foreground",
        className
      )}
    >
      {skill}
    </Badge>
  );
}
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Solution } from "./solutionsData";

interface SolutionCardProps {
  solution: Solution;
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  const Icon = solution.icon;

  return (
    <Card className="group border-brand/15 bg-card transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 cursor-pointer">
      <CardHeader>
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand/20">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <CardTitle className="font-exo2 text-lg text-foreground">
          {solution.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-foreground/60">
          {solution.description}
        </p>
      </CardContent>
    </Card>
  );
}

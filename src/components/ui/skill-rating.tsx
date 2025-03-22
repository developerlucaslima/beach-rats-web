"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface SkillRatingProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  skill: string;
  abbreviation: string;
  min?: number;
  max: number;
  value: number;
  className?: string;
}

function SkillRatingBadge({
  abbreviation,
  className,
  ...props
}: { abbreviation: string; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
    className={cn(
      "h-9 p-2 rounded-sm border bg-background dark:bg-input/30 dark:border-input shadow-xs flex items-center justify-center",
      className
    )}
    {...props}
    >
      <span className="text-foreground font-bold">{abbreviation}</span>
    </div>
  );
}

function SkillRatingLabel({
  skill,
  value,
  max,
  className,
  ...props
}: { skill: string; value: number; max: number; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center justify-between text-sm text-secondary-foreground my-0", className)} {...props}>
      <span>{skill}</span>
      <span>{value} / {max}</span>
    </div>
  );
}

function SkillRatingBar({
  min = 0,
  max,
  value,
  className,
  ...props
}: Pick<SkillRatingProps, "min" | "max" | "value" | "className"> & React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>) {
  const progressPercentage = ((value - min) / (max - min)) * 100;
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full my-0", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full transition-all"
        style={{ width: `${progressPercentage}%` }}
      />
    </ProgressPrimitive.Root>
  );
}

export function SkillRating({
  skill,
  abbreviation,
  min = 0,
  max,
  value,
  className,
  ...props
}: SkillRatingProps) {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <SkillRatingBadge abbreviation={abbreviation} />
      <div className="w-full max-w-md space-y-2">
        <SkillRatingLabel skill={skill} value={value} max={max} />
        <SkillRatingBar min={min} max={max} value={value} {...props} />
      </div>
    </div>
  );
}

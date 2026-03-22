import cn from "@/lib/utils/cn";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export default function Section({
  container,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(container && "container", className)} {...props}>
      {children}
    </section>
  );
}

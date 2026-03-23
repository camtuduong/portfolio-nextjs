import React from "react";

type ToolKitProps = React.SVGProps<SVGSVGElement> & {
  label?: string;
};

export default function ToolKit({ label = "ToolKit", ...props }: ToolKitProps) {
  return (
    <svg
      width="67"
      height="50"
      viewBox="0 0 67 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="67" height="44" rx="4" fill="currentColor" />

      <text
        x="33.5"
        y="24"
        fill="white"
        fontSize="14"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Arial, sans-serif"
      >
        {label}
      </text>

      <path d="M54 50L49 44L59 44L54 50Z" fill="currentColor" />
    </svg>
  );
}

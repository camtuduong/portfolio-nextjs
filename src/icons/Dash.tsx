import React from "react";

export default function Dash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100"
      height="4"
      viewBox="0 0 100 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="100" height="4" rx="2" fill="#FDC435" />
    </svg>
  );
}

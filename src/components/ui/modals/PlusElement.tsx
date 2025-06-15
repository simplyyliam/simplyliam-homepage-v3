import type { HtmlHTMLAttributes } from "react";
import type React from "react";

export const PlusElement: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`flex items-center justify-center p-2 ${className}`}
      {...props}
    >
      <svg
        width="28"
        height="27"
        viewBox="0 0 28 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.99988 13.5H20.9999M13.9999 20.25V6.75"
          stroke="#0D0D0D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

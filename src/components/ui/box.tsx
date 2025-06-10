import { useTheme } from "next-themes";
import type { HtmlHTMLAttributes } from "react";
import type React from "react";

export const Box: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
    const {theme} = useTheme()

  return (
    <div
      className={`flex items-center justify-center w-auto h-auto p-2  ${
        theme === "dark" ? "bg-white" : "bg-stone-800"
      } rounded-xl  ${className} `}
      {...props}
    >
      {children}
    </div>
  );
};

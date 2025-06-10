import { useTheme } from "next-themes";
import type { HtmlHTMLAttributes } from "react";
import type React from "react";

export const ThemeToggle: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleTheme}
      className={`flex items-center justify-center w-14 h-13  rounded-[6.3px]  cursor-pointer ${
        theme === "dark" ? "bg-stone-800" : "bg-white"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

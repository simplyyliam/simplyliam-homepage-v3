import type { HtmlHTMLAttributes } from "react";
import type React from "react";

export const Message: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`flex items-center justify-center px-[10px]  absolute bottom-5 rounded-[19px] bg-[#0d0d0d25] ${className} 
            
        `}
      {...props}
    >
      {children}
    </div>
  );
};

import type { HtmlHTMLAttributes } from "react";
import { forwardRef } from "react";

export const Message = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex items-center justify-center px-[10px] absolute -bottom-full rounded-[19px] bg-[#0d0d0d25] ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Message.displayName = "Message";

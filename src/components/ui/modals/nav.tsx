import type { HtmlHTMLAttributes } from "react";
import { forwardRef } from "react";

export const NavModel = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`flex items-center justify-between gap-7 h-[72px] bg-[#14141425] p-[8px] rounded-[26px] top-10 text-white fixed z-1 backdrop-blur-[10px] ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

NavModel.displayName = "NavModel";
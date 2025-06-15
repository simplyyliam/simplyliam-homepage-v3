import type { HtmlHTMLAttributes } from "react";
import type React from "react";


export const NavShell: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({children, className, ...props}) => {
    return (
        <div className={`flex items-center justify-center p-[5px] gap-4 rounded-2xl bg-[#0d0d0d30] ${className}`} {...props}>{children}</div>
    )
}
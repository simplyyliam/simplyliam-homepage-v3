import type { HtmlHTMLAttributes } from "react";
import type React from "react";


export const NavModel: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children, className, ...props 
}) => {
    return (
        <div className={`flex items-center justify-center gap-8 bg-[#14141480] p-[8.4px] rounded-xl absolute top-10 text-white ${className}`} {...props}>{children}</div>
    )
}
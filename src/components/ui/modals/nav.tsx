import type { HtmlHTMLAttributes } from "react";
import type React from "react";


export const NavModel: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children, className, ...props 
}) => {
    return (
        <div className={`flex items-center justify-between gap-7 h-[72px] bg-[#14141425] p-[8px] rounded-[26px] absolute top-10 text-white ${className}`} {...props}>{children}</div>
    )
}
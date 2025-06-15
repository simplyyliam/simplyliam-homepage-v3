import type { HtmlHTMLAttributes } from "react";
import type React from "react";


export const Avatar: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = ({
    children, className, ...props
}) => {
    return (
        <button className={`flex items-center justify-center bg-[#0d0d0d30] rounded-2xl w-14 h-14 hover:scale-105 transition ease-linear  cursor-pointer  ${className}`} {...props}>{children}</button>
    )
}
import type { HtmlHTMLAttributes } from "react";
import type React from "react";


export const CustomButton: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = ({
    children, className, ...props
}) => {
    return (
        <button className={`flex items-center justify-center p-2 border-[0.5px] border-black/25 hover:bg-stone-600/50 transition-all ease-linear rounded-[10px] cursor-pointer ${className}`} {...props}>{children}</button>
    )
}
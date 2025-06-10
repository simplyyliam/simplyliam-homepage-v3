import type { HtmlHTMLAttributes } from "react";
import type React from "react";


export const CustomButton: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = ({
    children, className, ...props
}) => {
    return (
        <button className={`flex items-center justify-center p-2 hover:bg-white transition-all ease-linear rounded-sm hover:text-black cursor-pointer ${className}`} {...props}>{children}</button>
    )
}
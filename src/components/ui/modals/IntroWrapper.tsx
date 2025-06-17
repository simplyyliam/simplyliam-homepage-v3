import type { HtmlHTMLAttributes } from "react";
import type React from "react";



export const IntroWrapper: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children, className, ...props
}) => {
    return (
        <div className={`flex items-center justify-center w-screen h-screen bg-[#fffff5] ${className} 
            
        `} {...props}>{children}</div>
    )
}
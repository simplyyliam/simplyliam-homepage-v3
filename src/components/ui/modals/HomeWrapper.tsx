import type { HtmlHTMLAttributes } from "react";
import type React from "react";



export const HomeWrapper: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children, className, ...props
}) => {
    return (
        <div className={`flex flex-col items-center justify-center bg-[#fffff5] ${className} 
            
        `} {...props}>{children}</div>
    )
}

// ${theme === 'dark' ? "bg-[#141414]" : "bg-[#fffff5]"}
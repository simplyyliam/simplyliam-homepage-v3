
import type { HtmlHTMLAttributes } from "react";
import type React from "react";



export const HomeWrapper: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children, className, ...props
}) => {

    return (
        <div className={`flex items-center justify-center w-screen h-screen  ${className}`} {...props}>{children}</div>
    )
}
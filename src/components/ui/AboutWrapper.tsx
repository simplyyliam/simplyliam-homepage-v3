import type { HtmlHTMLAttributes } from "react";
import { forwardRef } from "react";

export const AboutWrapper = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`flex items-center justify-center w-screen h-screen ${className ?? ""}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

AboutWrapper.displayName = "AboutWrapper";
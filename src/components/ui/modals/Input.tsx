import type { HtmlHTMLAttributes } from "react";
import { forwardRef } from "react";

export const CustomInput = forwardRef<HTMLInputElement, HtmlHTMLAttributes<HTMLInputElement>>(
    ({ className, ...props }, ref) => {
        return (
            <form action="">
                <input
                    ref={ref}
                    className={`focus:outline-none text-black h-13 ${className}`}
                    type="text"
                    placeholder="Send me a message"
                    {...props}
                />
            </form>
        );
    }
);

CustomInput.displayName = "CustomInput";

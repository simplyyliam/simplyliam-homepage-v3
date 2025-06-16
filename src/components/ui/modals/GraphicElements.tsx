import type { HtmlHTMLAttributes } from "react";
import type React from "react";

export const PlusElement: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`flex items-center justify-center p-2 ${className}`}
      {...props}
    >
      <svg
        width="28"
        height="27"
        viewBox="0 0 28 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.99988 13.5H20.9999M13.9999 20.25V6.75"
          stroke="#0D0D0D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

//Graident Star Element
export const Star: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`flex items-center justify-center p-2 ${className}`}
      {...props}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.35876 1.43538C9.92254 -0.0882006 12.0775 -0.088197 12.6412 1.43538L14.502 6.46406C14.6793 6.94307 15.0569 7.32073 15.5359 7.49798L20.5646 9.35876C22.0882 9.92254 22.0882 12.0775 20.5646 12.6412L15.5359 14.502C15.0569 14.6793 14.6793 15.0569 14.502 15.5359L12.6412 20.5646C12.0775 22.0882 9.92254 22.0882 9.35876 20.5646L7.49798 15.5359C7.32073 15.0569 6.94306 14.6793 6.46406 14.502L1.43538 12.6412C-0.0882006 12.0775 -0.088197 9.92254 1.43538 9.35876L6.46406 7.49798C6.94307 7.32073 7.32073 6.94306 7.49798 6.46406L9.35876 1.43538Z"
          fill="url(#paint0_linear_589_77)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_589_77"
            x1="11"
            y1="-3"
            x2="11"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#595CFF" />
            <stop offset="1" stop-color="#C6F8FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

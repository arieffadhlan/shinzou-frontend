"use client";

import { twMerge } from "tailwind-merge";

const Button = ({
  size,
  variant,
  children,
  type = "button",
  className = "",
  ...rest
}) => {
  const buttonSizes = {
    sm: "button-sm",
    md: "button-md",
    lg: "button-lg",
    xl: "button-xl"
  };
  
  const buttonVariants = {
    primary: "button-primary",
    secondary: "button-secondary",
    success: "button-success",
    danger: "button-danger"
  };

  const pickedSize = buttonSizes[size];
  const pickedVariant = buttonVariants[variant];
  
  return (
    <button
      type={type}
      className={twMerge("button", pickedSize, pickedVariant, className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
"use client";

import { twMerge } from "tailwind-merge";

const Button = ({
  type,
  size,
  variant,
  children,
  className = "",
  loading = false,
  ...props
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
  const classNames = twMerge("button", pickedSize, pickedVariant, className);
  
  return type === "submit" ? (
    <button
      type="submit"
      className={classNames}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="animate-spin material-icons-round">
          autorenew
        </span>
      ): children}
    </button>
  ) : (
    <button
      type="button"
      className={classNames}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
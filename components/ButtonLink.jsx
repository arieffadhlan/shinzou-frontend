"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

const ButtonLink = ({
  href,
  size,
  variant,
  children,
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
    <Link href={href} passHref legacyBehavior>
      <a className={twMerge("button", pickedSize, pickedVariant, className)} {...rest}>
        {children}
      </a>
    </Link>
  );
}

export default ButtonLink;
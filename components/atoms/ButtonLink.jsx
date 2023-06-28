"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

const ButtonLink = ({
  href,
  size,
  variant,
  children,
  className = "",
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
  
  return (
    <Link href={href} passHref legacyBehavior>
      <a className={classNames} {...props}>
        {children}
      </a>
    </Link>
  );
}

export default ButtonLink;
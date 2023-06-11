"use client";

import { useRouter } from "next/navigation";

const ButtonLink = ({
  href,
  size,
  variant,
  className = "",
  children,
  ...rest
}) => {
  const router = useRouter();
  
  const buttonSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };
  
  const buttonVariants = {
    primary: "bg-primary-4 hocus:bg-primary-3 active:bg-primary-5 disabled:bg-primary-2",
    secondary: "bg-success hocus:bg-success-hover active:bg-success-active disabled:bg-success-disabled",
  };

  const pickedSize = buttonSizes[size];
  const pickedVariant = buttonVariants[variant];
  const classNames = `${pickedSize} ${pickedVariant} ${className}`;
  
  return (
    <button
      type="button"
      onClick={() => router.push(href)}
      className={`flex justify-center items-center gap-1 px-6 py-3 rounded-2xl font-medium text-white ${classNames}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonLink;
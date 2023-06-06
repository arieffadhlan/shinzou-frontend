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
    lg: "text-xl",
  };
  
  const buttonVariants = {
    primary: "bg-primary hocus:bg-primary-hover active:bg-primary-active disabled:bg-primary-disabled",
    secondary: "bg-success hocus:bg-success-hover active:bg-success-active disabled:bg-success-disabled",
  };

  const pickedSize = buttonSizes[size];
  const pickedVariant = buttonVariants[variant];
  const classNames = `${pickedSize} ${pickedVariant} ${className}`;
  
  return (
    <button
      type="button"
      onClick={() => router.push(href)}
      className={`flex justify-center items-center gap-1 py-3 px-6 rounded-2xl font-medium ${classNames}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonLink;
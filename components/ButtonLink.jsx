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
    sm: "py-2 text-sm",
    md: "py-3.5 text-sm",
    lg: "py-3 text-base",
    xl: "py-4 text-xl"
  };
  
  const buttonVariants = {
    primary: "bg-primary-4 hocus:bg-primary-3 active:bg-primary-5",
    secondary: "bg-neutral-1 border border-primary-4 text-neutral-5 disabled:border-neutral-2 disabled:bg-neutral-1 disabled:text-neutral-2",
    success: "bg-success",
    danger: "bg-danger"
  };

  const pickedSize = buttonSizes[size];
  const pickedVariant = buttonVariants[variant];
  
  return (
    <button
      type="button"
      onClick={() => router.push(href)}
      className={twMerge(
        `flex justify-center items-center gap-2 px-6 rounded-2xl font-medium text-neutral-1 transition ease-in-out duration-150 hocus:outline-none disabled:bg-neutral-2`, 
        pickedSize, 
        pickedVariant, 
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonLink;
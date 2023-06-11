const Button = ({
  type = "button",
  size,
  variant,
  className = "",
  children,
  ...rest
}) => {
  const buttonSizes = {
    sm: "text-sm",
    md: "text-sm xs:text-base",
    lg: "text-base xs:text-xl",
  };
  
  const buttonVariants = {
    primary: "bg-primary-4 hocus:bg-primary-3 active:bg-primary-5 disabled:bg-primary-2",
    success: "bg-success hocus:bg-success-hover active:bg-success-active disabled:bg-success-disabled",
    danger: "bg-danger hocus:bg-danger-hover active:bg-danger-active disabled:bg-danger-disabled"
  };

  const pickedSize = buttonSizes[size];
  const pickedVariant = buttonVariants[variant];
  const classNames = `${pickedSize} ${pickedVariant} ${className}`;
  
  return (
    <button
      type={type}
      className={`flex justify-center items-center gap-1 px-6 py-3 rounded-2xl font-medium text-white transition ease-in-out duration-150 hocus:outline-none ${classNames}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
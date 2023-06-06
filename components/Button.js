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
    md: "text-base",
    lg: "text-xl",
  };
  
  const buttonVariants = {
    primary: "bg-primary hocus:bg-primary-hover active:bg-primary-active disabled:bg-primary-disabled",
    success: "bg-success hocus:bg-success-hover active:bg-success-active disabled:bg-success-disabled",
    danger: "bg-danger hocus:bg-danger-hover active:bg-danger-active disabled:bg-danger-disabled"
  };

  const pickedSize = buttonSizes[size];
  const pickedVariant = buttonVariants[variant];
  const classNames = `${pickedSize} ${pickedVariant} ${className}`;
  
  return (
    <button
      type={type}
      className={`flex justify-center items-center gap-1 py-3 px-6 rounded-2xl font-medium ${classNames}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
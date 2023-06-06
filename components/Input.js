const Input = ({
  type,
  variant,
  name,
  register,
  errors,
  validationSchema,
  className = "",
  ...rest
}) => {
  const inputVariants = {
    primary: "py-3 rounded-2xl",  
    secondary: "py-2.5 rounded-[4px]"
  };

  const pickedVariant = inputVariants[variant];
  const classNames = `${pickedVariant} ${className}`;

  return (  
    <>
      <input 
        type={type}
        name={name}
        id={id}
        className={`flex items-center gap-4 px-4 border border-[#DODODO] bg-white text-sm text-[#8A8A8A] placeholder:text-sm placeholder:text-[#8A8A8A] ${classNames}`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors[name]?.type === "required" && <span>{errors[name]?.message}</span>}
    </>
  );
}

export default Input;
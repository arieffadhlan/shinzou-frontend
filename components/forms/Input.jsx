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
    <div className="flex flex-col gap-2">
      <input 
        type={type}
        name={name}
        id={name}
        className={`flex items-center gap-4 px-4 outline-none border border-[#D0D0D0] bg-white text-sm text-[#8A8A8A] transition duration-[0.2s] ease-[cubic-bezier(.4,0,1,1)] placeholder:text-sm placeholder:text-[#8A8A8A] focus:border-[#929292] ${classNames}`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors[name]?.message && <span className="text-sm text-danger">{errors[name].message}</span>}
    </div>
  );
}

export default Input;
import { useState } from "react";
import { twMerge } from "tailwind-merge";

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
  const [showPassword, setShowPassword] = useState(false);
  const inputVariants = {
    primary: "py-3 rounded-2xl",  
    secondary: "py-2.5 rounded-[4px]"
  };

  const pickedVariant = inputVariants[variant];

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (  
    <div className="flex flex-col">
      {type === "password" ? (
        <div className="relative">
          <input 
            type={showPassword ? "text" : "password"}
            name={name}
            id={name}
            className={twMerge(
              `flex items-center gap-4 w-full h-12 px-4 outline-none border border-[#D0D0D0] bg-white text-sm text-black transition duration-[0.2s] ease-[cubic-bezier(.4,0,1,1)] placeholder:text-sm placeholder:text-neutral-3 focus:border-[#929292]`, 
              pickedVariant, 
              className,
              errors[name]?.message && "border-danger"
            )}
            {...register(name, validationSchema)}
            {...rest}
          />
          <button 
            type="button" 
            onClick={handleShowPassword}
            className="material-icons-round absolute top-3 right-4 text-neutral-3"
          >
            {showPassword ? "visibility_off" : "visibility"}
          </button>
        </div>
      ) : (
        <input 
          type={type}
          name={name}
          id={name}
          className={twMerge(
            `flex items-center gap-4 w-full h-12 px-4 outline-none border border-[#D0D0D0] bg-white text-sm text-black transition duration-[0.2s] ease-[cubic-bezier(.4,0,1,1)] placeholder:text-sm placeholder:text-neutral-3 focus:border-[#929292]`, 
            pickedVariant, 
            className,
            errors[name]?.message && "border-danger"
          )}
          {...register(name, validationSchema)}
          {...rest}
        />
      )}
    </div>
  );
}

export default Input;
"use client";

import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import Alert from "./Alert";

const Input = ({ 
  type, 
  variant, 
  name, 
  className = "",
  ...props
}) => {
  const { register, formState: { errors } } = useFormContext();
  
  const inputVariants = {
    primary: "py-3 rounded-2xl",  
    secondary: "py-2.5 rounded-lg h-10"
  };

  const pickedVariant = inputVariants[variant];
  const classNames = twMerge(
    "input", 
    pickedVariant, 
    className, 
    errors[name]?.message && "border-danger"
  );

  return (  
    <div className="flex flex-col">
      <input 
        type={type}
        name={name}
        id={name}
        className={classNames}
        {...register(name)}
        {...props}
      />
      {errors[name]?.message && <Alert type="error" message={errors[name].message} />}
    </div>
  );
}

export default Input;
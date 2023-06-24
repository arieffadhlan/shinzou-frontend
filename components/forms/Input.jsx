"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import Alert from "../Alert";

const Input = ({ 
  type, 
  variant, 
  name, 
  className = "",
  ...props
}) => {
  const { register, formState: { errors } } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const inputVariants = {
    primary: "py-3 rounded-2xl",  
    secondary: "py-2.5 rounded-[4px]"
  };

  const pickedVariant = inputVariants[variant];
  const classNames = twMerge(
    "input", 
    pickedVariant, 
    className, 
    errors[name]?.message && "border-danger"
  );

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
            className={classNames}
            {...register(name)}
            {...props}
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
          className={classNames}
          {...register(name)}
          {...props}
        />
      )}
      {errors[name]?.message && <Alert type="error" message={errors[name].message} />}
    </div>
  );
}

export default Input;
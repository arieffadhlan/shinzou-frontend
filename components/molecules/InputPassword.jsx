"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import Alert from "../atoms/Alert";

const InputPassword = ({ 
  variant, 
  name, 
  className = "",
  ...props
}) => {
  const { register, formState: { errors } } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  
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

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (  
    <div className="flex flex-col">
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
          {showPassword ? "visibility" : "visibility_off"}
        </button>
      </div>
      {errors[name]?.message && <Alert type="error" message={errors[name].message} />}
    </div>
  );
}

export default InputPassword;
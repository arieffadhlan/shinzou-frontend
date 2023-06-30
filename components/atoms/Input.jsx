"use client";

import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import Alert from "./Alert";

const Input = ({ 
  type, 
  variant, 
  name, 
  hookForm = true,
  className = "",
  ...props
}) => {
  let formRegister;
  let formErrors;
  if (hookForm) {
    const { register } = useFormContext();
    const { formState: { errors } } = useFormContext();
    formRegister = register;
    formErrors = errors;
  }

  const inputVariants = {
    primary: "py-3 rounded-2xl",  
    secondary: "py-2.5 rounded-lg h-10"
  };

  const pickedVariant = inputVariants[variant];
  const classNames = twMerge(
    "input", 
    pickedVariant, 
    className, 
    formErrors ? formErrors[name]?.message && "border-danger" : ""
  );

  return (  
    <div className="flex flex-col">
      {hookForm === false ? (
        <input 
          type={type}
          name={name}
          id={name}
          className={classNames}
          {...props}
        />
      ) : (
        <input 
          type={type}
          name={name}
          id={name}
          className={classNames}
          {...formRegister(name)}
          {...props}
        />
      )}
      {formErrors && formErrors[name]?.message && (
        <Alert type="error" message={formErrors[name].message} />
      )}
    </div>
  );
}

export default Input;
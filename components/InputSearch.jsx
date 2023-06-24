import { twMerge } from "tailwind-merge";

const InputSearch = ({ 
  name, 
  className = "", 
  iconClassName = "",
  ...rest
}) => {
  return (  
    <>
      <input 
        type="text"
        name={name}
        className={twMerge("input-search", className)}
        {...rest}
      />
      <span className={twMerge(`material-icons-round absolute top-3 right-4 text-neutral-3`, iconClassName)}>
        search
      </span>
    </>
  );
}

export default InputSearch;
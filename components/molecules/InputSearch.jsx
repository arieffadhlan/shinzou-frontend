import { twMerge } from "tailwind-merge";

const InputSearch = ({ 
  name, 
  className = "", 
  iconClassName = "",
  ...rest
}) => {
  const classNames = twMerge("input-search", className);
  const IconclassNames = twMerge(`material-icons-round absolute top-3 right-4 text-neutral-3`, iconClassName);

  return (  
    <>
      <input 
        type="text"
        name={name}
        className={classNames}
        {...rest}
      />
      <span className={IconclassNames}>
        search
      </span>
    </>
  );
}

export default InputSearch;
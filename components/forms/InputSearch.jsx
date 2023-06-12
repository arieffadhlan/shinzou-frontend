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
        className={`flex items-center gap-4 h-12 px-6 py-3 outline-none rounded-2xl bg-[#EEEEEE] text-sm text-neutral-3 placeholder:text-sm placeholder:text-neutral-3 ${className}`}
        {...rest}
      />
      <span className={`material-icons-round absolute top-3 right-4 text-neutral-3 ${iconClassName}`}>
        search
      </span>
    </>
  );
}

export default InputSearch;
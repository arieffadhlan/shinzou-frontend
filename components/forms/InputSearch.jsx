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
        className={`flex items-center gap-4 h-12 px-6 py-3 outline-none rounded-2xl bg-[#EEEEEE] text-sm text-[#8A8A8A] placeholder:text-sm placeholder:text-[#8A8A8A] ${className}`}
        {...rest}
      />
      <span className={`material-icons-round absolute top-3 right-4 text-[#8A8A8A] ${iconClassName}`}>
        search
      </span>
    </>
  );
}

export default InputSearch;
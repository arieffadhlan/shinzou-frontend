import Image from "next/image";

import searchIcon from "@/assets/icons/search.svg";

const InputSearch = ({ name, className = "", ...rest }) => {
  return (  
    <div className="relative">
      <input 
        type="text"
        name={name}
        id={name}
        className={`flex items-center gap-4 h-12 px-6 py-3 outline-none rounded-2xl bg-[#EEEEEE] text-sm text-[#8A8A8A] placeholder:text-sm placeholder:text-[#8A8A8A] ${className}`}
        {...rest}
      />
      <Image 
        src={searchIcon} 
        alt="Search" 
        className="absolute top-3 right-4"
      />
    </div>
  );
}

export default InputSearch;
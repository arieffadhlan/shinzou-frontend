const Label = ({ id, children }) => {
  return (
    <label 
      htmlFor={id}
      className="text-xs leading-[18px] text-black"
    >
      {children}
    </label>
  )
}

export default Label;
const Label = ({ id, children }) => {
  return (
    <label 
      htmlFor={id}
      className="text-xs text-black"
    >
      {children}
    </label>
  )
}

export default Label;
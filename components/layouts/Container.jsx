const Container = ({ htmlTag, children, className = "" }) => {
  const Tag = htmlTag ?? "section";
  
  return (
    <Tag className={`max-w-8xl px-5 mx-auto sm:px-16 md:px-32 2xl:pl-[260px] 2xl:pr-[212px] ${className}`}>
      {children}
    </Tag>
  )
}

export default Container;
const Container = ({ children, className = "" }) => {
  return (
    <section className={`px-5 sm:px-16 md:px-32 xl:pl-[260px] xl:pr-[212px] ${className}`}>
      {children}
    </section>
  )
}

export default Container;
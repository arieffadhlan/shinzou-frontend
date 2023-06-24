import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = ({ 
  validationSchema, 
  onSubmit, 
  children,
  ...props
}) => {
  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onSubmit"
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form;
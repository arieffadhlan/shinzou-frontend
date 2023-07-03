import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = ({ 
  validationSchema, 
  initialValues,
  onSubmit, 
  children,
  ...props
}) => {
  const formMethods = useForm({
    defaultValues: initialValues,
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
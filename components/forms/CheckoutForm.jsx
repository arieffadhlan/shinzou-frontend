import * as yup from "yup";

import PassangerForm from "./PassangerForm";
import UserForm from "./UserForm";
import Form from "../Form";

const validationSchema = yup.object().shape({
  title: yup.string().required("Title wajib diisi!"),
  name: yup.string().required("Email wajib diisi!"),
  family_name: yup.string().optional(),
  phone_number: yup.string().required("Password wajib diisi!"),
  email: yup.string().required("Password wajib diisi!")
});

 const CheckoutForm = () => {
  const handleFormSubmit = (formData) => {
    console.log(formData);
  }
  
  return (
    <Form 
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit} 
      className="flex flex-[60%] flex-col gap-9"
    >
      <UserForm />
      <PassangerForm />
    </Form>
  )
}

export default CheckoutForm;
import * as yup from "yup";

import Form from "../Form";
import PassangerForm from "./PassangerForm";
import SeatForm from "./SeatForm";
import UserForm from "./UserForm";
import Button from "../Button";

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
      <SeatForm />
      <Button 
        type="submit" 
        size="xl" 
        variant="primary" 
        className="w-full py-3.5 text-sm 2md:py-4 2md:text-xl"
      >
				Simpan
      </Button>
    </Form>
  )
}

export default CheckoutForm;
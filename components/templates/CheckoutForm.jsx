import * as yup from "yup";

import Form from "../molecules/Form";
import PassangerForm from "../organisms/forms/CheckoutPassangersForm";
import SeatForm from "../organisms/forms/CheckoutSeatForm";
import UserForm from "../organisms/forms/CheckoutUserForm";
import Button from "../atoms/Button";

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
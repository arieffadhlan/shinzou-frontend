import gopay from "@/assets/icons/payment-methods/gopay.svg";
import virtualAccount from "@/assets/icons/payment-methods/virtual-account.svg";
import creditCard from "@/assets/icons/payment-methods/credit-card.svg";

const paymentMethods = [
  {
    id: 1,
    name: "Gopay",
    image: gopay
  },
  {
    id: 2,
    name: "Virtual Account",
    image: virtualAccount
  },
  {
    id: 3,
    name: "Credit Card",
    image: creditCard
  }
];

export default paymentMethods;
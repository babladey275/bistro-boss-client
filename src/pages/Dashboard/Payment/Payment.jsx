import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl uppercase font-semibold text-center mb-8">
        Payment
      </h2>
      <div className="w-full max-w-2xl">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

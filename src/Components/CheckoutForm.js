import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

const CheckoutForm = ({ id }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      console.log("card a kichu nai");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message);
      console.log("[error]", error);
    } else {
      await fetch(`http://localhost:5000/order/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      console.log("payment success");
      console.log("[PaymentMethod]", paymentMethod);
      toast.success("Payment successful");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;

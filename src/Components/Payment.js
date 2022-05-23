import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1WQUDYNtBJbRGS01szmLyIorishP321r16xI9bZXmPlwDTnsuiUBplTfeMiWt5VTxk9ZPj75gHxx9qfaNrHmj600U9dpwbzX"
);

const Payment = () => {
  const { id } = useParams();
  // console.log(id);
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // const clickedItems = data.find((i) => i.name === name);
        // console.log(clickedItems);
        // setItem(clickedItems);
      });
  }, []);
  return (
    <div>
      <h1>Payments</h1>
      <h1>{id}</h1>
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{item?.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="card card-compact w-96 bg-base-100 shadow-xl mt-3">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm id={id} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

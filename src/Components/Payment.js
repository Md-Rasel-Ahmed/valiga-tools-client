import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_strip_pk_test);

const Payment = () => {
  const { id } = useParams();
  // console.log(id);
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetch("https://valiga-hardware.herokuapp.com/allOrder")
      .then((res) => res.json())
      .then((data) => {
        const clickedItems = data.find((i) => i._id === id);
        console.log(clickedItems);
        setItem(clickedItems);
      });
  }, []);
  return (
    <div>
      <h1>Payments</h1>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{item?.name}</h2>
          <p className="text-primary">Total Price :${item?.totalPrice}</p>
          <p className="text-primary">Quantity :{item?.quantity}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mt-3">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm id={id} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

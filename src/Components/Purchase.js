import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch("https://valiga-hardware.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        const clickedItems = data.find((i) => i._id === id);
        setItem(clickedItems);
      });
  }, []);
  // handle quantity change
  const handleQuantity = async (e) => {
    e.preventDefault();
    const quantity = parseInt(e.target.quantity.value);
    if (quantity < parseInt(item.minimumOrder)) {
      toast.error(`You must take a minimum of ${item.minimumOrder} products `);
      return;
    }
    if (quantity > parseInt(item.availableQuentity)) {
      toast.error(
        `You must take a maximum of ${item.availableQuentity} products `
      );
      return;
    }
    setQuantity(quantity);

    let totalPrice = item.price * quantity;
    setPrice(totalPrice);
    // console.log(totalPrice);
  };

  // handle purchase button click
  const handlePurchase = (e) => {
    e.preventDefault();
    const totalPrice = price || item?.price * item?.minimumOrder;
    fetch("https://valiga-hardware.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: user?.email,
        name: item?.name,
        price: item?.price,
        quantity: quantity || item?.minimumOrder,
        totalPrice: totalPrice,
        padi: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="grid lg:grid-cols-2 justify-items-center  p-5">
      <div>
        <h2 className="text-2xl font-bold text-primary py-2">
          Billing Information
        </h2>
        <hr />
        <form onSubmit={handlePurchase}>
          <div className="flex gap-2">
            <input
              required
              Name="email"
              type="email"
              value={user?.email}
              disabled
              class="input input-bordered mt-3 block w-100 "
            />
            <input
              required
              Name="name"
              type="text"
              value={user?.displayName}
              disabled
              class="input input-bordered mt-3 block w-100  "
            />
          </div>
          <h2 className="text-2xl font-bold text-primary py-2">
            Shipping Adress
          </h2>
          <hr />
          <div className="flex gap-2">
            <input
              Name="company"
              type="text"
              placeholder="Company (optional)"
              class="input input-bordered mt-3 block w-100 "
            />
            <input
              required
              Name="city"
              type="text"
              placeholder="City"
              class="input input-bordered mt-3 block w-100  "
            />
          </div>
          <div className="flex gap-2">
            <input
              required
              Name="postal"
              type="number"
              placeholder="Postal code"
              class="input input-bordered mt-3 block w-100 "
            />
            <select
              class="input input-bordered mt-3 block w-48	 "
              name="select"
              id=""
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="Bangladesh">India</option>
            </select>
          </div>
          <input
            required
            Name="phone"
            type="number"
            placeholder="Phone Number"
            class="input input-bordered mt-3 block w-96 "
          />
          <button type="submit" class="btn btn-dark btn-block mt-3 w-96">
            Purchase Now
          </button>
        </form>
      </div>
      <div>
        <p>Your oredes</p>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-32" src={item?.img} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{item?.name}</h2>
            <p>{item?.description}</p>
            <h2 className="text-2xl font-bold">
              Quantity :{quantity || item?.minimumOrder}
            </h2>
            <h2 className="text-2xl font-bold">
              Total Price :${price || item?.price * item?.minimumOrder}
            </h2>

            <form onSubmit={handleQuantity} className="flex gap-2">
              <input
                required
                Name="quantity"
                type="number"
                min="0"
                placeholder="New quantity type..."
                class="input input-bordered mt-3 block w-40 "
              />
              <button type="submit" class="btn btn-dark  mt-3 w-40">
                Update Quantity
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

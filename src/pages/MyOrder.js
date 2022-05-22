import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import Loading from "../Components/Loading";
import { useQuery } from "react-query";
import auth from "../firebase.init";
const MyOrder = () => {
  //   const [myOrder, setMyOrder] = useState([]);
  const [user] = useAuthState(auth);
  const date = new Date();
  const {
    isLoading,
    error,
    data: myOrder,
    refetch,
  } = useQuery("order", () =>
    fetch(`http://localhost:5000/order?email=${user.email}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  function fetching(id) {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  const removeOrder = (id) => {
    // console.log(id);
    let deleteItem = myOrder?.find((item) => item._id === id);
    if (deleteItem.paid === true) {
      fetching(id);
      refetch();

      refetch();
    } else {
      fetching(id);
      refetch();
    }
  };

  return (
    <div>
      {myOrder?.length > 0 ? (
        <div class="overflow-x-auto w-full">
          <table class="table w-full ">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>Email</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Item Quantity</th>
                <th>Payment</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {myOrder?.map((item) => {
                return (
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" class="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div class="font-bold">{item.email}</div>
                      {/* <div class="text-sm opacity-50">United States</div> */}
                    </td>
                    <td>{item.name}</td>
                    <td>${item.totalPrice}</td>

                    <td>{item.quantity}</td>
                    <td>
                      <button
                        class={item.paid ? "btn btn-accent" : "btn btn-primary"}
                      >
                        {item.paid ? (
                          <label for="my-modal-4">Paid</label>
                        ) : (
                          <Link to={`/dasboard/payment/${item._id}`}>Pay</Link>
                        )}
                      </button>
                    </td>
                    <td>
                      {/* <a
                        onClick={() => removeOrder(item._id)}
                        href={item.paid && "#my-modal-2"}
                        class="btn"
                      >
                        Cancle
                      </a> */}

                      <button className=" btn btn-error text-white">
                        Cencle
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/* <!-- foot --> */}
          </table>
        </div>
      ) : (
        <h2 className="text-xl font-bold text-accent">Your Orders Are Emty</h2>
      )}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative " for="">
          <form action="">
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              class="input input-bordered mt-3 block"
            />
            <button type="submit" class="btn btn-primary mt-2">
              JOIN
            </button>
          </form>
        </label>
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <div class="modal" id="my-modal-2">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <a href="#" class="btn btn-error">
              Yes
            </a>
            <a href="#" class="btn btn-success">
              No
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;

import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import Loading from "../Components/Loading";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import Modal from "../Components/Modal";
const MyOrder = () => {
  //   const [myOrder, setMyOrder] = useState([]);
  const [user] = useAuthState(auth);
  const [storeId, setStoreId] = useState("");
  const date = new Date();
  const {
    isLoading,
    error,
    data: myOrder,
    refetch,
  } = useQuery("order", () =>
    fetch(
      `https://valiga-hardware.herokuapp.com/order?email=${user.email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  function fetching(id) {
    fetch(`https://valiga-hardware.herokuapp.com/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  }

  const removeOrder = (id) => {
    // console.log(id);
    let deleteItem = myOrder?.find((item) => item._id === id);
    if (deleteItem.paid === true) {
      fetching(id);
      // refetch();
    } else {
      fetching(id);
    }
  };
  //delete item using modal dialog
  const handleDeleteWithConfirmation = (id) => {
    // console.log(id);
    let deleteItem = myOrder?.find((item) => item._id === id);
    if (deleteItem.paid === true) {
      fetching(id);
      // refetch();
    } else {
      fetching(id);
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
                        class={
                          item.paid ? "btn btn-success" : "btn btn-primary"
                        }
                      >
                        {item.paid ? (
                          <button className="btn btn-success">Paid</button>
                        ) : (
                          <Link to={`/dasboard/payment/${item._id}`}>Pay</Link>
                        )}
                      </button>
                    </td>
                    <td>
                      {item.paid ? (
                        // <a
                        //   onClick={() => removeOrder(item._id)}
                        //   class="btn btn-error"
                        // >
                        //   Cancle
                        // </a>
                        ""
                      ) : (
                        <label
                          for="my-modal"
                          onClick={() => setStoreId(item._id)}
                          class="btn modal-button btn-error"
                        >
                          Cancle
                        </label>
                      )}
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
      {/* modal for delete confirmation  */}
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete this item?
          </h3>

          <div class="modal-action">
            <label
              // onClick={handleDeleteWithConfirmation}
              for="my-modal"
              class="btn btn-accent"
            >
              No
            </label>
            <label
              onClick={() => handleDeleteWithConfirmation(storeId)}
              for="my-modal"
              class="btn btn-error"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;

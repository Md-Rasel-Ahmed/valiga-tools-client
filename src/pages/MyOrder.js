import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import Loading from "../Components/Loading";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import Modal from "../Components/Modal";
import { toast } from "react-toastify";
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
        refetch();
      });
  }

  //delete item using modal dialog
  const handleDeleteWithConfirmation = (id) => {
    // console.log(id);
    let deleteItem = myOrder?.find((item) => item._id === id);
    if (deleteItem.paid === true) {
      fetching(id);

      // refetch();
    } else {
      toast.error(`${deleteItem.name} has been deleted`);
      fetching(id);
    }
  };

  return (
    <div>
      {myOrder?.length > 0 ? (
        <div className="overflow-x-auto mt-5">
          <table className="able table-compact w-full ">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Email</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Item Quantity</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myOrder?.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>
                      <div className="font-bold">{item.email}</div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </td>
                    <td>{item.name}</td>
                    <td>${item.totalPrice}</td>

                    <td>{item.quantity}</td>
                    <td>
                      <button
                        className={
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
                        <a href="#">{item.tnxId}</a>
                      ) : (
                        <label
                          for="my-modal"
                          onClick={() => setStoreId(item._id)}
                          className="btn modal-button btn-error"
                        >
                          Cancle
                        </label>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-xl font-bold text-accent">Your Orders Are Emty</h2>
      )}
      {/* modal for delete confirmation  */}
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this item?
          </h3>

          <div className="modal-action">
            <label
              // onClick={handleDeleteWithConfirmation}
              for="my-modal"
              className="btn btn-accent"
            >
              No
            </label>
            <label
              onClick={() => handleDeleteWithConfirmation(storeId)}
              for="my-modal"
              className="btn btn-error"
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

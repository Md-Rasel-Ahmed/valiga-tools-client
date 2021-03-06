import React from "react";
import { useQuery } from "react-query";
import Loading from "./Loading";

const MangeAllOrder = () => {
  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery("order", () =>
    fetch(`https://valiga-hardware.herokuapp.com/allOrder`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }

  const handleShipped = (id) => {
    fetch(`https://valiga-hardware.herokuapp.com/allOrder/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => refetch());
  };
  return (
    <div>
      <h2>Mange all orders</h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full ">
            {/* <!-- head --> */}
            <thead>
              <tr>
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
              {orders?.map((item) => {
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
                      {item.paid ? (
                        <button
                          disabled={item.status}
                          onClick={() => handleShipped(item._id)}
                          className="btn btn-accent"
                        >
                          {item.status ? "Shipped" : " Panding"}
                        </button>
                      ) : (
                        <button className="btn btn-warning">Unpaid</button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/* <!-- foot --> */}
          </table>
        </div>

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
                // onClick={() => handleDeleteWithConfirmation(storeId)}
                for="my-modal"
                className="btn btn-error"
              >
                Yes
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangeAllOrder;

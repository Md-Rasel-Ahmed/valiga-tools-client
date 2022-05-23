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
    fetch(`http://localhost:5000/allOrder`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Mange all orders</h2>
      <div>
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
              {orders?.map((item) => {
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
                      {/* <button
                          class={
                            item.paid ? "btn btn-success" : "btn btn-primary"
                          }
                        >
                          {item.paid ? (
                            <button className="btn btn-success">Paid</button>
                          ) : (
                            <Link to={`/dasboard/payment/${item._id}`}>
                              Pay
                            </Link>
                          )}
                        </button> */}
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
                // onClick={() => handleDeleteWithConfirmation(storeId)}
                for="my-modal"
                class="btn btn-error"
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

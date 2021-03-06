import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "./Loading";

const ManageProduct = () => {
  const [storeId, setStoreId] = useState("");

  const { isLoading, error, data, refetch } = useQuery("user", () =>
    fetch(`https://valiga-hardware.herokuapp.com`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  //delete item using modal dialog
  const handleDeleteWithConfirmation = (id) => {
    fetch(`https://valiga-hardware.herokuapp.com/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  return (
    <div>
      <h2>Manage product</h2>
      <div>
        <h2>All Users {data.length}</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th> Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {data?.map((product) => {
                return (
                  <tr key={product._id}>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <h1>{product.name}</h1>
                    </td>
                    <td>
                      <p>{product.price}</p>
                    </td>
                    <td>
                      <label
                        for="deleteProductModal"
                        onClick={() => setStoreId(product._id)}
                        className="btn modal-button btn-error"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </label>

                      {/* <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button> */}
                    </td>
                    {/* <th>
                      <button
                        onClick={() => handleMakeAdmin(user.email)}
                        className="btn btn-ghost btn-xs"
                      >
                        {user.role === "user" && " Make Admin"}
                      </button>
                    </th> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <input type="checkbox" id="deleteProductModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this item?
          </h3>

          <div className="modal-action">
            <label
              // onClick={handleDeleteWithConfirmation}
              for="deleteProductModal"
              className="btn btn-accent"
            >
              No
            </label>
            <label
              onClick={() => handleDeleteWithConfirmation(storeId)}
              for="deleteProductModal"
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

export default ManageProduct;

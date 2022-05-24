import React, { useState } from "react";
import { useForm } from "react-hook-form";
const AddProduct = () => {
  const {
    register,
    resetField,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imgKey = "adbb7d7935ea9c40a8b8dfa8127a1bdc";

  const onSubmit = async (data) => {
    const image = data.file[0];
    const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
    const formData = new FormData();
    formData.append("image", image);
    let imgStored = "";
    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => (imgStored = result.data.url));

    fetch("https://valiga-hardware.herokuapp.com/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.ProductName,
        description: data.productDescription,
        img: imgStored,
        minimumOrder: data.minimumOrder,
        availableQuentity: data.availableQuantity,
        price: data.price,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="py-5 flex justify-center">
      <div>
        <h3 className="text-3xl text-center">Add New Product</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="w-80 py-5">
          <input
            {...register("ProductName", { required: true, minLength: 3 })}
            type="text"
            placeholder="Product Name"
            class={`input input-bordered mt-3 block w-80 ${
              errors.ProductName?.type && "border-red-400"
            }`}
          />
          {errors.ProductName?.type === "required" && (
            <small className="text-error mt-1">Product Name is required</small>
          )}
          {errors.ProductName?.type === "minLength" && (
            <small className="text-error mt-1">
              Name must be at least 3 characters or longer
            </small>
          )}

          <textarea
            {...register("productDescription", {
              required: true,
            })}
            // type="email"
            placeholder="Product Description"
            class={`input input-bordered mt-3 block w-80 ${
              errors.productDescription?.type && "border-red-400"
            }`}
            id=""
            cols="30"
            rows="10"
          ></textarea>
          {errors.productDescription?.type === "required" && (
            <small className="text-error mt-1">
              Product description is required
            </small>
          )}

          <input
            {...register("minimumOrder", {
              required: true,
            })}
            type="number"
            min="0"
            placeholder="Minimum orders quantity"
            class="input input-bordered mt-3 block  w-80"
          />
          {errors.minimumOrder?.type === "required" && (
            <small className="text-error mt-1">
              Minimum Order Quantity is required
            </small>
          )}

          <input
            {...register("availableQuantity", {
              required: true,
            })}
            type="number"
            min="0"
            placeholder="Available quantity"
            class="input input-bordered mt-3 block  w-80"
          />
          {errors.availableQuantity?.type === "required" && (
            <small className="text-error mt-1">
              Available Quantity is required
            </small>
          )}

          <input
            {...register("price", { required: true })}
            type="number"
            min="0"
            placeholder="Product Price"
            class="input input-bordered mt-3 block  w-80"
          />
          {errors.price?.type === "required" && (
            <small className="text-error mt-1">Product Price is required</small>
          )}
          <p>Product Image</p>
          <input
            {...register("file", { required: true })}
            type="file"
            class="input input-bordered mt-3 block  w-80"
          />
          <button type="submit" class="btn btn-dark btn-block mt-3 w-80">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

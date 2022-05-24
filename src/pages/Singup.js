import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";

const Singup = () => {
  const [passwordVal, setPasswordVal] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, upError] = useUpdateProfile(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const {
    register,
    resetField,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  const imgKey = "adbb7d7935ea9c40a8b8dfa8127a1bdc";

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.file[0];
    const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
    const formData = new FormData();
    formData.append("image", image);

    if (data.password !== data.confirmPassword) {
      alert("password did not match");
      return;
    }
    if (error) {
      alert(error.message);
      return;
    }
    if (!error) {
      await createUserWithEmailAndPassword(data.email, data.password);
      let imgStored = "";
      await fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => (imgStored = result.data.url));
      await updateProfile({
        photoURL: imgStored,
        displayName: data.fullName,
        phoneNumber: data.phone,
      });
      await sendEmailVerification(data.email);
      fetch("https://valiga-hardware.herokuapp.com/user", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          image: imgStored,
          phone: data.phone,
          role: "user",
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    // data.target.reset();
  };
  // console.log(errors);
  return (
    <div className="py-5 flex justify-center">
      <div>
        <h3 className="text-3xl text-center">Singup Now</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="w-80 py-5">
          <input
            {...register("fullName", { required: true, minLength: 3 })}
            type="text"
            placeholder="Full Name"
            class={`input input-bordered mt-3 block w-80 ${
              errors.fullName?.type && "border-red-400"
            }`}
          />
          {errors.fullName?.type === "required" && (
            <small className="text-error mt-1">Full Name is required</small>
          )}
          {errors.fullName?.type === "minLength" && (
            <small className="text-error mt-1">
              Name must be at least 3 characters or longer
            </small>
          )}

          <input
            {...register("email", {
              required: true,
              pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            })}
            // type="email"
            placeholder="email"
            class={`input input-bordered mt-3 block w-80 ${
              errors.email?.type && "border-red-400"
            }`}
          />
          {errors.email?.type === "required" && (
            <small className="text-error mt-1">Email is required</small>
          )}
          {errors.email?.type === "pattern" && (
            <small className="text-error mt-1">Invalid email address</small>
          )}
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            type="password"
            placeholder="Password"
            onBlur={(e) => setPasswordVal(e.target.value)}
            class="input input-bordered mt-3 block  w-80"
          />
          {errors.password?.type === "required" && (
            <small className="text-error mt-1">Password is required</small>
          )}
          {errors.password?.type === "minLength" && (
            <small className="text-error mt-1">
              Password must be at least 8 characters
            </small>
          )}
          <input
            {...register("confirmPassword", {
              required: true,
              value: passwordVal,
            })}
            type="password"
            placeholder="Confirm Password"
            class="input input-bordered mt-3 block  w-80"
          />
          {errors.confirmPassword?.type === "required" && (
            <small className="text-error mt-1">
              Confirm Password is required
            </small>
          )}
          {errors.confirmPassword?.value === "value" && (
            <small className="text-error mt-1">
              Confirm passoword did not match
            </small>
          )}
          <input
            {...register("phone", { required: true })}
            type="phone"
            placeholder="Phone Number"
            class="input input-bordered mt-3 block  w-80"
          />
          <input
            {...register("file", { required: true })}
            type="file"
            class="input input-bordered mt-3 block  w-80"
          />
          <button type="submit" class="btn btn-dark btn-block mt-3 w-80">
            SINGUP
          </button>
          <p>
            Already have an account?
            <Link className="text-primary" to="/login">
              Login
            </Link>
          </p>
          <div class="divider">OR</div>
        </form>
        <button className="btn btn-outline btn-accent w-80">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Singup;

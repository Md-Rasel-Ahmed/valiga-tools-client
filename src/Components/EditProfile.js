import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const EditProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <form className="py-5">
        <p>Full Name</p>
        <input
          type="text"
          name="name"
          placeholder={user?.displayName}
          class="input input-bordered mt-3 block  w-80"
        />
        <input
          type="email"
          name="email"
          placeholder={user?.email}
          class="input input-bordered mt-3 block  w-80"
        />
        <input
          type="number"
          name="number"
          placeholder={user?.phoneNumber}
          class="input input-bordered mt-3 block  w-80"
        />
        <p>Select your Education level</p>
        <textarea
          id=""
          cols="30"
          rows="10"
          type="text"
          name="School or collage "
          placeholder="Institution Name"
          class="input input-bordered mt-3 block  w-80"
        ></textarea>
        <input />
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="input input-bordered mt-3 block  w-80"
        />
        <button type="submit" class="btn btn-dark btn-block mt-3 ">
          Save And Change
        </button>
      </form>
    </div>
  );
};

export default EditProfile;

import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useCurrentUser from "../Hooks/userCurrentUser";

const EditProfile = () => {
  const [currentUser] = useCurrentUser();

  const [name, setName] = useState(currentUser?.name);
  const [phone, setPhone] = useState(currentUser?.phone);
  const [location, setLocation] = useState("");
  const [fbLink, setFbLink] = useState("");
  console.log(currentUser);
  // update user profiles
  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/user", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: currentUser?.email,
        phone: phone,
        location: location,
        fbLink: fbLink,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form onSubmit={handleUpdateUserProfile} className="py-5">
        <p>Full Name</p>
        <input
          required
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          class="input input-bordered mt-3 block  w-80"
        />
        <input
          type="email"
          name="email"
          value={currentUser?.email}
          disabled
          class="input input-bordered mt-3 block  w-80"
        />
        <p>Phone Number</p>
        <input
          type="phone"
          name="number"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
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
        <p>Location</p>
        <input
          type="location"
          name="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="location"
          class="input input-bordered mt-3 block  w-80"
        />
        <p>Fb Profile Link </p>
        <input
          type="fbProfile"
          name="text"
          onChange={(e) => setFbLink(e.target.value)}
          value={fbLink}
          placeholder="Fb Profile link"
          class="input input-bordered mt-3 block  w-80"
        />
        <input />

        <button type="submit" class="btn btn-dark btn-block mt-3 ">
          Save And Change
        </button>
      </form>
    </div>
  );
};

export default EditProfile;

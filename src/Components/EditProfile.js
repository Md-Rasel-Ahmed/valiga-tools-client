import React, { useState } from "react";
import useCurrentUser from "../Hooks/userCurrentUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [currentUser] = useCurrentUser();
  const [name, setName] = useState(currentUser?.name);
  const [phone, setPhone] = useState(currentUser?.phone);
  const [location, setLocation] = useState("");
  const [fbLink, setFbLink] = useState("");

  const navigate = useNavigate();
  // update user profiles
  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    fetch("https://valiga-hardware.herokuapp.com/user", {
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
      .then((data) => {
        toast.success("Profile update successful");
        navigate("/dasboard/myprofile");
      });
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
          className="input input-bordered mt-3 block  w-80"
        />
        <input
          type="email"
          name="email"
          value={currentUser?.email}
          disabled
          className="input input-bordered mt-3 block  w-80"
        />
        <p>Phone Number</p>
        <input
          type="phone"
          name="number"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="input input-bordered mt-3 block  w-80"
        />
        <p>Select your Education level</p>
        <textarea
          id=""
          cols="30"
          rows="10"
          type="text"
          name="School or collage "
          placeholder="Institution Name"
          className="input input-bordered mt-3 block  w-80"
        ></textarea>
        <p>Location</p>
        <input
          type="location"
          name="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="location"
          className="input input-bordered mt-3 block  w-80"
        />
        <p>Fb Profile Link </p>
        <input
          type="fbProfile"
          name="text"
          onChange={(e) => setFbLink(e.target.value)}
          value={fbLink}
          placeholder="Fb Profile link"
          className="input input-bordered mt-3 block  w-80"
        />
        <input />

        <button type="submit" className="btn btn-dark btn-block mt-3 ">
          Save And Change
        </button>
      </form>
    </div>
  );
};

export default EditProfile;

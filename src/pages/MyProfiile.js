import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import useCurrentUser from "../Hooks/userCurrentUser";

const MyProfiile = () => {
  const [currentUser] = useCurrentUser();
  console.log(currentUser);
  return (
    <div className="py-5 flex justify-center gap-5">
      <div>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={currentUser?.image} />
          </div>
        </div>
      </div>

      <div>
        <p>Full Name</p>
        <h1 className="text-xl font-bold mb-2">{currentUser?.name}</h1>
        <p>Email Adress</p>
        <h1 className="text-xl font-bold mb-2">{currentUser?.email}</h1>
        <p>Phone Number</p>
        <h1 className="text-xl font-bold mb-2">{currentUser?.phone}</h1>
        <Link to="/dasboard/myprofile/eidtprofile" className="btn btn-primary">
          Edit your profile
        </Link>
      </div>
    </div>
  );
};

export default MyProfiile;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const MyProfiile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="py-5 flex justify-center gap-5">
      <div>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
      </div>

      <div>
        <p>Full Name</p>
        <h1 className="text-xl font-bold mb-2">{user?.displayName}</h1>
        <p>Email Adress</p>
        <h1 className="text-xl font-bold mb-2">{user?.email}</h1>
        <p>Phone Number</p>
        <h1 className="text-xl font-bold mb-2">{user?.phoneNumber}</h1>
        <Link to="/dasboard/myprofile/eidtprofile" className="btn btn-primary">
          Edit your profile
        </Link>
      </div>
    </div>
  );
};

export default MyProfiile;

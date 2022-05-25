import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Link } from "react-router-dom";
import auth from "../firebase.init";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`https://valiga-hardware.herokuapp.com/user?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const currentUser = data.find((u) => u.email === user.email);
          setCurrentUser(currentUser);
        });
    }
  }, [user]);
  // console.log(users);
  return (
    <div>
      {/* <label className="xdrawer-button lg:hidde">Open drawer</label> */}
      <label
        htmlFor="my-drawer-2"
        tabIndex="0"
        className="btn btn-ghost btn-circle lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>

        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            {currentUser?.role === "user" && (
              <>
                <li>
                  <Link to="myorder">My Orders</Link>
                </li>
                <li>
                  <Link to="addreview">Add Review </Link>
                </li>
              </>
            )}
            <li>
              <Link to="myprofile">My Profile </Link>
            </li>
            {currentUser?.role === "admin" && (
              <>
                <li>
                  <Link to="manageorder">Manage All Orders</Link>
                </li>
                <li>
                  <Link to="addproduct">Add A Product</Link>
                </li>
                <li>
                  <Link to="makeadmin">Make Admin</Link>
                </li>
                <li>
                  <Link to="manageproduct">Manage Products</Link>
                </li>
              </>
            )}

            {currentUser?.role === "doctor" && (
              <li>
                <Link to="patient">My Patients</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

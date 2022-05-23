import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Link } from "react-router-dom";
import auth from "../firebase.init";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/user?email=${user.email}`)
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
      <label for="my-drawer-2" className="xdrawer-button lg:hidde">
        <div>Open</div>
      </label>

      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center ">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>

        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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

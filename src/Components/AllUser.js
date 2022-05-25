import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import Loading from "../Components/Loading";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const AllUsers = () => {
  // const [users, setUsers] = useState([]);
  const [currentUser] = useAuthState(auth);
  const navigate = useNavigate();
  const { isLoading, error, data, refetch } = useQuery("user", () =>
    fetch(`https://valiga-hardware.herokuapp.com/user`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(data?.message);
  if (data?.message === "forbidden") {
    signOut(auth);
    navigate("/login");
    window.location.reload();
    return;
  }
  if (isLoading) {
    return <Loading />;
  }
  // handle make Admin
  const handleMakeAdmin = (email) => {
    fetch(`https://valiga-hardware.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => refetch());
  };
  console.log("rasel");
  return (
    <div>
      <h2>All Users {data.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th> Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {data?.map((user) => {
              return (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        {user.email === currentUser.email &&
                          user.role === "admin" && (
                            <button className="btn btn-xs">Me</button>
                          )}
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className={
                        user.role === "admin" ? "text-accent" : "text-primary"
                      }
                    >
                      {user.role}
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() => handleMakeAdmin(user.email)}
                      className="btn btn-ghost btn-xs"
                    >
                      {user.role === "user" && " Make Admin"}
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

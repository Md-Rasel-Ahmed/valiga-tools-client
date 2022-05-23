import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import Loading from "../Components/Loading";

const AllUsers = () => {
  // const [users, setUsers] = useState([]);
  const [currentUser] = useAuthState(auth);
  const { isLoading, error, data, refetch } = useQuery("user", () =>
    fetch(`http://localhost:5000/user`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  // handle make Admin
  const handleMakeAdmin = (email) => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => refetch());
  };
  console.log("rasel");
  return (
    <div>
      <h2>All Users {data.length}</h2>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
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
                <tr>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src={user.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">{user.name}</div>
                        {user.email === currentUser.email &&
                          user.role === "admin" && (
                            <button class="btn btn-xs">Me</button>
                          )}
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      class={
                        user.role === "admin" ? "text-accent" : "text-primary"
                      }
                    >
                      {user.role}
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() => handleMakeAdmin(user.email)}
                      class="btn btn-ghost btn-xs"
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

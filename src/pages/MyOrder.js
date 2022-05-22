import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";

const MyOrder = () => {
  const [myAppoinments, setMyAppoinments] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const date = new Date();
  let formateDAte = format(date, "PP");
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/userAppoinment?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyAppoinments([...data].reverse());
        });
    }
  }, [user]);

  const handlePayments = () => {};
  return (
    <div>
      {myAppoinments.length > 0 ? (
        <div class="overflow-x-auto w-full">
          <table class="table w-full ">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>Email</th>
                <th>Appoinemnt Name</th>
                <th>Appoinment time</th>
                <th>Appoinment Date</th>
                <th>Payment</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {myAppoinments?.map((a) => {
                return (
                  <tr className={a.date !== formateDAte && "line-through"}>
                    <th>
                      <label>
                        <input type="checkbox" class="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div class="font-bold">{a.email}</div>
                      {/* <div class="text-sm opacity-50">United States</div> */}
                    </td>
                    <td>{a.servicesName}</td>
                    <td>{a.time}</td>

                    <td>{a.date}</td>
                    <td>
                      <button
                        class={a.paid ? "btn btn-accent" : "btn btn-primary"}
                        disabled={a.date !== formateDAte}
                      >
                        {a.paid ? (
                          <label for="my-modal-4">Zoom link here</label>
                        ) : (
                          <Link to={`/profile/payment/${a._id}`}>
                            Pay for appointment
                          </Link>
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/* <!-- foot --> */}
          </table>
        </div>
      ) : (
        <h2 className="text-xl font-bold text-accent">
          Your Appoinments Are Emty
        </h2>
      )}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative " for="">
          <form action="">
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              class="input input-bordered mt-3 block"
            />
            <button type="submit" class="btn btn-primary mt-2">
              JOIN
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};

export default MyOrder;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import logo from "../../src/images/logo.svg";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className="navbar bg-primary text-neutral-content ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-primary rounded-box w-52"
            >
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>

              {!user?.email && (
                <li className="btn btn-dark">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
          <Link to="/">
            <img className="text-white" width="150" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>

            {!user?.email && (
              <li className="btn btn-dark">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        {user?.email && (
          <div className="navbar-end ">
            <div className="dropdown dropdown-end flex ">
              <button class="btn ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <div class="badge badge-secondary">0</div>
              </button>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-primary rounded-box w-52"
              >
                <li>Please payment your order</li>
              </ul>
            </div>
            <div className="dropdown dropdown-end flex ">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-primary rounded-box w-52"
              >
                <li>
                  <Link to="/dasboard/myprofile">Dashboard</Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => signOut(auth)}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

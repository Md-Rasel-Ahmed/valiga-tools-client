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
      <div class="navbar bg-primary text-neutral-content">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-primary rounded-box w-52"
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
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
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
          <div class="navbar-end">
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-primary rounded-box w-52"
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

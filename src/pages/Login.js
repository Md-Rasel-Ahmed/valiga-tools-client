import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(
      e.target.email.value,
      e.target.password.value
    );
    if (error) {
      alert(error.message);
    }
  };
  return (
    <div className="py-5 flex justify-center">
      <div>
        <h3 className="text-3xl text-center">Login</h3>
        <form onSubmit={(e) => handleLogin(e)} className="w-80 py-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            class="input input-bordered mt-3 block w-80 "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            class="input input-bordered mt-3 block  w-80"
          />

          <p>
            <Link className="text-primary" to="/singup">
              Forget password?
            </Link>
          </p>
          <button type="submit" class="btn btn-dark btn-block mt-3 w-80">
            LOGIN
          </button>
          <p>
            New to Doctors Portal?
            <Link className="text-primary" to="/singup">
              Create new account
            </Link>
          </p>
          <div class="divider">OR</div>
        </form>
        <button className="btn btn-outline btn-accent w-80">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;

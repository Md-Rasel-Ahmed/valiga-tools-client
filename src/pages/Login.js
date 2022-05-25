import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (gUser) {
      fetch("https://valiga-hardware.herokuapp.com/user", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: gUser?.user?.displayName,
          email: gUser?.user?.email,
          image: gUser?.user?.photoURL,
          phone: gUser?.user?.phoneNumber,
          role: "user",
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    if (user || gUser) {
      navigate("/");
    }

    if ((error, gError)) {
      toast.error(error.message.slice(22, -2));
    }
  }, [error, gUser, gError, user]);
  let from = location.state?.from?.pathname || "/";
  if (user || gUser) {
    navigate(from, { replace: true });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(
      e.target.email.value,
      e.target.password.value
    );

    await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ email: e.target.email.value }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("accessToken", data.accessToken);
      });

    // const { data } = await axios.post("http://localhost:5000/login", {
    //   email: e.target.email.value,
    // });
    // console.log(data);
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

          {/* <p>
            <Link className="text-primary" to="/singup">
              Forget password?
            </Link>
          </p> */}
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
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline btn-accent w-80"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;

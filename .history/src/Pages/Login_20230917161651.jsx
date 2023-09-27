import React, { useState } from "react";
import { FiLoader, FiEye, FiEyeOff } from "react-icons/fi";
import Toast from "../components/Toast";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../helpers/config/firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
    } catch (err) {
      console.error(err);
    }
  };
  const signInWithGoogle = async () => {
    // console.log("bisa");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
      showToast(err.message);
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);

    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      showToast("Email tidak valid");
      return;
    }

    if (formData.password.length < 6) {
      showToast("Password harus memiliki setidaknya 6 karakter");
      return;
    }

    setIsLoading(true);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        showToast("Welcome back " + user.displayName + "!!!");

        // navigate("/home");
        // console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        showToast(errorMessage);
      });

    setIsLoading(false);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <>
      {isToastVisible && (
        <Toast
          message={toastMessage}
          onClose={() => setIsToastVisible(false)}
        />
      )}
      <div className="flex h-screen md:flex-none xl:justify-center lg:justify-center justify-center items-center flex-wrap">
        <div className="hidden lg:flex lg:w-3/5 items-center relative">
          <div className="bg-indigo-400 w-full h-screen">
            <div className="bg-white bg-opacity-60 w-2/3 h-2/3 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
              <div
                className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-2/5 flex flex-col justify-start items-start w-1/2"
                style={{ marginLeft: "-50px" }}
              >
                <div className="font-inter text-4xl font-semibold text-white leading-58">
                  <div className="whitespace-pre-line">
                    Lorem ipsum dolor si
                  </div>
                  <div className="mb-4">
                    amet{" "}
                    <p className="text-black font-inter text-4xl font-semibold">
                      consectetur
                    </p>
                  </div>
                </div>

                <div className="font-inter text-sm">
                  <div className="whitespace-pre-line">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor do
                  </div>
                  <div className="whitespace-pre-line">
                    incididunt ut labore et dolore magna
                  </div>
                  <div className="whitespace-pre-line">aliqua.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 w-full px-4 md:px-0 items-center my-8">
          <div className="lg:px-12 md:mx-12">
            <p className="font-inter text-2xl font-bold">Hello</p>
            <p className="font-inter text-sm mb-10">
              Enter your email and password to login.
            </p>
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
              <div className="flex flex-col gap-1">
                <p className="font-inter text-xs font-semibold">Email</p>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  id="emailInput"
                  className="form control w-full bg-white px-4 py-2 text-sm text-gray-600 rounded-lg border border-gray-200 focus:text-text-gray-800 focus:outline-gray-100"
                  placeholder="example: johndee@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-inter text-xs font-semibold">Password</p>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    id="passwordInput"
                    className="form control w-full bg-white pl-4 pr-10 py-2 text-sm text-neutral-3 rounded-lg border border-gray-200 focus:text-text-gray-800 focus:outline-gray-100 active:bg-white"
                    placeholder="Input password"
                  />
                  <FiEye
                    onClick={() => setShowPassword(true)}
                    className={`${
                      showPassword ? "hidden" : ""
                    } absolute right-3 top-2.5 text-neutral-3`}
                  />
                  <FiEyeOff
                    onClick={() => setShowPassword(false)}
                    className={`${
                      showPassword ? "" : "hidden"
                    } absolute right-3 top-2.5 text-neutral-3`}
                  />
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        className="text-purple-4 rounded"
                      />
                      <label
                        htmlFor="rememberMe"
                        className="font-inter text-sm text-gray-600"
                      >
                        Remember Me
                      </label>
                    </div>
                    <div className="ml-auto">
                      <button
                        type="button"
                        className="font-inter text-gray-600 underline hover:text-gray-800 font-base py-2 focus:outline-none"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-2">
                <button
                  className={`flex justify-center items-center bg-indigo-400 px-6 py-3 text-white font-normal text-sm leading-tight rounded-lg 
    focus:shadow-lg focus:outline-none active:shadow-lg w-1/2 disabled:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 relative`}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <FiLoader className="animate-spin text-white mr-2" />
                    </span>
                  )}
                  {isLoading ? "Logging in..." : "Login"}
                </button>

                <Link
                  to="/register"
                  className="flex justify-center items-center border border-indigo-300 px-6 py-3 text-indigo-400 font-normal text-sm leading-tight rounded-lg
            focus:shadow-lg focus:outline-none active:shadow-lg w-1/2 disabled:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                  type="button"
                >
                  Sign Up
                </Link>
              </div>

              <div className="text-center text-sm">
                <p>Or, login with</p>
              </div>
              <div className="flex items-center justify-between gap-2 pt-2">
                <button
                  className="flex justify-center items-center border border-indigo-300 px-6 py-2 text-indigo-400 font-normal text-sm leading-tight rounded-lg
    focus:shadow-lg focus:outline-none active:shadow-lg w-1/2 disabled:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#039be5"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    ></path>
                  </svg>
                  <span className="pl-1">Facebook</span>
                </button>
                <button
                  className="flex justify-center items-center border border-indigo-300 px-6 py-2 text-indigo-400 font-normal text-sm leading-tight rounded-lg
    focus:shadow-lg focus:outline-none active:shadow-lg w-1/2 disabled:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0078d4"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                    ></path>
                    <path
                      d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                      opacity=".05"
                    ></path>
                    <path
                      d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                      opacity=".07"
                    ></path>
                    <path
                      fill="#fff"
                      d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                    ></path>
                  </svg>
                  <span className="pl-1">Linkedin</span>
                </button>
                <button
                  className="flex justify-center items-center border border-indigo-300 px-6 py-2 text-indigo-400 font-normal text-sm leading-tight rounded-lg
    focus:shadow-lg focus:outline-none active:shadow-lg w-1/2 disabled:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                  type="button"
                  onClick={signInWithGoogle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  <span className="pl-1">Google</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

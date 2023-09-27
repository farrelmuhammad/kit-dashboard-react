import React, { useState } from "react";
import Toast from "../components/Toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../helpers/config/firebase";
import { FiLoader, FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
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

    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
    } catch (err) {
      console.error(err);
      showToast(err.message);
    }

    setIsLoading(false);

    // setTimeout(() => {
    //   setIsLoading(false);
    //   setIsLoggedIn(true);
    //   showToast("Login berhasil");
    // }, 2000);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  return (
    <>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor do
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

                  <button
                    className="flex justify-center items-center border border-indigo-300 px-6 py-3 text-indigo-400 font-normal text-sm leading-tight rounded-lg
            focus:shadow-lg focus:outline-none active:shadow-lg w-1/2 disabled:opacity-70 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Register;

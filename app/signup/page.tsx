"use client";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useState } from "react";
import PocketBase from "pocketbase";

import styles from "./signup.module.css";
import Link from "next/link";

const pb = new PocketBase("http://127.0.0.1:8090");

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const registerUser = async () => {
    const data = {
      name: username,
      email: email,
      emailVisibility: true,
      password: password,
      passwordConfirm: confirmPassword,
    };
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const record = await pb
      .collection("users")
      .create(data)
      .then(async (res) => {
        await pb.collection('users').requestVerification(email);
        setMessage("Email Verification Sent.");
        setTimeout(() => {
          setMessage("");
        }, 3000);
        clearForm();
      })
      .catch((err) => {
        console.log(err);
        setMessage("Error creating user");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  };

  const clearForm = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pb-20">
      {/* Toast message */}

      <div className="w-full max-w-md space-y-8">
        {message ? (
          <div className={styles.message}>
            <div className="flex items-center justify-center space-x-3">
              <div className="flex-shrink-0">
                {message}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                placeholder="Email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor="username" className="sr-only">
                Email address
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div></div>
            <div className="text-sm">
              <Link
                href="/login"
                className="font-medium text-blue-700 hover:text-blue-900"
              >
                Have an Account?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-blue-700 py-2 px-3 text-sm font-semibold text-white hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              onClick={(e) => {
                e.preventDefault();
                registerUser();
              }}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-stone-300 group-hover:text-stone-900"
                  aria-hidden="true"
                />
              </span>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

"use client";
import { selectAuthState } from "@/store/authslice";
import Link from "next/link";
import { useSelector } from "react-redux";
import Pocketbase from "pocketbase";
import { useEffect, useState } from "react";

const pb = new Pocketbase("http://127.0.0.1:8090");

const Navigation = () => {
  const authState = useSelector(selectAuthState);
  const [authStatus, setAuthStatus] = useState(false);
  const checkAuth = () => {
    setAuthStatus(pb.authStore.isValid);
  }

  const signOut = () => {
    pb.authStore.clear();
    checkAuth();
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <header className="lg:px-16 px-6 bg-white border-b-2 border-slate-500 flex flex-wrap items-center lg:py-0 py-2 absolute z-50 w-full">
              <div className="flex-1 flex justify-between items-center">
                <Link
                  href="/"
                  className="text-gray-900 text-xl font-bold cursive tracking-widest"
                >
                  Hidden Forest
                </Link>
              </div>
              <label
                htmlFor="menu-toggle"
                className="pointer-cursor lg:hidden block"
              >
                <svg
                  className="fill-current text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <title>menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </label>
              <input className="hidden" type="checkbox" id="menu-toggle" />

              <div
                className="hidden lg:flex lg:items-center lg:w-auto w-full"
                id="menu"
              >
                <nav>
                  <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                    <li>
                      <Link
                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400"
                        href="/posts"
                      >
                        View
                      </Link>
                    </li>
                    <>
                      {authState ? (
                        <li>
                          <Link
                            className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400"
                            href="/"
                            onClick={signOut}
                          >
                            Sign Out
                          </Link>
                        </li>
                      ) : (
                        <>
                          <li>
                            <Link
                              className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400"
                              href="/login"
                            >
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-400 lg:mb-0 mb-2"
                              href="signup"
                            >
                              Sign Up
                            </Link>
                          </li>
                        </>
                      )}
                    </>
                  </ul>
                </nav>
              </div>
            </header>
  )
}

export default Navigation;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import axios from "axios";

import { BASE_URL } from "../Utils/constants";
import { removeUser } from "../Utils/userSlice";
import { removeFeed } from "../Utils/feedSlice";
import { removeRequests } from "../Utils/requestSlice";
import { removeConnections } from "../Utils/connectionsSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true }
      );

      dispatch(removeUser());
      dispatch(removeFeed());
      dispatch(removeRequests());
      dispatch(removeConnections());

      navigate("/landingPage");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-content/10 bg-base-100/80 backdrop-blur-xl">
      <div className="navbar mx-auto min-h-[72px] max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <div className="flex-1">
          <Link
            to="/feed"
            aria-label="DevTinder home"
            className="group inline-flex items-center gap-2 rounded-xl px-2 py-1.5 transition-all duration-200 hover:bg-base-200"
          >
            {/* Logo icon */}
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-content shadow-md shadow-primary/20 transition-transform duration-200 group-hover:scale-105">
              <span className="font-mono text-xs font-black">
                {"</>"}
              </span>
            </div>

            {/* Brand */}
            <div className="leading-none">
              <div className="text-xl font-extrabold tracking-tight">
                Dev<span className="text-primary">Tinder</span>
              </div>

              <div className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.18em] text-base-content/40 sm:block">
                Connect • Build • Grow
              </div>
            </div>
          </Link>
        </div>

        {/* ================= USER AREA ================= */}
        {user && (
          <div className="flex items-center gap-3">

            {/* Welcome text */}
            <div className="hidden text-right sm:block">
              <p className="text-[10px] font-medium uppercase tracking-wider text-base-content/40">
                Welcome back
              </p>

              <p className="text-sm font-semibold">
                {user.firstName}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden h-8 w-px bg-base-content/10 sm:block" />

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                type="button"
                aria-label="Open profile menu"
                className="group flex items-center gap-2 rounded-2xl border border-base-content/10 bg-base-200/60 p-1.5 pr-2 transition-all duration-200 hover:border-primary/30 hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {/* Avatar */}
                <div className="relative">
                  <div className="h-10 w-10 overflow-hidden rounded-xl ring-2 ring-base-100 transition-all duration-200 group-hover:ring-primary/30">
                    <img
                      src={user.PhotoUrl}
                      alt={`${user.firstName}'s profile`}
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </div>

                  {/* Online indicator */}
                  <span
                    className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-base-200 bg-success"
                    aria-label="Online"
                  />
                </div>

                {/* User name */}
                <span className="hidden max-w-24 truncate text-sm font-semibold md:block">
                  {user.firstName}
                </span>

                {/* Chevron */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="hidden h-4 w-4 text-base-content/40 transition-transform duration-200 group-focus:rotate-180 md:block"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <ul
                tabIndex={-1}
                className="menu dropdown-content z-[100] mt-3 w-64 rounded-2xl border border-base-content/10 bg-base-100 p-2 shadow-2xl shadow-black/20"
              >
                {/* User header */}
                <li className="pointer-events-none mb-1">
                  <div className="flex items-center gap-3 rounded-xl px-3 py-3">
                    <img
                      src={user.PhotoUrl}
                      alt=""
                      className="h-11 w-11 rounded-xl object-cover"
                      loading="lazy"
                    />

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold">
                        {user.firstName}
                      </p>

                      {user.email && (
                        <p className="truncate text-xs text-base-content/40">
                          {user.email}
                        </p>
                      )}
                    </div>
                  </div>
                </li>

                <div className="my-1 h-px bg-base-content/10" />

                {/* Profile */}
                <li>
                  <Link
                    to="/profile"
                    className="group flex items-center justify-between rounded-xl py-3"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.8}
                          stroke="currentColor"
                          className="h-4 w-4"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                          />
                        </svg>
                      </span>

                      <span>Profile</span>
                    </span>

                    <span className="text-xs text-base-content/30">
                      →
                    </span>
                  </Link>
                </li>

                {/* Connections */}
                <li>
                  <Link
                    to="/connections"
                    className="flex items-center gap-3 rounded-xl py-3"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 18.72a6 6 0 0 0-12 0M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7.5 6.72a5 5 0 0 0-3.5-4.77M15.5 4.27a4 4 0 0 1 0 7.46"
                        />
                      </svg>
                    </span>

                    <span>Connections</span>
                  </Link>
                </li>

                {/* Requests */}
                <li>
                  <Link
                    to="/requests"
                    className="flex items-center gap-3 rounded-xl py-3"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-warning/10 text-warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </span>

                    <span>Requests</span>
                  </Link>
                </li>

                <div className="my-1 h-px bg-base-content/10" />

                {/* Logout */}
                <li>
                  <button
                    type="button"
                    onClick={handleLogOut}
                    className="flex w-full items-center gap-3 rounded-xl py-3 text-error hover:bg-error/10"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-error/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3-3H9m9 0-3-3m3 3-3 3"
                        />
                      </svg>
                    </span>

                    <span className="font-medium">
                      Logout
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;


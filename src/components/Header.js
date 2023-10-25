import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { localService } from "../Services/localService";
import "../style/header.scss";

export default function Header() {
  const { info } = useSelector((state) => state.userReducer);
  let navigate = useNavigate();
  let handleLogOut = () => {
    localService.remove();
  };
  let handleSwitchToProfile = () => {
    navigate("/profile");
    window.location.reload();
  };
  let renderNav = () => {
    if (info) {
      return (
        <>
          <NavLink onClick={handleSwitchToProfile}>
            <span className='hover:text-orange-500 duration-300 flex items-center'>
              <img
                src={`https://i.pravatar.cc/150?u=${info.hoTen}`}
                className='w-8 rounded-full'
              />
              {info.hoTen}
            </span>
          </NavLink>

          <button
            onClick={handleLogOut}
            className='ml-3 hover:text-orange-500 duration-300'
          >
            <i className='fa-solid fa-right-from-bracket mr-2'></i>
            <span>Log Out</span>
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className='mr-4 hover:text-orange-500 duration-300'
            onClick={() => {
              navigate("/login");
            }}
          >
            <i className='fa-solid fa-user mr-2'></i>
            <span>Login</span>
          </button>
          <button
            className='hover:text-orange-500 duration-300'
            onClick={() => {
              navigate("/register");
            }}
          >
            <i className='fa-solid fa-unlock mr-2'></i>
            <span>Register</span>
          </button>
        </>
      );
    }
  };
  return (
    <div id='header'>
      <div className=' bg-black'>
        <div className='container flex justify-between'>
          <div className='flex items-center'>
            <div
              className='hidden lg:block  text-white  text-sm'
              style={{ background: "#9F599B", padding: "8px 15px" }}
            >
              <i className='fa fa-apple-alt'></i>
              <strong>
                VIP <em>SWEEPSTAKES</em>
              </strong>
            </div>
            <div
              className='ml-4 hidden lg:block'
              style={{ padding: "8px 15px", fontSize: "14px" }}
            >
              <strong className='text-orange-500 mr-2'>
                $5000 SHOPPING SPREE
              </strong>
              <span style={{ color: "#8B8B79" }}>
                Join Movies VIP for a chance to win. Don't forget to join during
                checkout
              </span>
            </div>
          </div>
          <div className='flex items-center' style={{ color: "#8B8B79" }}>
            {renderNav()}
          </div>
        </div>
      </div>
      <div>
        <nav className='bg-white border-gray-200 dark:bg-gray-900'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <NavLink to={"/"}>
              <img src='../image/logo_2.png' className='w-24 sm:w-36' />
            </NavLink>
            <button
              data-collapse-toggle='navbar-default'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-default'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='{2}'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
            <div
              className='hidden w-full md:block md:w-auto'
              id='navbar-default'
            >
              <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 navbar'>
                <li>
                  <a
                    href='#featuresMovie'
                    className='block py-2 pl-3 pr-4 cursor-pointer'
                    aria-current='page'
                  >
                    NOW SHOWING
                  </a>
                </li>
                <li>
                  <a
                    href='#showtimes'
                    className='block py-2 pl-3 pr-4 text-gray-900 '
                  >
                    NEW RELEASE
                  </a>
                </li>
                <li>
                  <a
                    href='#cinema__complex'
                    className='block py-2 pl-3 pr-4 text-gray-900 '
                  >
                    SHOW TIME
                  </a>
                </li>
                <li>
                  <a
                    href='#news'
                    className='block py-2 pl-3 pr-4 text-gray-900 '
                  >
                    NEWS
                  </a>
                </li>
                <li>
                  <a
                    href='#footer'
                    className='block py-2 pl-3 pr-4 text-gray-900 '
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

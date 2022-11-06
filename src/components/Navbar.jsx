import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { isLoggedIn, logout, user } = useAuth();

  const onLogout = (e) => {
    e.preventDefault();
    logout();
  };

  const renderButton = () => {
    if (navbar) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      );
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    );
  }

  return (
    <nav className="w-full bg-app shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to='/'>
              <img src='/logo192.png' alt='logo' className='h-8 w-8' />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(value => !value)}>
                {renderButton()}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-white/75">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-white hover:text-white/75">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>

              {isLoggedIn && (
                <li className="hidden space-x-2 md:flex">
                  <span className="px-4 py-2 text-white">
                    {user?.username}
                  </span>
                  <button
                    onClick={onLogout}
                    className="text-white underline text-sm">
                    Logout
                  </button>
                </li>
              )}
            </ul>

            {isLoggedIn && (
              <div className="mt-3 space-y-2 lg:hidden md:hidden">
                <p className="inline-block w-full px-4 py-2 text-center text-white">
                  {user?.username}
                </p>
                <button
                  onClick={onLogout}
                  className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

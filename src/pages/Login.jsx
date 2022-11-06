import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const [credentials, setCredentials] = useState({username: '', password: ''});

  const { login } = useAuth();

  const reset = () => {
    setCredentials({username: '', password: ''});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials.username, credentials.password);
    reset();
  };

  const handleUsernameChange = (e) => {
    setCredentials(value => ({ ...value, username: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    setCredentials(value => ({ ...value, password: e.target.value }));
  };

  return (
    <>
      <div className="w-full max-w-sm mt-20 m-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded p-8 mb-4 space-y-4">
          <div>
            <label
              className="inline-block text-gray-700 text-sm font-bold mb-1"
              htmlFor="username">
              Username
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div>
            <label
              className="inline-block text-gray-700 text-sm font-bold mb-1"
              htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            className="bg-app hover:bg-app/50 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

import React, { useState, useEffect } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  // Load saved password from localStorage on component mount
  useEffect(() => {
    const savedPassword = localStorage.getItem("savedPassword");
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedPassword && savedEmail) {
      setPassword(savedPassword);
      setEmail(savedEmail);
      setRememberPassword(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rememberPassword) {
      localStorage.setItem("savedPassword", password);
      localStorage.setItem("savedEmail", email);
    } else {
      localStorage.removeItem("savedPassword");
      localStorage.removeItem("savedEmail");
    }
    alert("Login submitted!");
  };

  return (
    <div className='h-full pt-28 md:pt-40 pb-20 flex items-center justify-center bg-gray-100'>
      <div className='bg-white shadow-md rounded px-8 py-8 max-w-sm w-full'>
        <h2 className='text-2xl font-bold text-center mb-6 font-lato'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4 '>
            <label
              htmlFor='email'
              className='font-lato block text-gray-700 font-bold mb-2'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='font-lato block text-gray-700 font-bold mb-2'>
              Password:
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label className='inline-flex items-center'>
              <input
                type='checkbox'
                checked={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
                className='form-checkbox text-purple-600'
              />
              <span className='ml-2 text-gray-700'>Remember Password</span>
            </label>
          </div>
          <button
            type='submit'
            className='w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-500 focus:outline-none focus:shadow-outline'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

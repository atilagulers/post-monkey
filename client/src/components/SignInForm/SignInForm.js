import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './SignInForm.css';
import {login} from 'services/api';

function SignInForm() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {token, user} = await login({usernameOrEmail, password});
      console.log(user);
    } catch (err) {
      setError('Incorrect username-email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="usernameOrEmail"
          placeholder="Username or email"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <input
          className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p className="error-message text-sm tracking-wide">{error}</p>
        )}
      </div>

      <div className="flex items-center justify-between mb-1">
        <button
          className="btn btn-orange text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Sign In
        </button>
      </div>

      <Link className="inline-block align-baseline text-sm text-orange-600 hover:text-orange-800 font-light">
        Forgot Password?
      </Link>

      <Divider />
      <button className="btn btn-outline-orange bg-transparent w-full">
        Sign in with Google
      </button>
    </form>
  );
}

const Divider = () => {
  return (
    <div className="flex items-center gap-5 text-gray-500 w-full my-4">
      <div className="border-t border-gray-400 flex-grow"></div>
      <span>OR</span>
      <div className="border-t border-gray-400 flex-grow"></div>
    </div>
  );
};

export default SignInForm;

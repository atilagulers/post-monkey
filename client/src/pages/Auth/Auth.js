import React, {useEffect} from 'react';
import './Auth.css';

function Auth() {
  return (
    <div className="auth flex justify-center items-center h-screen bg-zinc-200">
      <div className="logo-parent w-[500px]">
        <img className="logo w-[400px]" src="/images/monkey-logo.png" alt="" />
      </div>
      <div className="form w-[600px] h-[400px] flex flex-col justify-start items-center gap-3">
        <h1 className="header text-7xl font-medium text-center mb-5">
          POST MONKEY
        </h1>

        <button class="btn btn-orange w-80 mb-3">Create account</button>

        <div className="flex items-center gap-3 text-gray-500 w-80 mb-3">
          <div className="border-t border-gray-500 flex-grow"></div>
          <span>or</span>
          <div className="border-t border-gray-500 flex-grow"></div>
        </div>

        <button class="btn btn-outline-orange bg-transparent w-80">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Auth;

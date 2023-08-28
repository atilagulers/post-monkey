import React, {useEffect, useState} from 'react';
import './SignIn.css';
import {Link} from 'react-router-dom';
import SignInForm from 'components/SignInForm/SignInForm';

function SignIn() {
  return (
    <div className="auth flex justify-center items-center h-screen bg-zinc-200">
      <div className="logo-parent w-[500px]">
        <img className="logo w-[400px]" src="/images/monkey-logo.png" alt="" />
      </div>
      <div className="button-container w-[600px] h-[400px] flex flex-col justify-start items-center gap-3">
        <div>
          <h1 className="header text-7xl font-medium text-center mb-5">
            POST MONKEY
          </h1>
        </div>

        <div className="form container w-[400px]">
          <div className="w-full">
            <div className="flex justify-center mb-8 ">
              <p className="inline-block align-baseline  text-sm font-light tracking-wider">
                Don't have an account?{' '}
                <Link
                  className="inline-block align-baseline  text-sm text-orange-600 hover:text-orange-800 font-light"
                  to={'/sign-up'}
                >
                  Sign Up
                </Link>
              </p>
            </div>

            <SignInForm />

            {/*<button
              onClick={() => navigate('/sign-in')}
              className="btn btn-outline-orange bg-transparent w-80"
            >
              Sign in
            </button>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

const Divider = () => {
  return (
    <div className="flex items-center gap-3 text-gray-500 w-80 mb-3">
      <div className="border-t border-gray-500 flex-grow"></div>
      <span>or</span>
      <div className="border-t border-gray-500 flex-grow"></div>
    </div>
  );
};

export default SignIn;

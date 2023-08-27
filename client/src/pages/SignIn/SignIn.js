import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import {signUpSchema} from 'schemas';
import './SignIn.css';

function SignIn() {
  const onSubmit = () => {
    console.log('submitted');
  };

  const {values, errors, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {
      usernameOrEmail: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  return (
    <div className="form-container w-[600px] mx-auto my-8 flex flex-col justify-center items-center">
      <div className="w-48 mb-5">
        <img src="/images/monkey-logo.png" alt="" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="form  rounded px-8 pt-6 pb-8 mb-4 w-[600px]"
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="usernameOrEmail"
            placeholder="Username or email"
            value={values.usernameOrEmail}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between mb-3">
          <button
            className="btn btn-orange text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <Link
          className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
          href="#"
        >
          Forgot Password?
        </Link>
      </form>
    </div>
  );
}

export default SignIn;

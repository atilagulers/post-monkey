import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import {signUpSchema} from 'schemas';
import './SignInForm.css';

function SignInForm() {
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
    <form onSubmit={handleSubmit} className="form">
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
          className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
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

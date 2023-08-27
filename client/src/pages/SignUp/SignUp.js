import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';
import {signUpSchema} from 'schemas';
import './SignUp.css';

function SignUp() {
  const onSubmit = async (values, actions) => {
    console.log('submitted');
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthday: new Date(),
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
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.username && touched.username ? 'input-error' : ''
            }`}
            type="text"
            id="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            errors={errors}
            touched={touched}
            fieldName="username"
          />
        </div>
        <div className="mb-4">
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email && touched.email ? 'input-error' : ''
            }`}
            type="text"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage errors={errors} touched={touched} fieldName="email" />
        </div>

        <div className="mb-4">
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password && touched.password ? 'input-error' : ''
            }`}
            type="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            errors={errors}
            touched={touched}
            fieldName="password"
          />
        </div>
        <div className="mb-4">
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline ${
              errors.confirmPassword && touched.confirmPassword
                ? 'input-error'
                : ''
            }`}
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            errors={errors}
            touched={touched}
            fieldName="confirmPassword"
          />
        </div>
        <div className="mb-6">
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700leading-tight focus:outline-none focus:shadow-outline ${
              errors.birthday && touched.birthday ? 'input-error' : ''
            }`}
            type="date"
            id="birthday"
            placeholder="Birthday"
            value={values.birthday}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            errors={errors}
            touched={touched}
            fieldName="birthday"
          />
        </div>

        <div className="flex items-center justify-between mb-3">
          <button
            className="btn btn-orange text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
            disabled={isSubmitting}
          >
            Sign Up
          </button>
        </div>
        <Link
          className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800"
          href="#"
        >
          Already have account?
        </Link>
      </form>
    </div>
  );
}

const ErrorMessage = ({errors, touched, fieldName}) => {
  if (errors[fieldName] && touched[fieldName]) {
    return (
      <p className="error text-red-500 text-sm mt-1">{errors[fieldName]}</p>
    );
  }
  return null;
};

export default SignUp;

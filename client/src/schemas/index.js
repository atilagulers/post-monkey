import * as yup from 'yup';

// min 8 characters, at least 1 uppercase, at least 1 number
const passwordRules = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const loginSchema = yup.object().shape({
  //usernameOrEmail: yup
  //  .string()
  //  .usernameOrEmail('Please enter a valid username or email')
  //  .required('Required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long.')
    .matches(
      passwordRules,
      'Password must contain at least 1 uppercase letter and 1 number.'
    )
    .required('Required'),
});

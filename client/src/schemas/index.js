import * as yup from 'yup';

// min 8 characters, at least 1 uppercase, at least 1 number
const passwordRules = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username must be at least 4 characters long.')
    .max(16, 'Username must be at most 16 characters long.')
    .required('Required'),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email'
    )
    .required('Required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long.')
    .matches(
      passwordRules,
      'Password must contain at least 1 uppercase letter and 1 number.'
    )
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  birthday: yup
    .date()
    .max(new Date(), "Birthday can't be in the future")
    .required('Required')
    .test('age', 'You must be at least 13 years old', function (value) {
      const today = new Date();
      const userBirthDate = new Date(value);
      let age = today.getFullYear() - userBirthDate.getFullYear();
      const monthDiff = today.getMonth() - userBirthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < userBirthDate.getDate())
      ) {
        age--;
      }

      return age >= 13;
    }),
});

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .required('First name is required!')
    .min(3, 'Name must be at least three characters!'),
  last_name: yup
    .string()
    .trim()
    .required('Last name is required!')
    .min(3, 'Name must be three characters!'),
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('You forgot to enter an email address!'),
  password: yup
    .string()
    .required('Password is required!'),
  termsOfService: yup
    .boolean()
    .oneOf([true], 'You must agree to the Terms of Service'),
})

export default formSchema; 
import { validateProps } from '../types';

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10,15}$/.test(values.phone)) {
    errors.phone = "Phone number must contain only digits and be 10 to 15 characters long";
  }
  return errors;
}

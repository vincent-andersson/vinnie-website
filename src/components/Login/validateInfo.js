export default function validateInfo(values) {
  let errors = {};

  // Username
  if (!values.username.trim()) {
    errors.username = "Username required!";
  }

  if ((values.username !== 'vincent') || (values.password !== 'vincent123')) {
    errors.password = "Wrong username or password!"
  }

  // Password
  if (!values.password) {
    errors.password = "Password required!";
  }

  return errors;
};
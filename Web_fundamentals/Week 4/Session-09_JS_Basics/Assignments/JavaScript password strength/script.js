// Your solution goes here
const isStrongPassword = (password) => {
  if (password.includes("password")) {
    return false;
  } else if (password.length < 8) {
    return false;
  } else if (password === password.toLowerCase()) {
    return false;
  } else {
    return true;
  }
};

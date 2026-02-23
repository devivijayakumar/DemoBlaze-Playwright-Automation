function generateUser() {

  const timestamp = Date.now();   // creates unique value

  return {
    username: `user_${timestamp}`,
    password: "Test@123"
  };
}

module.exports = { generateUser };
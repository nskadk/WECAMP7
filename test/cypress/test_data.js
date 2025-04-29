const loginData = {
    valid: [
      {
        email: "admin@email.com",
        password: "123456",
      },
      {
        email: "john@email.com",
        password: "123456",
      },
      {
        email: "jane@email.com",
        password: "123456",
      },
    ],
    invalid: [
      {
        email: "",
        password: "123456",
        message: "Invalid email or password",
      },
      {
        email: "john@email.com",
        password: "",
        message: "Invalid email or password",
      },
      {
        email: "",
        password: "",
        message: "Invalid email or password",
      },
    ],
  };
  
  export default loginData;
  

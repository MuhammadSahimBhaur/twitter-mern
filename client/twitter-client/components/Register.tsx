import React, { useState } from "react";
import styles from "src/styles/Register.module.css";
import useAuth from "@/hooks/useAuth";

const Register: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange: any = (event: any) => {
    const { name, value } = event.target;
    setCredentials((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit: any = (event: any) => {
    useAuth(credentials);
  };

  return (
    <div>
      <div className={styles.register}>
        <form>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="text"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit} name="register">
            Register
          </button>
          <button type="button" onClick={handleSubmit} name="login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

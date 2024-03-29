import React, { useState } from "react";
import styles from "src/styles/Register.module.css";
import { useAuth } from "@/hooks/useAuth";
import Card from "components/Card";

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
      <Card width={150} height={120}>
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
            <button
              className="rounded-full"
              type="button"
              onClick={handleSubmit}
              name="register"
            >
              Register
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Register;

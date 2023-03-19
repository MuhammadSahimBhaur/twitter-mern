import React, { useContext, useState } from "react";
import styles from "src/styles/Register.module.css";
import useFetch from "@/hooks/useFetch";
import Card from "components/Card";
import Link from "next/link";
import axios from "axios";
import { AuthContext } from "context/AuthContext";

const Login: React.FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [token, setToken] = useState(null);

  const handleChange: any = (event: any) => {
    const { name, value } = event.target;
    setCredentials((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit: any = (event: any) => {
    axios({ method: "post", url: "/api/auth/login", data: credentials }).then(
      (res) => {
        console.log(res);

        axios.defaults.headers.common["Authorization"] =
          "Bearer " + res.data.loginToken;
        if (res.data.loginToken) {
          setToken(res.data.loginToken);
          setIsAuth(true);
        }
      }
    );
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
              name="login"
            >
              Login
            </button>
            <Link href="/register">Register</Link>
          </form>
          {token ? <p>New token set! AKA logged in!</p> : null}
        </div>
      </Card>
    </div>
  );
};

export default Login;

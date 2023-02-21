import React, { useState } from "react";
import axios from "axios";

const useAuth = (credentials: { email: string; password: string }) => {
  const [auth, setAuth] = useState(credentials);

  const register = async () => {
    try {
      const res = await axios.get("<path will go here>");
      return res.data;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  return register();
};

export default useAuth;

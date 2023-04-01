// if token exists attempt to load home page using that
// define a context here
import { useState } from "react";
import { AuthContext } from "context/AuthContext";
import Home from "components/Home";

export default function LandingPage() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <Home></Home>
      </AuthContext.Provider>
    </div>
  );
}

import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import Login from "./Login";
// import useFetch from "@/hooks/useFetch";
import axios from "axios";

export default function Home() {
  const [tweets, setTweets] = useState(null);
  const [callOnce, setCallOnce] = useState(false);
  // const { data, isPending, error } = useFetch("get", "/api/tweet/", {});
  if (callOnce === false) {
    axios({ method: "get", url: "/api/tweet/", data: {} }).then((res) => {
      console.log(res);
      if (res.data.tweets !== undefined) setTweets(res.data.tweets);
    });
    setCallOnce(true);
  }
  return (
    <div style={{}}>
      <AuthContext.Consumer>
        {/* console.log() */}
        {({ isAuth, _ }) => (
          <div>
            {isAuth ? (
              <div>
                <h1>Twitter Home</h1>
                {tweets ? <p>{tweets[0].tweet}</p> : null}
              </div>
            ) : (
              <Login />
            )}
            <p>isAuth: {isAuth.toString()}</p>
            {/* <button onClick={() => setIsAuth(!isAuth)}>Toggle isAuth</button> */}
          </div>
        )}
      </AuthContext.Consumer>
    </div>
  );
}

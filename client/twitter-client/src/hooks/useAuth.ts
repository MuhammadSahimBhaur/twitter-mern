// Need a new hook that communicates:
// 0. Can ping any api route and return data
// 1. That we are loading
// 2. That we have loaded the data
// 3. Returns the data to the Component
import axios from "axios";

type credentials = { email: string; password: string };

export const useAuth: any = (cred: credentials) => {
  console.log(cred);
  axios({
    method: "post",
    url: "/api/auth/register",
    data: cred,
  }).then((res) => {
    if ("data" in res && res.data.token !== undefined) {
      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + res.data.token;
      // need to set global axios state
      return null;
    }
    console.log(res);
  });
};

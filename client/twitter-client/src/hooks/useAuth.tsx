import React, { useState } from "react";
import axios from "axios";

type credentials = { email: string; password: string };

export const useAuth: any = (cred: credentials) => {
  console.log(cred);
  axios({
    method: "post",
    url: "/api/register",
    // baseURL: "http://localhost:4000",
    data: cred,
  }).then((res) => {
    console.log(res);
  });
};

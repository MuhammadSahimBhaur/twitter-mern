import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (method: string, url: string, body: object) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios({ method, url, data: body }).then((resData) => {
      setIsPending(false);
      setData(resData);
      setError(null);
    });
  }, []);

  return { data, isPending, error };
};

export default useFetch;

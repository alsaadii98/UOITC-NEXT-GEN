import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [dataIn, setDataIn] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  useEffect(() => {
    const abortCont = new AbortController();
    setLoading(true);
    setTimeout(() => {
      axios
        .get(url, { signal: abortCont.signal })
        .then((res) => {
          console.log(res.data);

          // console.log(typeof res.data[0].images[0]);
          setDataIn(res.data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch abort");
          } else {
            setError("Can't resolve this data");
          }
        })
        .finally(() => {
          setLoading(false);
        });
      return () => {
        abortCont.abort();
      };
    }, 5000);
  }, [url]);
  return { dataIn, loading, error };
};
export default useAxios;

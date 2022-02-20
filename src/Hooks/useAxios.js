import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [dataIn, setDataIn] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setDataIn(res.data);
      })
      .catch((err) => {
        setError("Can't resolve this data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { dataIn,loading,error };
};
export default useAxios;

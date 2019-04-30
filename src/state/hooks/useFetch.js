import { useState } from "react";
import useAsync from "./useAsync";

export default url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useAsync(
    async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    }, 
    () => {
      setData([]);
      setLoading(false);  
    }, 
    []
  );

  return { data, loading };
};
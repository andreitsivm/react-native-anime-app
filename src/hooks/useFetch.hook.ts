import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

interface iUseFetch {
  isLoading: boolean;
  data: any;
  errors: AxiosError | null;
}

export const useFetch = (url: string): iUseFetch => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const notify = () => toast.error(Dictionary.THERE_IS_AN_ERROR, notifyStyles);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);

        setData(response.data);
      } catch (error) {
        setErrors(error);
        console.error(errors);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, errors, isLoading };
};

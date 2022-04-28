import { useEffect, useState } from "react";

export default function UseFetch(url, type) {
  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setTimeout(async () => {
          const res = await fetch(url);
          console.log({ res }, res.headers.get("Content-Disposition"));
          setResponse(res);

          switch (type) {
            case "text":
              const text = await res.text();
              setData(text);
              setIsLoading(false);
              break;
            case "json":
              const json = await res.json();
              setData(json);
              console.log({ json });
              setIsLoading(false);
              break;
          }
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  return [response, data, isLoading];
}

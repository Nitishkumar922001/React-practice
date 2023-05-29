import { useState,useCallback} from "react";

function useHttp(applyData) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const sendReq =useCallback(  async (reqConfigration,) => {
        try {
      setIsLoading(true);
      const response = await fetch(
        reqConfigration.url, 
        {
        method: reqConfigration.method ? reqConfigration.method : "GET",
        body: reqConfigration.body ? reqConfigration.body :null,
        headers: reqConfigration.headers ? reqConfigration.headers : {},
        });

      if(!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      setIsLoading(false);
      applyData(data);
    }
   catch (error) 
  {
    console.log(error);
    setIsLoading(false);
    setError(error.message);
  }
},[applyData])

  return{
    error,
    isLoading,
    sendReq
  }
}


export default useHttp;

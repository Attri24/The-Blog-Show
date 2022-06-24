import { useState, useEffect  } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null)
   const [isPending, setIsPending] =useState(true)
   const [error, setError] = useState(null)
   
   useEffect(() => {
       fetch(url)
       .then(res => {
        if(!res.ok)
        {
            setError(true)
            throw Error(`sorry! could't fetch the data`)
            
        }
           return res.json();
       })
    
       .then(data => {
           console.log(data);
           setData(data)
           setIsPending(false)
           setError(null)
       })
       .catch(err => {
           setError(err.message)
           setIsPending(false)
       })
   },[url])
   return { data , isPending , error }
}
export default useFetch;
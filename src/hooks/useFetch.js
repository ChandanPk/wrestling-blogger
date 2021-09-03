import {useState, useEffect} from 'react';

const useFetch = (uri) => {

    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(()=> {
        setTimeout(()=> {
          fetch(uri)
          .then(data => {
             if (!data.ok) {
               throw Error("oops! could not find the resourse")
             }
             return(data.json())
          })
            
            .then(res => {
              setData(res);
              setIsPending(null);
              setError(null);
            })
            .catch(err => {
              setError(err.message);
              setData(null);
              setIsPending(null)
            })
        }, 1000)
        
      }, [])
    
      return {data, error, isPending}
}
 
export default useFetch;
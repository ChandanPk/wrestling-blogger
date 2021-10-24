import { useState, useEffect } from "react";

export default function useFetch(){
    const [data, setData] = useState();
    const [err, setErr] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8001/blogs")
                .then(res => {
                    if (!res.ok){
                        data && setData(null)
                        throw Error("Unable to fetch, 404 not found!")
                    }
                    // console.log(res)
                    return res.json()
                })
                    .then(data => {
                        // console.log(data)
                        setData(data)
                        setIsPending(false)
                        err && setErr(null)
                    })
                        .catch(err => {
                            console.log(err.message)
                            setErr(err.message)
                            setIsPending(null)
                            

                        })
        }, 1000)

    }, [])

    return {data, isPending, err, setData}

}
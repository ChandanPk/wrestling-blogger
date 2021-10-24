import Bloglist from "./Bloglist";
import { useEffect, useState } from "react";

export default function Home() {

    const [blogs, setBlogs] = useState();
    const [err, setErr] = useState(null);
    const [isLoding, setIsLoding] = useState(true);

    const handleDelete = id => {
        const filteredBlogs = blogs.filter(item => item.id !== id)
        setBlogs(filteredBlogs)
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8001/blogs")
                .then(res => {
                    if (!res.ok){
                        blogs && setBlogs(null)
                        throw Error("Unable to fetch, 404 not found!")
                    }
                    // console.log(res)
                    return res.json()
                })
                    .then(data => {
                        // console.log(data)
                        setBlogs(data)
                        setIsLoding(false)
                        err && setErr(null)
                    })
                        .catch(err => {
                            console.log(err.message)
                            setErr(err.message)
                            setIsLoding(null)
                            

                        })
        }, 1000)

    }, [])
    return (
        <div className="home">
            <h2>All blogs</h2>
            {err && <p className="loading">{err}</p>}
            {isLoding && <p className="loading">Loding...</p>}
            {blogs && <Bloglist blogs={blogs} handleDelete={handleDelete}/>}
        </div>
    );
}
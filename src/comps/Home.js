import Bloglist from "./Bloglist";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Home() {

    const {isPending, data:blogs, err, setData} = useFetch();
    
    const handleDelete = id => {
        const filteredBlogs = blogs.filter(item => item.id !== id)
        setData(filteredBlogs)
    }

   
    return (
        <div className="home">
            <h2>All blogs</h2>
            {err && <p className="loading">{err}</p>}
            {isPending && <p className="loading">Loding...</p>}
            {blogs && <Bloglist blogs={blogs} handleDelete={handleDelete}/>}
        </div>
    );
}
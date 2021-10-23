import Bloglist from "./Bloglist";
import { useState } from "react";

export default function Home() {

    const [blogs, setBlogs] = useState([
        { title: "WWE", body: "lorem ipsum is a dummy text for some", founder: "Mr.Mcmahon", id: 1 },
        { title: "AEW", body: "lorem ipsum is a dummy text for some", founder: "Tony Khan", id: 2 },
        { title: "Smackdown Live", body: "lorem ipsum is a dummy text for some", founder: "Shane Mcmahon", id: 3 },
        { title: "Ring Of Honor", body: "lorem ipsum is a dummy text for some", founder: "Rahul Subramanium", id: 4 }
    ])

    return (
        <div className="home">
            <h2>All blogs</h2>
            <Bloglist blogs={blogs} />
        </div>
    );
}
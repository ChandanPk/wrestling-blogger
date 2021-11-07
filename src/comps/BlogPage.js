import { useParams } from "react-router";
import { API } from "../constants";
import useFetch from "../hooks/useFetch";

const BlogPage = () => {

    const { id } = useParams();
    const { data: blog, isPending, err } = useFetch(API.blogPage(id))

    return (
        <div className="preview">
            {err && <p>{err}</p>}
            {isPending && <p className="loading">please wait..</p>}
            {blog && <div>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <button>Delete</button>
            </div>}
        </div>
    );
}

export default BlogPage;
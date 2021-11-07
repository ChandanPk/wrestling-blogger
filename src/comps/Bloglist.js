import { Link } from "react-router-dom";

const Bloglist = ({ blogs, handleDelete }) => {


    return (
        <>
            <h2>All blogs</h2>
            {blogs.map(blog => {
                return <Link className="blog-preview" to={"/blog/" + blog.id} key={blog.id}><div className="blogs">
                    <h3>{blog.title}</h3>
                    <p>{blog.founder}</p>
                </div></Link>
            })}
        </>
    );
}

export default Bloglist;
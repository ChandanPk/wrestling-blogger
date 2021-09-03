const BlogList = ({ blogs }) => {
    return ( 
        <div className="blogs">
            {blogs.map(blog => {
                return <div className="blog-sec" key={blog.id}>
                            <h3>{blog.company}</h3>
                            <p>introduced by {blog.founder}</p>
                       </div>
            })}
        </div>
     );
}
 
export default BlogList;
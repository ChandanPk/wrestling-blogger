
const Bloglist = ({ blogs, handleDelete }) => {

    return (
        <>
            {blogs.map(blog => {
                return <div className="blogs" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.founder}</p>
                    <button onClick={()=> handleDelete(blog.id)}>delete</button>
                </div>
            })}
        </>
    );
}

export default Bloglist;

const Bloglist = ({ blogs }) => {

    return (
        <>
            {blogs.map(blog => {
                return <div className="blogs">
                    <h3>{blog.title}</h3>
                    <p>{blog.founder}</p>
                    <button>delete</button>
                </div>
            })}
        </>
    );
}

export default Bloglist;
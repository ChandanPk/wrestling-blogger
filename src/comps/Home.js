import BlogList from "../BlogList";

const Home = ({ blogs }) => {
    return ( 
        <div className="home">
            <h3>All blogs</h3>
            <BlogList blogs={blogs}/>
        </div>
     );
}
 
export default Home;
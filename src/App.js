import Navbar from './comps/Navbar';
import Home from './comps/Home';
import { useEffect, useState } from 'react';

function App() {

  const [blogs, setBlogs] = useState();

  // blog-constructor
  function Blog(company, body, founder, id){
    this.company = company;
    this.body = body;
    this.founder = founder;
    this.id = id;
  }


  useEffect(()=> {
    setTimeout(()=> {
      fetch("http://localhost:8000/blogs")
      .then(data => data.json())
        .then(res => {
          setBlogs(res);
        })
    }, 2000)
    
  }, [])

  return (
    <div className="App">
      <Navbar />
      {blogs ? <Home blogs={blogs} /> : <p>Loding...</p> }
    </div>
  );
}

export default App;

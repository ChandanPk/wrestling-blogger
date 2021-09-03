import Navbar from './comps/Navbar';
import Home from './comps/Home';
// import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';

function App() {

  const {data: blogs, error, isPending} = useFetch("http://localhost:8000/blogs")

  // blog-constructor
  function Blog(company, body, founder, id){
    this.company = company;
    this.body = body;
    this.founder = founder;
    this.id = id;
  }



 
  return (
    <div className="App">
      <Navbar />
      { isPending && <div>Loding...</div> }
      { error && <div>{ error }</div> }
      { blogs && <Home blogs={blogs} /> }
    </div>
  );
}

export default App;

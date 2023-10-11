import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";



function Home() {
    return (
      <div className="home">
        <h1>Home</h1>
       
        <Link to="/posts" className="post-btn">Posts</Link>

      </div>
    )
}

export default Home;
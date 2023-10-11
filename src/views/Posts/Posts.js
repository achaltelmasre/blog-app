import React from "react";
import "./Posts.css";
import blogData from "./../../configs/blogs-data.json";
import PreviewPostCard from "../../component/PreviewPostCard/PreviewPostcard";

function Posts() {
  return (
    <div>
      <h1 className="post-heading">IT HUB IN INDIA</h1>

      {blogData.map((post, index) => {
        return (
        <div className="card-container">
            <PreviewPostCard
              key={index}
              id={post.id}
              img={post.img}
              title={post.title}
              author={post.author}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Posts;

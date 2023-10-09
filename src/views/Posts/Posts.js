import React from "react";

import blogData from "./../../configs/blogs-data.json"
import PreviewPostCard from "../../component/PreviewPostCard/PreviewPostcard";

function Posts() {
    return (
        <div>Posts

        {
            blogData.map((post, index) => {
               return (
                  <PreviewPostCard 
                    key={index} 
                    id={post.id}
                     title={post.title}
                     author={post.author}
                  />
               )
            })
        }
       </div> 
    )
}

export default Posts
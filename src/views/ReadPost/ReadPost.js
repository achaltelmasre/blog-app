import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import blogData from "./../../configs/blogs-data.json"
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ReadPost.css";

function ReadPost() {
    const { id } = useParams()

    const [post, setPost] = useState({})
     
    useEffect(() =>{
        blogData.forEach((postObj) => {
            if(postObj.id == id){
                setPost(postObj)
            }
        })
    }, [id])
  
    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.img}    className="img"/>
            <p className="content">{post.description}</p>
            <a href={post.map} className="map">Location</a>
            <p className="content">{post.content}</p>
           
            
        </div>
    )
}

export default ReadPost
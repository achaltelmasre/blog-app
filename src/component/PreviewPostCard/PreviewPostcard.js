import React from 'react'
import { Link } from 'react-router-dom'
import "./PreviewPostCard.css"

function PreviewPostCard({id,title,map,description,img}) {
    return (

      
        <div className='preview-post-card' >
          
        <h2>{title}</h2>
        <img src={img} height={300}width={300}/>
        <p>{description}</p>
        <Link to={map} className='map'>Location </Link> <br/><br></br>
        <Link to={`/post/read/${id}` }><button>Read More</button></Link>

      </div> 
 
    )
}

export default PreviewPostCard
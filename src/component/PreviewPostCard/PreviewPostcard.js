import React from 'react'
import "./PreviewPostCard.css"

function PreviewPostCard({id,title,author,description}) {
    return (
        <div className='preview-post-card' >
        <h2>{title}</h2>
        <span> By {author}</span>
        <p>{description}</p>

      </div> 
    )
}

export default PreviewPostCard
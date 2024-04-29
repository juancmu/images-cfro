import React from 'react'

const GifImage = ({id, title, url}) => {


  return (
    <div className='card'>
    <img 
    key={id}
    alt={title}
    className="gif-image"
    src={url} 
    
    />

    </div>
    
  )
}

export default GifImage
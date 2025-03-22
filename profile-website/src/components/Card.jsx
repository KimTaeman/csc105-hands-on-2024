import React from 'react'

const Card = ({src, alt}) => {
  return (
    <div className="card w-full h-3/4 rounded-4xl overflow-hidden">
        <img class=" w-full bg-cover" src={`${src}`} alt={`${alt}`}></img>
    </div>
  )
}

export default Card
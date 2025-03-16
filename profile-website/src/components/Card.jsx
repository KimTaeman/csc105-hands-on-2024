import React from 'react'

const Card = ({src}) => {
  return (
    <div className="card w-full h-3/4 rounded-4xl shadow-lg overflow-hidden">
        <img class=" w-full bg-cover" src={`${src}`} alt=""></img>
    </div>
  )
}

export default Card
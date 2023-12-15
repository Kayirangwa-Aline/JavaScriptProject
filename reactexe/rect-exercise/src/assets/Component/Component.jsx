import React from 'react'
import "./Component.css";
function Profile({image, name, email, position, seen}) {
  return (
  <>
  <div className='container'>
    <div className='all'>
    <div className="img">
    <img src={image} alt="image"  height={90} width={90}/>
    </div>
    <div className="text">
     <p>{name}</p>
     <span>{email}</span>
    </div>
    </div>
    <div className="title">
     <p>{position}</p>
     <span>{seen}</span>
    </div>
  </div>
  </>
  )
}

export default Profile

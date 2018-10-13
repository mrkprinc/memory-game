import React from "react";

const Card = props => {
  return(
  <div className='card-container' onClick={props.handleClick}>
    <div className={`card delay${props.index}`}>
      <div className='card-front center'>
        {props.frontText}
      </div>

      <div className='card-back center'>
        {props.backText}
      </div>
    </div>
  </div>
)}

export default Card;
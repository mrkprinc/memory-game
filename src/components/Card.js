import React from "react";
import CardSide from "./CardSide";

const Card = props => {
  return(
  <div className='card-container' onClick={props.handleClick}>
    <div className='card' style={{transitionDelay: `${props.index / 20}s`}}>
      <CardSide side='front' imgId={props.frontImgIndex} />
      <CardSide side='back' imgId={props.backImgIndex} />
    </div>
  </div>
)}

export default Card;
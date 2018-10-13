import React from "react";
import CardSide from "./CardSide";

const Card = props => {
  return(
  <div className='card-container' onClick={props.handleClick}>
    <div className={`card delay${props.index}`}>
      <CardSide side='front' imgId={props.frontImgId} />
      <CardSide side='back' imgId={props.backImgId} />

    </div>
  </div>
)}

export default Card;
import React from "react";
import images from "../images.json";

const CardSide = props => {
  return(
    <div className={`card-${props.side} center`}>
      <img src={images[props.imgId].src} alt={images[props.imgId].text} />
    </div>
  )
}

export default CardSide;
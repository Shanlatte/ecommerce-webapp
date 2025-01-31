import React from "react";

// import './for-you-card.css'
import { ForYouCardContainer } from "./for-you-card.styles";


// const ForYouCard = (props) => {

const ForYouCard = ({ product }) => {
  const { name, image } = product;


  return(
    
    <ForYouCardContainer
    to={`/product/${product._id}`}
    state={{ data: product}}
    >

    <div className="card">
      <div className="card-img-container">
        
        {/* <img className="card-img" src={props.image} /> */}
        <img src={image} alt={`${name}`} />

      </div>

      {/* <p>{props.name}</p> */}
      <p>{name}</p>

    </div>

    </ForYouCardContainer>

  )
}

export default ForYouCard
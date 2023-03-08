import React from "react";

function CardItem ({ name, image, id}) {
    return (
        <div className="indiv-card">
            
            <img src={image} alt={name}/>
            <h3>Name: {name}</h3>
            <h3>ID: {id}</h3>
            <p>
            <button>Add to Wishlist</button>
            </p>
        </div>
    )
}

export default CardItem
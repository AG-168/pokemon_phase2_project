import React from "react";

function CardItem ({ name, image}) {
    return (
        <div>

            Name: {name}
            <img src={image} alt={name}/>
        </div>
    )
}

export default CardItem
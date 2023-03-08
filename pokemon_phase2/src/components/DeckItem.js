import React from "react"

function DeckItem ({name,id,image}) {
    
    
    return (
        <div className="indiv-card">
            <img src={image} alt={name}/>
            <h3>Name:{name}</h3>
            <p>ID:{id}</p>
            <button>Delete</button>
        </div>
    )
}

export default DeckItem
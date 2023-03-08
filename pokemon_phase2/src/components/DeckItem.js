import React from "react"

function DeckItem ({name,id,image}) {
    
    
    return (
        <div>
            <img src={image} alt={name}/>
            Name:{name}
            ID:{id}
            <button>Delete</button>
        </div>
    )
}

export default DeckItem
import React from "react"

function DeckItem ({name,id,image,onHandleDeleteClick}) {
    
    function handleDeleteClick () {
        onHandleDeleteClick(id)
    }
    
    return (
        <div className="indiv-card">
            <img src={image} alt={name}/>
            <h3>Name:{name}</h3>
            <p className="id">ID:{id}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default DeckItem
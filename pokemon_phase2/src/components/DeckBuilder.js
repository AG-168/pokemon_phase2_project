import React, {useState, useEffect} from "react";
import Userfront from "@userfront/react";


function DeckBuilder () {

    const [userData, setUserData] = useState([])

    useEffect(()=>{
        fetch(`https://api.userfront.com/v0/self`, {
        method: "GET",
        headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Userfront.accessToken()}`}
    })
    .then((res)=>res.json())
    .then((data)=>{
        setUserData(data)
        console.log(data)
    })
    }, [])


    return (
        <div>
            {userData}
        </div>
        )
}

export default DeckBuilder
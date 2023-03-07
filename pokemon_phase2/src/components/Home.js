import React from "react";
import Userfront from "@userfront/react";

Userfront.init("wn9ydm5n");

const SignupForm = Userfront.build({
  toolId: "alladkm",
});

function Home () {
    return (
        <div>
            <h1>Welcome to PokeBuilder</h1>
            <h2>Got to catch them all!</h2>
            <SignupForm />
        </div>
    )
}

export default Home
import React from "react";
import Userfront from "@userfront/react";

Userfront.init("wn9ydm5n");

const SignupForm = Userfront.build({
  toolId: "alladkm",
});

function SignUp () {
    return (
    <div>
    <SignupForm />
    </div>
    )
}

export default SignUp
import React from "react";
import Userfront from "@userfront/react";

Userfront.init("wn9ydm5n");

const LogoutButton = Userfront.build({
  toolId: "orramob"
});

function SignOut () {
    return <LogoutButton />;
}

export default SignOut
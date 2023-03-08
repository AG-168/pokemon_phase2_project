import React from "react";
import Userfront from "@userfront/react";

Userfront.init("wn9ydm5n");

const LoginForm = Userfront.build({
  toolId: "mllnrkk"
});


function Login () {
  
    return (
      <div>
     <LoginForm/>
     </div>
)
    
}

export default Login
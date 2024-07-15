import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import React from 'react';
import { Model } from "./Model";

const Login = () => {
  return (
    <div>
   

   <SignedIn redirectUrl="/model">
        <Model />   
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

    </div>
  );
}

export default Login;

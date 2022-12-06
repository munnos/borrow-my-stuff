import React from "react";

function Requested({ profileView }) {
    console.log("inside request component");
    
  return (
    <h1>From the requested component {profileView}</h1>
  );
}

export default Requested;

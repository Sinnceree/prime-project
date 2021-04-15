import React from "react";

const Prime = () => {
  return (
    <div className="prime-box">
      <h1 className="info">Find Nearst Prime Number</h1>
      <p className="description">Enter a value below and we will find the highest prime number lower than your input.</p>
      <input placeholder="0" type="number" />
    </div>
  )
}

export default Prime;
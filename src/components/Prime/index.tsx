import React from "react";

const Prime = () => {

  // This is a recursive function checking the value starting
  // from the input value and subtracting by one until we find
  // The nearest prime value.
  const isNumberPrime = (value: number): null | number => {
    // If the value passed is 1 return false it's not prime.
    if (value === 1) {
      return null
    }

    // If the value is less than one return false it's not a prime number
    if (value < 1) {
      return null
    }

    // Check if this number is prime or not
    // If this value is not a prime number lets run 
    // the function again but with smaller value and see if thats a prime
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
          return isNumberPrime(value-1)
      }
  }

    return value
  }

  const checkInput = (value: number) => {
    const primeNum = isNumberPrime(value)
    console.log(primeNum)
  }

  return (
    <div className="prime-box">
      <h1 className="info">Find Nearst Prime Number</h1>
      <p className="description">Enter a value below and we will find the highest prime number lower than your input.</p>
      <input placeholder="0" type="number" />
      <button onClick={() => checkInput(55)}>Check</button>
    </div>
  )
}

export default Prime;
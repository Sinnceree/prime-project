import React, { useState } from "react";

const Prime = () => {
  const [inputNumber, setInputNumber] = useState<number>(0)
  const [gridArr, setGridArr] = useState<number[]>([])
  const [primeNumber, setPrimeNumber] = useState<number | null>(null)
  const [messageStatus, setMessageStatus] = useState<null | string>(null)

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

  // Ran when the user clicks submit button
  // We get the initial value from input start checking for lower primes
  // And then we generate the grid to display to the user which prime number they got.
  const checkInput = (value: number) => {
    const primeNum = isNumberPrime(value-1)

    if (value !== 1 || value !< 1) {
      const numArr: number[] = []
      for (let i=0; i < value; i++) {
        numArr.push(i+1)
      }
      setGridArr(numArr)
    } else {
      setGridArr([])
    }

    if (primeNum === null) {
      return setMessageStatus(`Could not find any prime numbers before your input.`)
    }

    setMessageStatus(`${primeNum} is the first prime before your input`)
    setPrimeNumber(primeNum)
  }

  return (
    <div className="prime-box">
      <h1 className="info">Find Nearst Prime Number</h1>
      <p className="description">Enter a value below and we will find the highest prime number lower than your input.</p>
      <input 
        placeholder="0" 
        type="number" 
        value={inputNumber} 
        onChange={(e) => setInputNumber(parseInt(e.target.value))} />
      <button onClick={() => checkInput(inputNumber)}>Check</button>
      {messageStatus && <p className="status">{messageStatus}</p>}

      <div className="prime-grid">
        {gridArr.map((num) => (
          <div key={num} className="node" style={{ background: num === primeNumber ? "#a0ff8b" : "transparent" }}>{num}</div>
        ))}
      </div>
    </div>
  )
}

export default Prime;
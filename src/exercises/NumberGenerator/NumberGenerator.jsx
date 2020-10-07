import React from "react"
import "./NumberGenerator.scss"

const dataGenerator = () => {
    let data = []

    for (let i = 0; i < 32; i++) {
        data.push(i)
    }

    return data
}

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

const NumberGenerator = () => {

    const numbers = dataGenerator()

    const number = (num, className) => <div className={`item ${className}`}>{num}</div>

    return (
        <>
            <div className="header">
                <h1>Number Generator</h1>
                <p>In this exercise, numbers from 0-31 are displayed, such that odd numbers are in yellow, 
                    even in green and prime in red color respectively</p>
            </div>
            
            <div className={"container"}>
                {numbers.map(num => {
                    if (isPrime(num)) {
                        return number(num, "prime")
                    } else if (num % 2 === 0) {
                        return number(num, "even")
                    } else {
                        return number(num, "odd")
                    }
                })}
            </div>
        </>
    )
}

export default NumberGenerator
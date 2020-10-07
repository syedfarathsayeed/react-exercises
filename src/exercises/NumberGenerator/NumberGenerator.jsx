import React from "react"
import { Header } from "../../componentsUtils"
import "./NumberGenerator.scss"

const dataGenerator = (len) => {
    let data = []

    for (let i = 0; i < len; i++) {
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

    const numbers = dataGenerator(32)

    const number = (num, className) => <div className={`item ${className}`}>{num}</div>

    return (
        <>
            <Header title="Number Generator" 
            description="In this exercise, numbers from 0-31 are displayed, such that odd numbers are in yellow, 
            even in green and prime in red color respectively"/>
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
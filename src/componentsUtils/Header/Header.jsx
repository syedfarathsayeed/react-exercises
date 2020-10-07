import React from "react"
import "./Header.scss"

const Header = ({ title, description }) => {
    return (
        <div className="header">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Header
import React from "react"
import "./SubscribeCard.scss"

function SubscribeCard() {
    return (
        <div className="card">
            <h1>SUBSCRIBE</h1>
            <h5>Sign up with your email address to receive news and updates.</h5>
            <div>
                <input placeholder="First name" />
                <input placeholder="Last name" />
                <input placeholder="Email" />
            </div>
            <button>Subscribe</button>
        </div>
    )
}

export default SubscribeCard
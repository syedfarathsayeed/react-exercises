import React from "react"
import { Header } from "../../componentsUtils"
import "./SubscribeCard.scss"

function SubscribeCard() {
    return (
        <>
            <Header title="Subscription card"
                description="In this exercise, a subscription card as shown below is developed" />
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
        </>
    )
}

export default SubscribeCard
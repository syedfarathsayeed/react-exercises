import React from "react"
import AngularLogo from "../../resources/angular_logo.png"
import JsLogo from "../../resources/js_logo.png"
import ReactLogo from "../../resources/react_logo.png"
import VueJs from "../../resources/vue_js_logo.png"
import "./ImageCard.scss"

function IntroCard() {
    const size = 200
    return (
        <div className="container">
            <strong>Front End Technologies</strong>
            <div className="image-container">
                <img className={"img"} src={AngularLogo} alt="Angular-Js" height={size} width={size}/>
                <img className={"img"} src={JsLogo} alt="JS-Logo" height={size} width={size}/>
                <img className={"img"} src={ReactLogo} alt="React-Logo" height={size} width={size}/>
                <img src={VueJs} alt="Vue-JS-Logo" height={size} width={size}/>
            </div>
        </div>
    )

}

export default IntroCard
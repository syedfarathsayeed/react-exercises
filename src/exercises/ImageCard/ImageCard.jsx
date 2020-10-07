import React from "react"
import { Header } from "../../componentsUtils"
import AngularLogo from "../../resources/angular_logo.png"
import JsLogo from "../../resources/js_logo.png"
import ReactLogo from "../../resources/react_logo.png"
import VueJs from "../../resources/vue_js_logo.png"
import "./ImageCard.scss"

const ImageContainer = (logo, alt) => <img className="img" src={logo} alt={alt} height={200} width={200} />

function ImageCard() {
    const description = "In this exercise, different images are displayed in a container"

    return (
        <>
            <Header title="Front End Technologies" description={description} />
            <div className="image-container">
                {ImageContainer(AngularLogo, "Angular JS")}
                {ImageContainer(JsLogo, "Javascript")}
                {ImageContainer(ReactLogo, "React JS")}
                {ImageContainer(VueJs, "Vue JS")}
            </div>
        </>
    )

}

export default ImageCard
import React from "react"
import { Header } from "../../componentsUtils"
import Evening from "../../resources/Screenshots/Evening.jpeg"
import Morning from "../../resources/Screenshots/morning.jpg"
import Night from "../../resources/Screenshots/Night.jpg"
import Noon from "../../resources/Screenshots/Noon.jpg"

const getContent = (hour) => {
    if (hour >= 6 && hour < 12) {
        return { image: Morning, message: "Good Morning" };
    } else if (hour >= 12 && hour < 16) {
        return { image: Noon, message: "Good Afternoon" };
    } else if (hour >= 16 && hour < 22) {
        return { image: Evening, message: "Good Evening" };
    } else {
        return { image: Night, message: "Good Night" };
    }
}

const TimesOfDay = () => {
    const date = new Date()
    const hour = date.getHours()

    const content = getContent(hour)

    return (
        <>
            <Header title="Times of the day"
                description="In this exercise, background of page is changed based on times of the day" />
            <div style={{
                backgroundImage: `url(${content.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                flexDirection: "column"
            }}>

                <h1 style={{ fontSize: "50px" }}>{`Hi, ${content.message}:-)`}</h1>
            </div>
        </>
    )
}

export default TimesOfDay
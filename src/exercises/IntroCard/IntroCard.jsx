import React from "react"
import Photo from "../../resources/sfs.jpeg"
import { Header } from "../../componentsUtils"
import "./IntroCard.scss"

const userData = {
    firstName: "Syed Farath",
    lastName: "Sayeed",
    skills: ["React JS", "TypeScript", "Redux", "CSS", "HTML",
        "Jenkins", "Maven", "Node JS", "Sonar", "Nexus", "Git", "Gitlab", "JIRA", "GraphQL"],
    joiningDate: "Aug 30, 2020",
    location: "France",
    jobTitle: "Front end developer"
}

const IntroCard = () => {
    const { firstName, lastName, skills, joiningDate, location, jobTitle } = userData
    const fullName = firstName + " " + lastName
    return (
        <>
            <Header title="Introduction card" description="In this exercise, an introduction card is developed as shown below" />
            <div className="card">
                <img className={"img"} src={Photo} alt={fullName} />
                <h2>{fullName}</h2>
                <h5>{`${jobTitle}, ${location}`}</h5>
                <h3>Skills</h3>
                <div className="skills">
                    {skills.map(skill => <div key={skill} className="chip">{skill}</div>)}
                </div>
                <footer>
                    {`Joined on ${joiningDate}`}
                </footer>
            </div>
        </>
    )
}

export default IntroCard
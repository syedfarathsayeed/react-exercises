import React from "react"
import Photo from "../../resources/sfs.jpeg"
import "./IntroCard.scss"

function IntroCard() {
    const skills = ["React JS", "TypeScript", "Redux", "CSS", "HTML",
        "Jenkins", "Maven", "Node JS", "Sonar", "Nexus", "Git", "Gitlab", "JIRA", "GraphQL"]
    return (
        <div className="card">
            <img className={"img"} src={Photo} alt="Syed Farath Sayeed" />
            <h2>Syed Farath Sayeed</h2>
            <h5>Front end developer, France</h5>
            <h3>Skills</h3>
            <div className="skills">
                {skills.map(skill => <div key={skill} className="chip">{skill}</div>)}
            </div>
            <footer>
                Joined on Aug 30, 2020
            </footer>
        </div>
    )
}

export default IntroCard
import React from "react"
import styled from "styled-components"
import photo from "../../resources/sfs.jpeg"
import { userData } from "../IntroCard/IntroCard"

const Header = styled.div`
    background: ${props => props.isDarkMode ? "black" : "#9BF38F"};
    height: 200px;
`

const ImageContainer = styled.img`
    border-radius: 50%;
    height: 150px;
    margin: 20px;
`

const Title = styled.p`
    font-size: 35px;
    color: white;
    margin-bottom: 10px;
    text-align: left;
`

const Subtitle = styled.p`
    font-size: 15px;
    color: white;
    text-align: left;
    margin-top: 0px;
`

const InformationContainer = styled.div`
    position: absolute;
    left: 200px;
    top: -10px;
`

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    width:100%
`

const SubscriptionContainer = styled.div`
    background-color: ${props => props.isDarkMode ? "black" : "lightblue"};
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: lighter;
    padding: 20px;
`


const SubscriptionCard = (props) => {
    const { isDarkMode } = props
    return (
        <SubscriptionContainer {...props}>
            <h1 style={{ color: isDarkMode ? "white" : "black" }}>SUBSCRIBE</h1>
            <h5 style={{ color: isDarkMode ? "white" : "black" }}>Sign up with your email address to receive news and updates.</h5>
            <div>
                <input placeholder="First name" />
                <input placeholder="Last name" />
                <input placeholder="Email" />
            </div>
            <button>Subscribe</button>
        </SubscriptionContainer>
    )
}


const ContentContainer = styled.div`
    margin: 20px;
    display:flex;
    align-items: center;
    flex-direction: column;
`

const Button = styled.button`
    min-width: 80px;
    margin:10px;
    &:hover {
        cursor: pointer;
        background: red;
    };
    &:focus {
        outline: none
    }
`

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false
        }
    }

    handleClick = () => {
        const isDarkMode = !this.state.isDarkMode
        this.props.onClick(isDarkMode)
        this.setState({ isDarkMode })
    }

    render() {
        return (
            <ContentContainer>
                <p>I am Syed Farath Sayeed, a new developer in town. I have been learning React JS from quite a while.
                I have started with some simple exercises. All exercises could be found in
                react-exercises/src/exercises folder. In this exercise I am trying out to simple
                change the color of the page, based on mode selected.</p>
                <Button onClick={this.handleClick}>Change Mode</Button>
            </ContentContainer>
        )
    }

}


class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false
        }
    }

    handleClick = (isDarkMode) => {
        this.setState({ isDarkMode })
    }

    render() {
        const { firstName, lastName, skills, location, jobTitle } = userData
        const { isDarkMode } = this.state
        return (
            <>
                <Header isDarkMode={isDarkMode}>
                    <ImageContainer src={photo} alt="Syed Farath Sayeed" />
                    <InformationContainer>
                        <Title>{firstName} {lastName}</Title>
                        <Subtitle>{jobTitle}, {location}</Subtitle>
                        <SkillsContainer>
                            {skills.map(skill => <div key={skill} className="chip">{skill}</div>)}
                        </SkillsContainer>
                    </InformationContainer>
                    <Content onClick={this.handleClick} />
                    <FooterContainer>
                        <SubscriptionCard isDarkMode={isDarkMode} />
                    </FooterContainer>
                </Header>
            </>
        )
    }
}

export default Portfolio
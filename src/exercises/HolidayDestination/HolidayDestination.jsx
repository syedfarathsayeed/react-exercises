import React from "react"
import { Header, Button } from "../../componentsUtils"
import styled from "styled-components"

const RootContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const CountryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 600px;
    background: lightgrey;
    padding: 20px;
    border-radius: 10px;
`

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    &>* {
        margin-right: 10px;
    }
`

const Details = styled.div`
    margin: 20px;
`

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CountryCard = (country) => {

    const { name, languages, population, capital, flag, currencies } = country

    return (
        <CountryContainer>
            <TopContainer>
                <img src={flag} alt={name} width="250" height="150" />
                <h2>{name.toUpperCase()}</h2>
            </TopContainer>
            <Details>
                <InfoContainer>
                    <strong>{"Capital:"}</strong>
                    <p>{capital}</p>
                </InfoContainer>
                <InfoContainer>
                    <strong>{"Population:"}</strong>
                    <p>{population}</p>
                </InfoContainer>
                <InfoContainer>
                    <strong>{"Language:"}</strong>
                    <p>{languages[0].name}</p>
                </InfoContainer>
                <InfoContainer>
                    <strong>{"Currency:"}</strong>
                    <p>{currencies[0].name}</p>
                </InfoContainer>
            </Details>
        </CountryContainer>
    )
}

class HolidayDestination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            index: 0
        }
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(countries => {
                this.setState({
                    countries
                })
            })
    }

    handleSelectCountryClick = () => {
        const {countries} = this.state
        this.setState(prevState => ({
            index: prevState.index === countries.length ? 0 : prevState.index++
        }))
    }

    render() {
        const { countries, index } = this.state

        if (countries.length === 0) {
            return <div />;
        } else {
            return (
                <RootContainer>
                    <Header title="Holiday destination"
                        description="In this exercise, a random holiday destination is displayed, whenever select country button is clicked " />
                    <CountryCard {...countries[index]} />
                    <Button onClick={this.handleSelectCountryClick}>Select country</Button>
                </RootContainer>
            )
        }

    }
}

export default HolidayDestination
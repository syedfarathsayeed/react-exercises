import React from "react"
import { Header, Button, CountryCard } from "../../componentsUtils"
import styled from "styled-components"

const RootContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

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
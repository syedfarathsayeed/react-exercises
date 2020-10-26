import React from "react"
import { MdAssessment } from "react-icons/md"
import { FaArrowCircleUp } from 'react-icons/fa';
import { PopulationCard } from "../"
import {
    Description, HeaderContainer, SearchBar, Title, Footer, ScrollToTop,
    CountryCard, TopContainer, Details, InfoContainer, CountriesContainer
} from "./Countries.styles"

const Country = ({ name, languages, population, capital, flag, currencies }) => {
    return (
        <CountryCard>
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
        </CountryCard>
    )
}

const Header = ({ title, description }) => {
    return (
        <HeaderContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </HeaderContainer>
    )
}

const Countries = () => {

    const [countries, setCountries] = React.useState([])

    const [showScroll, setShowScroll] = React.useState(false)

    const [searchValue, setSearchValue] = React.useState("")

    const fetchData = React.useCallback(async () => {
        try {
            const response = await fetch("https://restcountries.eu/rest/v2/all")
            const data = await response.json()
            setCountries(data)
        } catch (error) {
            alert("Url not found")
        }
    }, [])

    React.useEffect(() => {
        fetchData()
    }, [fetchData])


    const scrollToPopulation = () => {
        window.scrollTo({ top: window.innerHeight * 250, behavior: 'smooth' });
    }

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value)
    }

    const hasValue = (value, searchValue) => {
        return value.toLowerCase().includes(searchValue.toLowerCase())
    }

    const filteredCountries = countries.filter(country =>
        hasValue(country.name, searchValue) ||
        hasValue(country.languages[0].name, searchValue) ||
        hasValue(country.capital, searchValue))

    return (
        <>
            <Header title="World countries data" description={"Currently, we have 250 countries"} />
            <SearchBar type="search"
                placeholder="Search countries by name, capital or language"
                value={searchValue}
                onChange={handleChange}
            />
            <MdAssessment size={70} color="orange" onClick={scrollToPopulation} />
            <CountriesContainer>
                {filteredCountries.map(country => <Country key={country.name} {...country} />)}
            </CountriesContainer>
            <PopulationCard />
            <Footer>
                Designed and Built by Syed Farath Sayeed
            </Footer>
            <ScrollToTop showScroll={showScroll}>
                <FaArrowCircleUp onClick={scrollTop} size="40" color="orange" />
            </ScrollToTop>
        </>
    )

}

export default Countries
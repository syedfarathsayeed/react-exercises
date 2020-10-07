import React from "react"
import { Header } from "../../componentsUtils"
import styled from "styled-components"

const getColors = () => {
    let colors = []
    for (let i = 0; i < 32; i++) {
        colors.push('#' + Math.floor(Math.random() * 16777215).toString(16))
    }
    return colors
}

const Container = styled.div`
    width: 820px;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ColorContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: larger;
    border: white 0.2px solid;
    background: ${props => props.backgroundColor ? props.backgroundColor : "red"};
`;

const HexadecimalColorTable = () => {
    return (
        <>
            <Header title="Hexadecimal color table"
                description="In this exercise, a random hexadecimal color table is developed as shown below" />
            <Container>
                {getColors().map(color => (
                <ColorContainer backgroundColor={color}>{color}</ColorContainer>
                ))}
            </Container>
        </>
    )
}

export default HexadecimalColorTable
import React from "react"
import { Header } from "../../componentsUtils"
import "./Population.scss"

const data = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'USA', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russia', population: 146599183 },
    { country: 'Japan', population: 126960000 },
]

const PopulationCard = () => {

    const sortedData = data.sort((a, b) => b.population - a.population)

    const barHeight = 20

    const barComponent = ({ country, population }) => {
        const maxLength = () => {
            const countriesLength = sortedData.map(e => e.country.length)
            return Math.max(...countriesLength)
        }

        const labelX = 20
        const labelY = 30
        const rectX = labelX + maxLength() * 12
        const rectY = labelY / 2

        const barWidth = (num) => num * 0.00000006

        const maxBarWidth = () => {
            const countriesBarWidth = sortedData.map(e => barWidth(e.population))
            return Math.max(...countriesBarWidth)
        }

        return (
            <g>
                <text x={labelX} y={labelY} >{country}</text>
                <rect x={rectX} y={rectY} height={barHeight} width={barWidth(population)} />
                <text x={rectX + maxBarWidth() + 20} y={labelY}>
                    {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </text>
            </g>
        )
    }

    return (
        <>
            <Header title="World population"
                description="In this exercise, ten most populated countries are displayed" />
            <svg height={sortedData.length * 30}>
                {sortedData.map((data, i) => (
                    <g key={i} transform={`translate(0, ${i * barHeight * 1.3})`}>
                        {barComponent(data)}
                    </g>
                ))}
            </svg>
        </>
    )
}

export default PopulationCard
import React from 'react'
import styled from 'styled-components'
import { devices } from './../../utils/devices';

export const CubeTimer = styled.div `
    text-align: center;
`

export const Header = styled.div `
    font-size: calc(10px + 2vmin);
    color: #282c34;
    font-family: 'Russo One', sans-serif;

    text-align: left;
`

export const By = styled.span `
    font-family: 'Indie Flower', cursive;
`;

export const Utilities = styled.div `
    width : 100%;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 5vh;

    @media ${devices.laptop} {
        margin-top: 0;
        max-height: 50vh;
        height: 50vh;
    }
`

const Column = styled.div `
    display: inline-block;
    vertical-align:top;

    width: 100%;
`

export const SchemaStatsColumn = styled(Column) `
    @media ${devices.laptop} {
        width: 22.5%;
        height: 100%;
        position: relative;
    }

    @media ${devices.laptopL} {
        width: 17.5%;
    }
`

export const SchemaRow = styled.div `
    margin: auto;
    width: 100%;

    border: darkgray solid 1px;
    background-color: white;

    margin-top: 5vh;

    @media ${devices.laptop} {
        margin-top: 0;
    }
`

export const StatsRow = styled.div `

    margin-top: 5vh;

    @media ${devices.laptop} {
        position: absolute;
        bottom: 0px;
        width: 100%;
        margin-top: 0;
    }

    border: darkgray solid 1px;
    background-color: white;
`

export const GraphColumn =  styled(Column) `
    margin-top: 5vh;

    @media ${devices.laptop} {
        width: 60%;
        margin-left: 2.5%;
        margin-right: 2.5%;
        margin-top: 0;
        vertical-align: bottom;
    }

    padding: 2vh 2vh 0 2vh;
    border: darkgray solid 1px;
    background-color: white;
`

export const SolvesColumn =  styled(Column) `
    margin-top: 5vh;

    @media ${devices.laptop} {
        width: 12.5%;
        height: 100%;
        margin-top: 0;
    }
    @media ${devices.laptopL} {
        width: 17.5%;
    }
    height: 50vh;

    border: darkgray solid 1px;
    background-color: white;
`

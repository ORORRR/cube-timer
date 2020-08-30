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
        width: 15%;
        height: 100%;
        position: relative;
    }
`

export const SchemaRow = styled.div `
    width: fit-content;
    margin: auto;
`

export const StatsRow = styled.div `
    @media ${devices.laptop} {
        position: absolute;
        bottom: 0px;
        width: 100%;
    }
`

export const GraphColumn =  styled(Column) `
    @media ${devices.laptop} {
        width: 60%;
        margin-left: 5%;
        margin-right: 5%;
        vertical-align: bottom;
    }
`

export const SolvesColumn =  styled(Column) `
    @media ${devices.laptop} {
        width: 15%;
    }
    overflow-y: auto;
    max-height: inherit;
`

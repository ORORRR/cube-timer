import React from 'react'
import styled from 'styled-components'


export const SolveTable = styled.table `
    width: 100%;

    caption {
        margin-bottom: 1vh;
    }

    tbody {
        display:block;
        overflow-y: auto;
        max-height: 46vh;
    
        tr {
            display: table;
            width: 100%;
        }
    }

`

export const DeleteButton = styled.button `
    background-color: #ff4242;
    border: none;
    padding: 6px 9px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 100%;
    color: white;

    &:hover {
        background-color: #ab2422;
    }

    &:focus {
        outline:0;
    }
`
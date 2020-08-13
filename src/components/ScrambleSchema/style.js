import React from 'react'
import styled from 'styled-components'

const handleColorType = color => {
    switch (color) {
        case "G":
            return "green";
        case "R":
            return "red";
        case "Y":
            return "yellow";
        case "O":
            return "orange";
        case "B":
            return "blue";
        case "W":
        default:
            return "white";
    }
  };
 
export const CubeTile = styled.div`
  width: 1em;
  height: 1em;
  background-color: ${props => handleColorType(props.color)};
  border: black 0.05em solid;
`;

const CubeFace = styled.div`
  width: 3.4em;
  height: 3.4em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0;
  position: absolute;
`;

export const GreenCubeFace = styled(CubeFace)`
  left: 4.4em;
  top: 4.4em;
`;
export const BlueCubeFace = styled(CubeFace)`
  left: 11.2em;
  top: 4.4em;
`;
export const WhiteCubeFace = styled(CubeFace)`
  left: 4.4em;
  top: 1em;
`;
export const YellowCubeFace = styled(CubeFace)`
  left: 4.4em;
  top: 7.8em;
`;
export const RedCubeFace = styled(CubeFace)`
  left: 7.8em; 
  top: 4.4em;   
`;
export const OrangeCubeFace = styled(CubeFace)`
  left:1em;
  top: 4.4em;
`;

export const CubeSchema = styled.div`
  width: 13.6em;
  height: 10.2em;
  position: relative;
  padding: 1em;
  border: darkgray solid 1px;
`;



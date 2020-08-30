import React from 'react'
import styled from 'styled-components'

const handleColorType = color => {
    switch (color) {
        case "G":
            return "#84E41C";
        case "R":
            return "#C74446";
        case "Y":
            return "#F1ED2A";
        case "O":
            return "#ED8A34";
        case "B":
            return "#057DFC";
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
  display: inline-block;
`;

const CubeFace = styled.div`
  width: 3em;
  height: 3em;
  line-height: 0px;
  position: absolute;
`;

export const GreenCubeFace = styled(CubeFace)`
  left: 3.1em;
  top: 3.1em;
`;
export const BlueCubeFace = styled(CubeFace)`
  left: 9.3em;
  top: 3.1em;
`;
export const WhiteCubeFace = styled(CubeFace)`
  left: 3.1em;
  top: 0;
`;
export const YellowCubeFace = styled(CubeFace)`
  left: 3.1em;
  top: 6.2em;
`;
export const RedCubeFace = styled(CubeFace)`
  left: 6.2em; 
  top: 3.1em;   
`;
export const OrangeCubeFace = styled(CubeFace)`
  left: 0;
  top: 3.1em;
`;

export const CubeSchema = styled.div`
  height: 9.3em;
  width: 12.3em;
  position: relative;
  margin: 1em auto 1em auto;
`;



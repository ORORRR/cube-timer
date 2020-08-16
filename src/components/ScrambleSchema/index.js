import React from 'react';
import { 
    CubeSchema, 
    CubeTile, 
    GreenCubeFace, 
    BlueCubeFace, 
    WhiteCubeFace, 
    YellowCubeFace, 
    RedCubeFace, 
    OrangeCubeFace
} from './style'
import { newCube, scrambleCube } from './../../utils/cube'

const ScrambleSchema = ({ scramble })  => {

    let cube = newCube()
    scrambleCube(cube, scramble)

    const printFace = (cubeFace) => {
        return (
            cubeFace.map((tile, i) => {        
                return (<CubeTile key={i} color={cubeFace[i]}></CubeTile>)
            })
        )
    }

    return (
        <CubeSchema>
            <GreenCubeFace>{printFace(cube[0])}</GreenCubeFace>
            <WhiteCubeFace>{printFace(cube[1])}</WhiteCubeFace>
            <OrangeCubeFace>{printFace(cube[2])}</OrangeCubeFace>
            <BlueCubeFace>{printFace(cube[3])}</BlueCubeFace>
            <YellowCubeFace>{printFace(cube[4])}</YellowCubeFace>
            <RedCubeFace>{printFace(cube[5])}</RedCubeFace>
        </CubeSchema>
    )
    
}

export default ScrambleSchema;
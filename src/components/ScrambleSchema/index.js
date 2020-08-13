import React from 'react';
import {CubeSchema, CubeTile, GreenCubeFace, BlueCubeFace, WhiteCubeFace, YellowCubeFace, RedCubeFace, OrangeCubeFace} from './style'


const ScrambleSchema = ({ scramble })  => {

    let cube = [
        ["G", "G", "G", "G", "G", "G", "G", "G", "G"],
        ["W", "W", "W", "W", "W", "W", "W", "W", "W"],
        ["O", "O", "O", "O", "O", "O", "O", "O", "O"],
        ["B", "B", "B", "B", "B", "B", "B", "B", "B"],
        ["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"],
        ["R", "R", "R", "R", "R", "R", "R", "R", "R"]
    ]

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

const scrambleCube = (cube, scramble) => {
    scramble.forEach( move => {
        cube = turnCubeFace(cube, move)
    })
    return cube
}

const turnCubeFace = (cube, move) => {
    let tmp = []

    switch(move){
        case "R":
            cube[5] = turnFaceClockwise(cube[5])
            //save right side of white face
            tmp = [cube[1][2], cube[1][5], cube[1][8]] 
            //replace right side of white face with right side of green face
            cube[1][2] = cube[0][2]
            cube[1][5] = cube[0][5]
            cube[1][8] = cube[0][8]
            //replace right side of green face with right side of yellow face
            cube[0][2] = cube[4][2]
            cube[0][5] = cube[4][5]
            cube[0][8] = cube[4][8]
            //replace right side of yellow face with left side of blue face
            cube[4][2] = cube[3][6]
            cube[4][5] = cube[3][3]
            cube[4][8] = cube[3][0]
            //replace left side of blue face with saved right side of white face
            cube[3][0] = tmp[2]
            cube[3][3] = tmp[1]
            cube[3][6] = tmp[0]
            break
        case "R'":
            cube =  turnCubeFace(turnCubeFace(turnCubeFace(cube,"R"),"R"),"R")
            break
        case "R2":
            cube =  turnCubeFace(turnCubeFace(cube,"R"),"R")
            break

        case "L":
            cube[2] = turnFaceClockwise(cube[2])
            //save left side of white face
            tmp = [cube[1][0], cube[1][3], cube[1][6]] 
            //replace left side of white face with right side of blue face
            cube[1][0] = cube[3][8]
            cube[1][3] = cube[3][5]
            cube[1][6] = cube[3][2]
            //replace right side of blue face with left side of yellow face
            cube[3][2] = cube[4][6]
            cube[3][5] = cube[4][3]
            cube[3][8] = cube[4][0]
            //replace left side of yellow face with left side of green face
            cube[4][0] = cube[0][0]
            cube[4][3] = cube[0][3]
            cube[4][6] = cube[0][6]
            //replace left side of green face with saved right side of left face
            cube[0][0] = tmp[0]
            cube[0][3] = tmp[1]
            cube[0][6] = tmp[2]
            break
        case "L'":
            cube = turnCubeFace(turnCubeFace(turnCubeFace(cube,"L"),"L"),"L")
            break
        case "L2":
            cube = turnCubeFace(turnCubeFace(cube,"L"),"L")
            break

        case "F":
            cube[0] = turnFaceClockwise(cube[0])
            //save bottom side of white face
            tmp = [cube[1][6], cube[1][7], cube[1][8]] 
            //replace bottom side of white face with right side of orange face
            cube[1][6] = cube[2][8]
            cube[1][7] = cube[2][5]
            cube[1][8] = cube[2][2]
            //replace right side of orange face with top side of yellow face
            cube[2][2] = cube[4][0]
            cube[2][5] = cube[4][1]
            cube[2][8] = cube[4][2]
            //replace top side of yellow face with left side of red face
            cube[4][0] = cube[5][6]
            cube[4][1] = cube[5][3]
            cube[4][2] = cube[5][0]
            //replace left side of red face with saved bottom side of white face
            cube[5][0] = tmp[0]
            cube[5][3] = tmp[1]
            cube[5][6] = tmp[2]
            break
        case "F'":
            cube = turnCubeFace(turnCubeFace(turnCubeFace(cube,"F"),"F"),"F")  
            break
        case "F2":  
            cube = turnCubeFace(turnCubeFace(cube,"F"),"F")  
            break

        case "B":
            cube[3] = turnFaceClockwise(cube[3])
            //save top side of white face
            tmp = [cube[1][0], cube[1][1], cube[1][2]] 
            //replace top side of white face with right side of red face
            cube[1][0] = cube[5][2]
            cube[1][1] = cube[5][5]
            cube[1][2] = cube[5][8]
            //replace right side of red face with bottom side of yellow face
            cube[5][2] = cube[4][8]
            cube[5][5] = cube[4][7]
            cube[5][8] = cube[4][6]
            //replace bottom side of yellow face with left side of orange face
            cube[4][6] = cube[2][0]
            cube[4][7] = cube[2][3]
            cube[4][8] = cube[2][6]
            //replace left side of orange face with saved bottom side of white face
            cube[2][0] = tmp[2]
            cube[2][3] = tmp[1]
            cube[2][6] = tmp[0]
            break
        case "B'":
            cube = turnCubeFace(turnCubeFace(turnCubeFace(cube,"B"),"B"),"B")
            break
        case "B2":
            cube = turnCubeFace(turnCubeFace(cube,"B"),"B")
            break

        case "U":
            cube[1] = turnFaceClockwise(cube[1])
            //save top side of green face
            tmp = [cube[0][0], cube[0][1], cube[0][2]] 
            //replace top side of green face with top side of red face
            cube[0][0] = cube[5][0]
            cube[0][1] = cube[5][1]
            cube[0][2] = cube[5][2]
            //replace top side of red face with top side of blue face
            cube[5][0] = cube[3][0]
            cube[5][1] = cube[3][1]
            cube[5][2] = cube[3][2]
            //replace top side of blue face with top side of orange face
            cube[3][0] = cube[2][0]
            cube[3][1] = cube[2][1]
            cube[3][2] = cube[2][2]
            //replace top side of orange face with saved top side of green face
            cube[2][0] = tmp[0]
            cube[2][1] = tmp[1]
            cube[2][2] = tmp[2]
            break
        case "U'":
            cube = turnCubeFace(turnCubeFace(turnCubeFace(cube,"U"),"U"),"U")
            break
        case "U2":
            cube = turnCubeFace(turnCubeFace(cube,"U"),"U")
            break

        case "D":
            cube[4] = turnFaceClockwise(cube[4])
            //save bottom side of green face
            tmp = [cube[0][6], cube[0][7], cube[0][8]] 
            //replace bottom side of green face with bottom side of orange face
            cube[0][6] = cube[2][6]
            cube[0][7] = cube[2][7]
            cube[0][8] = cube[2][8]
            //replace bottom side of orange face with bottom side of blue face
            cube[2][6] = cube[3][6]
            cube[2][7] = cube[3][7]
            cube[2][8] = cube[3][8]
            //replace bottom side of blue face with bottom side of red face
            cube[3][6] = cube[5][6]
            cube[3][7] = cube[5][7]
            cube[3][8] = cube[5][8]
            //replace bottom side of red face with saved bottom side of green face
            cube[5][6] = tmp[0]
            cube[5][7] = tmp[1]
            cube[5][8] = tmp[2]
            break
        case "D'":
            cube = turnCubeFace(turnCubeFace(turnCubeFace(cube,"D"),"D"),"D")
            break
        case "D2":
            cube = turnCubeFace(turnCubeFace(cube,"D"),"D")
            break

        default: 
            return cube
    }

    return cube
}

const turnFaceClockwise = (cubeFace) => {
    return [
        cubeFace[6], cubeFace[3], cubeFace[0],
        cubeFace[7], cubeFace[4], cubeFace[1],
        cubeFace[8], cubeFace[5], cubeFace[2]
    ]
}

const turnFaceCounterClockwise = (cubeFace) => {
    return [
        cubeFace[2], cubeFace[5], cubeFace[8],
        cubeFace[1], cubeFace[4], cubeFace[7],
        cubeFace[0], cubeFace[3], cubeFace[6]
    ]
}

export default ScrambleSchema;
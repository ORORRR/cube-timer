export const msToTime = (duration) => {
    let seconds = Math.floor((duration / 1000) % 60)
    let minutes = Math.floor((duration / (1000 * 60)) % 60)
    let milliseconds =  parseInt((duration % 1000) / 10)

    if(minutes > 0){
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        minutes += ":"
    }
    else
        minutes = ""

    seconds = (seconds < 10) ? "0" + seconds : seconds
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds

    return minutes + seconds + "." + milliseconds
}

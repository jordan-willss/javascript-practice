/** @create_your_functions_here */

let scoreArray = new Array();
let scoreString = '';

export function startGame() {
    // Setting default array values
    scoreArray = [0, 0];

    return scoreString = '[ ' + scoreArray[0] + ' - ' + scoreArray[1] + ' ]';
}

export function scorePoints(index) {
    // Increment the respective players score by 15 points
    scoreArray[index] += 15

    return scoreString = '[ ' + scoreArray[0] + ' - ' + scoreArray[1] + ' ]';
}
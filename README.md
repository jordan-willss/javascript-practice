### Getting Started

- You'll need Node.js, VSCode, and Git installed on your machine
  - [Download Node.js](https://nodejs.org/en/)
  - [Download Visual Studio Code](https://code.visualstudio.com/download)
  - [Download Git](https://git-scm.com/downloads)
- In VSCode, open the folder containing the cloned project, it's called "javascript-training"
- In the terminal within VSCode, clone the repository using the following HTTPS option
  - `git clone https://jordanwills123@bitbucket.org/jordanwillsrepos/javascript-training.git`
- In the terminal within VSCode, run the command `npm install`
- Once finished, you'll be able to run the command `npm run test` to fully test your functions

#### What Next?

Within the `\scripts` folder in your repository, there are files named `*-logic.js`, in there you can create ES6 compatible functions and use them by default in their respective `*.spec.js` files, which are located in the `\tests` folder

Once you've created some functions, you can use them in the spec file by using logic files import name, e.g. `tennis.functionName()`, given that the import for the `*-logic.js` file is `import * as tennis from '../scripts/tennis-logic'`

#### The Rules!

- No cheating - Using the internet for functions is allowed, copying a similar project entirely is not, and trust me, you'll always know...
- No stressing - This is a gauge of skill, not a benchmark, there's no failing and certainly no repercussions. Afterwards, help and advice can be given but there will be no criticism
- No editing - Don't mess with the tests, again, it's not that serious so if you can't manage a part then it can always be reviewed later
- No peeking - Don't check out the solutions straight away, they're not the best approach anyway, however, if you get stuck they may be able to help

#### What if I'm Completely Stuck?

Send me an email at: jordan.wills@gmail.com

I'll aim to reply quickly, and I promise I don't bite...

### :tennis: Trouble in Tennis Town! :tennis:

The people of Tennis Town have all the balls and rackets they need, but their scoring system has gone down!

They need you to create a new scoring system for them to use, which you can create using the magical powers JS has to offer.

### :computer: Hacker Man 1337 :computer:

A hacker is trying to steal all of your cat images!

You need to create a password that's too strong for him to crack, but not so strong it stops your cat images from loading.

#### Solutions

##### Trouble in Tennis Town

<details>
<summary>Click this to Expand/Collapse.</summary>

```
// This array we will use to keep track of our players scores
let scoreArray = new Array();

// This string will keep track of our scoreboard, imagine it like a 'jumbotron', so it needs to look pretty
let scoreString = '';

// These values correspond to the values that are shown on the imaginary 'jumbotron'
const scoreValues = ['0', '15', '30', '40', 'Deuce', 'Adv. P', 'P Wins!']

// This initializes the game, giving us our starting values and creating our 'jumbotron'
export function startGame() {
    // Setting default score values
    scoreArray = [0, 0];

    // We're going to return what the 'jumbotron' should be displaying given the players scores are 0 and 0
    return scoreString = '[ ' + scoreArray[0] + ' - ' + scoreArray[1] + ' ]';
}

export function scorePoints(index) {
    // Increment the respective players score by a point
    scoreArray[index] += 1;

    // We're going to assign our players scores to a value that can be displayed on the 'jumbotron'
    let playerOneScore = scoreValues[scoreArray[0]];
    let playerTwoScore = scoreValues[scoreArray[1]];


    if (scoreArray[0] === 5 || scoreArray[1] === 5) {
        // Because our final value is 'P Wins!', we need to insert the players number INSIDE of the value
        // We first SLICE our string, to extract the 'P', then we add the number, then we SLICE the ' Wins!', all into an array
        // Once we have that array, we JOIN the array, which gives us a string
        // Inside of the JOIN function, we've added "", e.g. .join(""), this is our separator, which just means an empty string, or no separator
        // The separator is any string, so if it was "_", then each value would be separated by an underscore, e.g. 'P_2_ Wins!'
        const p1 = [scoreValues[6].slice(0, 1), '1', scoreValues[6].slice(1)].join("");
        const p2 = [scoreValues[6].slice(0, 1), '2', scoreValues[6].slice(1)].join("");
        
        // If P1's score is greater than P2's, return p1 (above), if it isn't return p2 (above)
        if (scoreArray[0] > scoreArray[1]) {
            return '[ ' + p1 + ' ]';
        } else {
            return '[ ' + p2 + ' ]';
        }
    } 
    
    // Because both players can't have Advantage, when they both equal 4, we reset them back to 3 and 3 (Deuce)
    else if (scoreArray[0] === 4 && scoreArray[1] === 4) {
        decreasePoints(0);
        decreasePoints(1);
        return '[ ' + scoreValues[4] + ' ]'
    }  
    
    // If P2 has a score of 4, and P1 has a lower score, we need to give that player the Advantage
    else if (scoreArray[0] === 3 && scoreArray[1] === 4) {
        return '[ ' + scoreValues[5] + '2 ]'
    } 
    
    // If P1 has a score of 4, and P2 has a lower score, we need to give that player the Advantage
    else if (scoreArray[0] === 4 && scoreArray[1] === 3) {
        return '[ ' + scoreValues[5] + '1 ]'
    } 
    
    // If both players have a score of 3, we need to diplay Deuce on the 'jumbotron'
    else if (scoreArray[0] === 3 && scoreArray[1] === 3) {
        return '[ ' + scoreValues[4] + ' ]'
    } 
    
    // For any case that isn't mentioned above, we should just show the players' scores
    else {
        return scoreString = '[ ' + playerOneScore + ' - ' + playerTwoScore + ' ]';
    }
}

// Because of the Advantage back to Deuce case, we need to be able to decrease the players' scores
function decreasePoints(index) {
    scoreArray[index] -= 1;
}
```
</details>
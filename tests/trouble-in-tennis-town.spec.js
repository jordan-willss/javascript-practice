import * as tennis from '../scripts/tennis-logic'

/**
 * @using_functions - Do tennis.functionName(...)
 * 
 * @problem Given the game of tennis, players score points in the order: 0, 15, 30, 40, then Game
 * @however When both players are on 40 points, there is a "Deuce"
 * @if The game is on "Deuce", and a player scores, they get "Advantage"
 * @if The player with "Advantage" scores again, that player wins
 * @but If the player without "Advantage" scores, the game returns to the "Deuce" state
 * 
 * @task Create a scoring system that outputs as a string the correct score card
 * @beware The first couple are done for you, but will those work for them all? Can they be improved?
 */

let scoreboard = '';

test('When the score is 0 and 0, the scoreboard reads "[ 0 - 0 ]"', () => {
    scoreboard = tennis.startGame();

    /** @your_code_above */
    expect(scoreboard).toEqual('[ 0 - 0 ]');
});

test('When the score is 0 and 15, the scoreboard reads "[ 0 - 15 ]"', () => {
    scoreboard = tennis.scorePoints(1);
    
    /** @your_code_above */
    expect(scoreboard).toEqual('[ 0 - 15 ]');
});

test('When the score is 15 and 15, the scoreboard reads "[ 15 - 15 ]"', () => {
    
        
    /** @your_code_above */
    expect(scoreboard).toEqual('[ 15 - 15 ]');
});

test('When the score is 15 and 30, the scoreboard reads "[ 15 - 30 ]"', () => {
    
        
    /** @your_code_above */
    expect(scoreboard).toEqual('[ 15 - 30 ]');
});

test('When the score is 30 and 30, the scoreboard reads "[ 30 - 30 ]"', () => {
    
        
    /** @your_code_above */
    expect(scoreboard).toEqual('[ 30 - 30 ]');
});

test('When the score is 30 and 40, the scoreboard reads "[ 30 - 40 ]"', () => {
    
        
    /** @your_code_above */
    expect(scoreboard).toEqual('[ 30 - 40 ]');
});

test('When the score is 40 and 40, the scoreboard reads "[ Deuce ]"', () => {
    
        
    /** @your_code_above */
    expect(scoreboard).toEqual('[ Deuce ]');
});

test('When the first player scores, the scoreboard reads "[ Adv. P1 ]"', () => {
    
        
    /** @your_code_above */
    expect(scoreboard).toEqual('[ Adv. P1 ]');
});

test('When the second player scores, the scoreboard once again reads "[ Deuce ]"', () => {
    
        
    /** @your_code_above */
    expect(scoreboard).toEqual('[ Deuce ]');
});

test('When the second player scores again, the scoreboard reads "[ Adv. P2 ]"', () => {
    
        
    /** @your_code_above */
    expect(scoreboard).toEqual('[ Adv. P2 ]');
});

test('When the second player scores again, the scoreboard reads "[ P2 Wins! ]"', () => {
    
        
    /** @your_code_above */
    expect(scoreboard).toEqual('[ P2 Wins! ]');
});
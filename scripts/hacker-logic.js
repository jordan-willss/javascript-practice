const lowercaseNumbers = 'abcdefghijklmnopqrstuvwxyz';

let result = '';

export function generatePassword(length) {
    result = '';

    for (let i = 0; i < length; i++) {
        result += lowercaseNumbers.charAt(Math.floor(Math.random() * lowercaseNumbers.length));
    }

    return result;
}

// ----------------------------- Do not edit below -----------------------------

export function calculateBreakTime() {
    let time = 0;
    let multiplier = 0;

    time += 32 * result.length;

    result.match(new RegExp(/[a-z]/g)) ? multiplier += 1 : null
    result.match(new RegExp(/[A-Z]/g)) ? multiplier += 1 : null
    result.match(new RegExp(/[0-9]/g)) ? multiplier += 1 : null
    result.match(new RegExp(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)) ? multiplier += 1 : null

    return Math.pow(time, multiplier);
}
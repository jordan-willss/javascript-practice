import * as hacker from '../scripts/hacker-logic'

/**
 * @using_functions - Do hacker.functionName(...)
 * 
 * @problem There is a hacker that is going to break all of your passwords and steal all of your precious cat images!
 * @however You have a program that you've created to beat the hacker and create new passwords that he can't break
 * @but He is getting better and can break increasingly difficult passwords
 * @but If you can create a password that takes longer than his maximum (your minimum) time to break, he can't hack you
 * @however If it takes too long to break, your PC won't be able to load the cat pictures anymore!
 * 
 * @base_time The length gives time: 32 * the length of the password, e.g. if the length is 4: 32 * 4 = 128 milliseconds
 * @multiplier The base time (above) is to the power of the multiplier, the multiplier is increased by 1 for each of the following:
 * @lowercase Any lowercase letters, e.g. 'yngv', the base is 128, the multiplier is increased by 1 (1): 128 ^ 1 = 128 milliseconds
 * @uppercase Any uppercase letters, e.g. 'UdBm', the base is 128, the multiplier is increased by 1 (2): 128 ^ 2 = 16,384 milliseconds
 * @numbers Any numbers, e.g. 'dI9n', the base is 128, the multiplier is increased by 1 (3): 128 ^ 3 = 2,097,152 milliseconds
 * @symbols Any symbols (!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~), e.g. 'hV~1', the base is 128, the multiplier is increased by 1 (4): 128 ^ 4 = 268,435,456 milliseconds
 * 
 * @task Create a method to generate passwords whose crack time falls between some given time values
 * @beware We are dealing with powers of numbers, so the crack time will be exponentially big!
 */

test('Longer than 100 milliseconds to break, but less than 300 milliseconds', () => {
    let password = hacker.generatePassword(8);

    /** @your_code_above */
    console.log('Password: ' + password);
    console.log('256 > password < 1000: ' + hacker.calculateBreakTime(password));
    expect(hacker.calculateBreakTime(password)).toBeGreaterThan(100);
    expect(hacker.calculateBreakTime(password)).toBeLessThan(300);
});

test('Longer than 20,000 milliseconds to break, but less than 40,000 milliseconds', () => {
    let password = hacker.generatePassword(8);

    /** @your_code_above */
    console.log('Password: ' + password);
    console.log('10,000 > password < 40,000: ' + hacker.calculateBreakTime(password));
    expect(hacker.calculateBreakTime(password)).toBeGreaterThan(20000);
    expect(hacker.calculateBreakTime(password)).toBeLessThan(100000);
});

test('Longer than 5,000,000 milliseconds to break, but less than 15,000,000 milliseconds', () => {
    let password = hacker.generatePassword(8);

    /** @your_code_above */
    console.log('Password: ' + password);
    console.log('5,000,000 > password < 15,000,000: ' + hacker.calculateBreakTime(password));
    expect(hacker.calculateBreakTime(password)).toBeGreaterThan(5000000);
    expect(hacker.calculateBreakTime(password)).toBeLessThan(15000000);
});

test('Longer than 5,000,000,000 milliseconds to break, but less than 30,000,000,000 milliseconds', () => {
    let password = hacker.generatePassword(8);

    /** @your_code_above */
    console.log('Password: ' + password);
    console.log('5,000,000,000 > password < 30,000,000,000: ' + hacker.calculateBreakTime(password));
    expect(hacker.calculateBreakTime(password)).toBeGreaterThan(5000000000);
    expect(hacker.calculateBreakTime(password)).toBeLessThan(30000000000);
});
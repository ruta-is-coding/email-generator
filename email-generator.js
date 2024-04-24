//Empty email generator function
function generateEmail(length, includeLowercase, includeUppercase, includeNumbers) {
    let email = '';
    let lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let uppercaseAlphabet = lowercaseAlphabet.toUpperCase();
    let numbers = '0123456789';
    let emailCharacters = (includeLowercase ? lowercaseAlphabet : '') + (includeUppercase ? uppercaseAlphabet : '') + (includeNumbers ? numbers : '');

    for (let i = 0; i < length; i++) {
        email += findRandomCharInString(emailCharacters);
    }

    return email
}

function findRandomCharInString(string) {
    let randomPosition = Math.floor(Math.random() * string.length);
    return string[randomPosition];
}


const emailNameLength = 10
const includeLowercase = true
const includeUppercase = true
const includeNumbers = true

const email = generateEmail(emailNameLength, includeLowercase, includeUppercase, includeNumbers);

console.log(`Generated email: ${email}@bit.lt`)
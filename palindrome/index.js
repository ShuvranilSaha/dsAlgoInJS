function palindrome(str) {
    const reversed = str.split('').reverse().split('');
    return str === reversed;
}

function palindromeAlternate(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;
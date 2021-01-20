function reverseRecursion(str) {
    if (str === "") {
        return "";
    } else {
        return reverseRecursion(str.substr(1)) + str.charAt(0);
    }
}

// with reduce method ES16
function reverseWithReduce(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}

// with Operators reverse
function reverseWithOperator(str) {
    return (str === "") ? "" : reverseWithOperator(str.substr(1)) + str.charAt(0);
}
// basic for Loop

function reverseWithForLoop(str) {
    let reversed = '';
    for (let s of str) {
        reversed = s + reversed;
    }
    return reversed;
}

module.exports = reverseRecursion;
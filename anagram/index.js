module.exports = anagram;

function anagram(String str1, String str2) {
    const charMapA = buildCharMap(str1);
    const charMapB = buildCharMap(str2);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }

    for (let char in charMapA){
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}


function anagram2(String str1, String str2) {
    return cleanString(str1) === cleanString(st2);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

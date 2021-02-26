// function stair(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//         for (let col = 0; col < n; col++) {
//             if (col <= row) {
//                 stair += "#";
//             } else {
//                 stair += " ";
//             }
//         }
//         console.log(stair);
//     }
// }

function stairRecursion(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
    if (n === star.length) {
        console.log(stair);
        return stairRecursion(n, row + 1)
    }
    if (stair.length <= row) {
        stair += "#";
    } else {
        stair += " ";
    }
    stairRecursion(n, row, stair);
}

module.exports = stair;
// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     for (let row = 0; row < n; row++) {
//         let level = '';
//         for (let col = 0; col < 2 * n - 1; col++) {
//             if (midpoint - row <= col && midpoint + row >= col) {
//                 level += "#";
//             } else {
//                 level += " ";
//             }
//         }
//         console.log(level);
//     }
// }

function pyramidRecursion(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramidRecursion(n, row + 1);
    }

    const midPoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        add = "#";
    } else {
        add = " ";
    }
    pyramidRecursion(n, row, level + add);
}
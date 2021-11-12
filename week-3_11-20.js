// 11. Right Triangle Numbered 1-9
function numRepRightTri(rows) {
    let string = "";
    let k;
    for (let i = 1; i <= rows; i++) {
        if (i % 2 == 0) {
            k = 2;
        }
        else {
            k = 1;
        }
        for (let j = 1; j <= i; j++, k += 2) {
            string = string + " " + k;
        }
        string += "\n";
    }
    return string;
}
console.log(numRepRightTri(5));

// 12. Numbered Square Pattern 1-5
function numSquare(rows) {
    let string = "";
    for (let i = rows; i >= 1; i--) {
        for (let j = i; j < rows; j++) {
            string = string + j + " ";
        }
        for (let k = rows - i; k < rows; k++) {
            string = string + 5 + " ";
        }
        string += "\n";
    }
    return string;
}
console.log(numSquare(5));

// 13. Spiral Number Pattern
// function printSpiral(size) {
//     // Create row and col to traverse rows and columns
//     let row = 0, col = 0;
//     let boundary = size - 1;
//     let sizeLeft = size - 1;
//     let flag = 1;
//     // Variable to determine the movement r = right, l = left, d = down, u = upper
//     let move = 'r';
//     // Array for matrix
//     let matrix = new Array(size);
//     for (let i = 0; i < size; i++) {
//         matrix[i] = new Array(size).fill(0);
//     }
//     for (let i = 1; i < size * size + 1; i++) {
//         matrix[row][col] = i;
//         // switch-case to determine the next index
//         switch (move) {
//             // If right, go right
//             case 'r':
//                 col += 1;
//                 break;
//             // If left, go left
//             case 'l':
//                 col -= 1;
//                 break;
//             // If up, go up
//             case 'u':
//                 row -= 1;
//                 break;
//             // If down, go down
//             case 'd':
//                 row += 1;
//                 break;
//         }
//         // Check if the matrix has reached array boundary
//         if (i == boundary) {
//             // Add the left size for the next boundary
//             boundary += sizeLeft;
//             // If 2 rotations has been made, decrease the size left by 1
//             if (flag != 2) {
//                 flag = 2;
//             }
//             else {
//                 flag = 1;
//                 sizeLeft -= 1;
//             }
//             // switch-case to rotate the movement
//             switch (move) {
//                 // If right, rotate to down
//                 case 'r':
//                     move = 'd';
//                     break;
//                 // If down, rotate to left
//                 case 'd':
//                     move = 'l';
//                     break;
//                 // If left, rotate to up
//                 case 'l':
//                     move = 'u';
//                     break;
//                 // If up, rotate to right
//                 case 'u':
//                     move = 'r';
//                     break;
//             }
//         }
//     }
//     // Print the matrix
//     for (row = 0; row < size; row++) {
//         for (col = 0; col < size; col++) {
//             let n = matrix[row][col];
//             if (n < 10)
//                 console.log(n + " ");
//             else
//                 console.log(n + " ");
//         }
//         console.log("\n");
//     }
// }
// console.log(printSpiral(5));

// 14. Row-Increasing-Numbered Right Triangle
function rowNumIncRightTri(rows) {
    let string = "";
    let k = 1;
    for (let i = 1; i <= rows; i++) {
        k = i;
        for (let j = 1; j <= i; j++) {
            string = string + k + " ";
            k = k + rows - j;
        }
        string += "\n";
    }
    return string;
}
console.log(rowNumIncRightTri(5));

// 15. Two Numbered-Right-Triangle
function twoNumRightTri(rows) {
    let string = "";
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            string = string + j;
        }
        for (let j = i * 2; j < rows * 2; j++) {
            string = string + " ";
        }
        for (let l = i; l >= 1; l--) {
            string = string + l;
        }
        string += "\n";
    }
    return string;
}
console.log(twoNumRightTri(5));

// 16. Numbered Pattern 0-9
function justNumPattern(rows) {
    let string = "";
    string += "0\n";
    for (let i = rows; i >= 1; i--) {
        for (let j = i; j <= 9; j++) {
            string = string + j;
        }
        string += "0";
        for (let j = rows; j >= i; j--) {
            string = string + j;
        }
        string += "\n";
    }
    return string;
}
console.log(justNumPattern(9));

// 17. Number-Diamond Pattern
function numDiamondPattern(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = i; j < 5; j++) {
            string += " ";
        }
        for (let k = 1; k < (i * 2); k++) {
            string += k;
        }
        string += "\n";
    }
    for (let i = 4; i >= 1; i--) {
        for (let j = 5; j > i; j--) {
            string += " ";
        }
        for (let k = 1; k < (i * 2); k++) {
            string += k;
        }
        string += "\n";
    }
    return string;
}
console.log(numDiamondPattern(5));

// 18. Number Hour-Glass Pattern
function numHourGlass(rows_no) {
    let i, j, k;
    let string = "";
    for (i = 1; i <= rows_no; i++) {
        // printing i spaces at the beginning of each row
        for (k = 1; k < i; k++) {
            string += " ";
        }
        // printing i to rows value at the end of each row
        for (j = i; j <= rows_no; j++) {
            string = string + j + " ";
        }
        string += "\n";
    }
    // for loop for printing lower half
    for (i = rows_no - 1; i >= 1; i--) {
        // printing i spaces at the beginning of each row
        for (k = 1; k < i; k++) {
            string += " ";
        }
        // printing i to rows value at the end of each row
        for (j = i; j <= rows_no; j++) {
            string = string + j + " ";
        }
        string += "\n";
    }
    return string;
}
console.log(numHourGlass(7));

// 19. Hollow-Diamond-Number Pattern
function numHollowDiamondPattern(rows) {
    let string = "";
    // upper part
    for (let i = 1; i <= 4; i++) {
        for (let j = 4; j >= (i - 1) * 2 - 1; j--) {
            string += " ";
        }
        string += i;
        for (let j = 2; j <= (i - 1) * 4; j++) {
            string += " ";
        }
        if (i > 1) {
            string += i;
        }
        string += "\n";
    }
    for (let i = 3; i >= 1; i--) {
        for (let j = 4; j >= (i - 1) * 2 - 1; j--) {
            string += " ";
        }
        string += i;
        for (let j = 2; j <= (i - 1) * 4; j++) {
            string += " ";
        }
        if (i > 1) {
            string += i;
        }
        string += "\n";
    }
    return string;
}
console.log(numHollowDiamondPattern(4));

// 20. Inverted Hollow-Dashed Triangle
function invDashedTriangle(rows) {
    let string = "";
    for (let i = rows; i >= 1; i--) {
        for (let j = i; j < rows; j++) {
            string += " ";
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            if (i == rows) {
                string += "-";
            } else if (k == (2 * i - 1)) {
                if (k == 1) continue;
                string += "/";
            } else if (k == 1) {
                string += "\\";
            }
            else {
                string += " ";
            }
        }
        string += "\n";
    }
    return string;
}
console.log(invDashedTriangle(9));
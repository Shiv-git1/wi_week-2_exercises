// 1. Diamond-Star Pattern
function diamondStarPattern(n) {
    let string = "";
    // upper part
    for (let i = 1; i <= n; i++) {
        // print spaces
        for (let j = n; j > i; j--) {
            string += " ";
        }
        // print star
        for (let k = 0; k < i * 2 - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    // lower part
    for (let i = 1; i <= n - 1; i++) {
        // print spaces
        for (let j = 0; j < i; j++) {
            string += " ";
        }
        // print star
        for (let k = (n - i) * 2 - 1; k > 0; k--) {
            string += "*";
        }
        string += "\n";
    }
    return string;
}
console.log(diamondStarPattern(5));

// 2. Hollow-Diamond Pattern
function hollowDiamondPattern(n) {
    let string = "";
    // upper part
    for (let i = 1; i <= n; i++) {
        // print spaces
        for (let j = n; j > i; j--) {
            string += " ";
        }
        // print star
        for (let k = 0; k < i * 2 - 1; k++) {
            if (k === 0 || k === 2 * i - 2) {
                string += "*";
            }
            else {
                string += " ";
            }
        }
        string += "\n";
    }
    // lower part
    for (let i = 1; i <= n - 1; i++) {
        // print spaces
        for (let j = 0; j < i; j++) {
            string += " ";
        }
        // print star
        for (let k = (n - i) * 2 - 1; k >= 1; k--) {
            if (k === 1 || k === (n - i) * 2 - 1) {
                string += "*";
            }
            else {
                string += " ";
            }
        }
        string += "\n";
    }
    return string;
}
console.log(hollowDiamondPattern(5));

// Inverted Right-angle triangle Star Pattern
function invertdRightTri(n) {
    let string = "";
    let j;
    for (let i = 1; i <= n; i++) {
        for (j = 1; j < i; j++) {
            string += " ";
        }
        for (j = i; j <= n; j++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
}
console.log(invertdRightTri(5));

// 3. Inverted Hollow Right-angle triangle Star Pattern
function invertHollowRightTri(n) {
    let string = "";
    for (let i = n; i > 0; i--) {
        for (let j = n - i; j > 0; j--) {
            string += " ";
        }
        if (i == 1 || i == n)
            for (j = 1; j <= i; j++) {
                string += "*";
            }
        else {
            for (j = 1; j <= i; j++) {
                if (j == 1 || j == i)
                    string += "*";
                else
                    string += " ";
            }
        }
        string += "\n";
    }
    return string;
}
console.log(invertHollowRightTri(5));

// 4. Downward Hollow Triangle
function downHollowTriangle(rows) {
    let string = "";
    for (let i = rows; i >= 1; i--) {
        for (let j = i; j < rows; j++) {
            string += " ";
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            if (k == 1 || i == rows || k == (2 * i - 1)) {
                string += "*";
            }
            else {
                string += " ";
            }
        }
        string += "\n";
    }
    return string;
}
console.log(downHollowTriangle(5));

// 5. Hollow Diamond star Pattern
function hollowDiamondStarPattern(n) {
    let string = "";
    // upper part
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            string += "*";
        }
        for (j = 1; j <= (i * 2 - 2); j++) {
            string += " ";
        }
        for (j = i; j <= n; j++) {
            string += "*";
        }
        string += "\n";
    }
    // lower part
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            string += "*";
        }
        for (j = 1; j <= (n * 2 - i * 2); j++) {
            string += " ";
        }
        for (j = 1; j <= i; j++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
}
console.log(hollowDiamondStarPattern(5));

// 6. Inverted increasing-decreasing Right Triangle Star Pattern
function incDecInvRightTri(rows) {
    let string = "";
    // upper part
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j < i; j++) {
            string += " ";
        }
        for (let k = i; k <= rows; k++) {
            string = string + "*";
        }
        string += "\n";
    }
    // lower part, printing one row less
    for (let i = rows - 1; i >= 1; i--) {
        for (let j = 1; j < i; j++) {
            string += " ";
        }
        for (let k = i; k <= rows; k++) {
            string = string + "*";
        }
        string += "\n";
    }
    return string;
}
console.log(incDecInvRightTri(5));

// 7. Plus-sign Star Pattern
function plusSignPattern(n) {
    let string = "";
    for (let i = 1; i <= n * 2 - 1; i++) {
        if (i != n)
            for (let j = 1; j <= n; j++) {
                if (j == n) {
                    string += "+";
                }
                string += " ";
            }
        else {
            for (let j = 1; j <= n * 2 - 1; j++) {
                string += "+";
            }
        }
        string += "\n";
    }
    return string;
}
console.log(plusSignPattern(5));

// 8. X-Sign Star Pattern
function xSignPattern(n) {
    let string = "";
    let k = n * 2 - 1;

    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= k; j++) {
            if (j == i || j == k - i + 1) {
                string += "*";
            }
            string += " ";
        }
        string += "\n";
    }
    return string;
}
console.log(xSignPattern(4));

// 9. House-Star Pattern
function houseStarPattern(rows) {
    let string = "";
    let star = 0;
    for (let i = 0; i < rows; i++) {
        if (i < 5) {
            /* Printing upper triangle */
            for (let space = 1; space < 5 - i; space++) {
                string += " ";
            }
            /* Printing stars */
            while (star != (2 * i + 1)) {
                string += "*";
                star++;;
            }
            star = 0;
            /* move to next row */
            string += "\n";
        } else {
            /* Printing bottom walls of huts */
            for (j = 0; j < 9; j++) {
                if ((parseInt(j / 3)) == 1) {
                    string += " ";
                }
                else {
                    string += "*";
                }
            }
            string += "\n";
        }
    }
    return string;
}
console.log(houseStarPattern(8));

// 10. Inverted-Right-Triangle-Numbered
function invNumRightTri(rows) {
    let string = "";
    for (let i = rows; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            string = string + j + " ";
        }
        string += "\n";
    }
    return string;
}
console.log(invNumRightTri(5));


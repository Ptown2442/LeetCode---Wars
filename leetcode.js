// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     draw () {
//         console.log(this);
//     }
// }

// let test = 'ILVX';

// function romanConvert(roman) {
//     let ans = 0;
//     let count = roman.length;
//     for (let i = 0;i < count; i++){
//         if (roman[i] === 'C' && roman[i+1] === 'M') {
//             ans += 900;
//             i++;
//         } else if (roman[i] === 'C' && roman[i+1] === 'D') {
//             ans += 400;
//             i++;
//         } else if (roman[i] === 'C') {
//             ans += 100;
//         } else if (roman[i] === 'X' && roman[i+1] === 'C') {
//             ans += 90;
//             i++;
//         } else if (roman[i] === 'X' && roman[i+1] === 'L') {
//             ans += 40;
//             i++;
//         } else if (roman[i] === 'X') {
//             ans += 10;
//         } else if (roman[i] === 'I' && roman[i+1] === 'X') {
//             ans += 9;
//             i++;
//         } else if (roman[i] === 'I' && roman[i+1] === 'V') {
//             ans += 4;
//             i++;
//         } else if (roman[i] === 'I') {
//             ans += 1;
//         } else if (roman[i] === 'V') {
//             ans += 5;
//         } else if (roman[i] === 'D') {
//             ans += 500;
//         } else if (roman[i] === 'L') {
//             ans += 50;
//         } else if (roman[i] === 'M') {
//             ans += 1000;
//         } else {
//             return ans;
//         }
//     }
//     return ans;
// }




let ratings = [5, 4, 3, 3, 3];
var candy = function(ratings) {
    let val = Math.min(...ratings);
    let diff = 0;
    let count = ratings.length;
    for (let i of ratings) {
        if (i > val) {
            val = i;
            diff ++;
        }
    }
    return (diff)? (count+diff) : count;
};


let tried = new Set(ratings);



let s = 'string1';
let t = '1gnirts';


var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if ((!mapS.has(charS) && !mapT.has(charT))) {
            mapS.set(charS, charT);
            mapT.set(charT, charS);
        } else if (mapS.get(charS) !== charT || mapT.get(charT) !== charS) {
            return false;
        }
    }

    return true;

};
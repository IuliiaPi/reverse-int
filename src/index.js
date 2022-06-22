module.exports = function reverse(n) {
    let abs = Math.abs(n);
    let numToStr = abs.toString();
    let strToArray = numToStr.split("");
    let reverseArray = strToArray.reverse();
    let arrayToStr = reverseArray.join("");
    let strToNum = Number(arrayToStr);
    let result = strToNum; // * Math.sign(n);
    return result;
}

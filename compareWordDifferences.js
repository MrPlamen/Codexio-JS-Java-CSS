function wordsComparison(input) {
    let [firstWord, secondWord] = [...input];
    firstChars = [...firstWord];
    secondChars = [...secondWord];
    let firstLettersCount = {};
    let secondLettersCount = {};
    let diff = 0;
 
    for (let letter of firstWord) {
        if (firstLettersCount.hasOwnProperty(letter)) {
            firstLettersCount[letter]++;
        } else {
            firstLettersCount[letter] = 1;
        }
    }
 
    for (let letter of secondWord) {
        if (secondLettersCount.hasOwnProperty(letter)) {
            secondLettersCount[letter]++;
        } else {
            secondLettersCount[letter] = 1;
        }
    }
 
    for (let key in firstLettersCount) {
        if (!secondLettersCount.hasOwnProperty(key)) {
            diff += firstLettersCount[key];
        } else {
            if (firstLettersCount[key] !== secondLettersCount[key]) {
                diff += Math.abs(firstLettersCount[key] - secondLettersCount[key]);
            }
        }
    }
    for (let key in secondLettersCount) {
        if (!firstLettersCount.hasOwnProperty(key)) {
            diff += secondLettersCount[key];
        }
    }
    
    return diff;
 
}
 
const wordInput = ['codewars', 'hackerrank'];
 
console.log(wordsComparison(wordInput));

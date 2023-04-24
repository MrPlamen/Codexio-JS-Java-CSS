function wordsComparison(input) {
    let [firstWord, secondWord] = [...input];

    let firstChars = [...firstWord];
    let secondChars = [...secondWord];

    removeExcessiveLetters(firstChars, secondChars);
    removeExcessiveLetters(secondChars, firstChars);

    // These are the resulting words, if needed: 

    let firstWordFinal = firstChars.join('');
    let secondWordFinal = secondChars.join('');

    // This is only the number of removed words:

    let result = (firstWord.length - firstWordFinal.length);
    result += (secondWord.length - secondWordFinal.length);

    return result + firstWordFinal + secondWordFinal;

}

const wordInput = ['codewars', 'hackerrank'];

console.log(wordsComparison(wordInput));


function removeExcessiveLetters(currentCharArray, otherCharArray) {

    for (let letter of currentCharArray) {
        if (!otherCharArray.includes(letter)) {

            removeLetters(currentCharArray, letter);

        } else {
            let firstCharsOccurences = currentCharArray.filter(x => x == letter).length;
            let secondCharsOccurences = otherCharArray.filter(x => x == letter).length;

            let differenceInCount = firstCharsOccurences - secondCharsOccurences;

            while (differenceInCount > 0) {
                removeLetters(currentCharArray, letter);
                differenceInCount--;
            }

            while (differenceInCount < 0) {
                removeLetters(otherCharArray, letter);
                differenceInCount++;
            }
        }
    }
}

function removeLetters(array, letter) {

    let index = array.indexOf(letter);
    array.splice(index, 1, '');

}


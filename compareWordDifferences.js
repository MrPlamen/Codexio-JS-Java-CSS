function wordsComparison(input) {
    const [firstWord, secondWord] = [...input];

    const firstChars = [...firstWord];
    const secondChars = [...secondWord];

    removeExcessiveLetters(firstChars, secondChars);
    removeExcessiveLetters(secondChars, firstChars);

    const firstWordFinal = firstChars.join('');
    const secondWordFinal = secondChars.join('');

    let result = (firstWord.length - firstWordFinal.length);
    result += (secondWord.length - secondWordFinal.length);

    return result;
}

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

const wordInput = ['codewars', 'hackerrank'];
console.log(wordsComparison(wordInput));

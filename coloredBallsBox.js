function coloredBalls(data) {
    const input = [...data];
    let box = [];
    let counter = 0;

    readInput(input,box);

    for (let ball in box) {
        while (!onlyFirstColorLeft(box)) {
            box.pop();
            counter++;
        }
    }

    return counter;
}

function readInput(input,box) {
    for (let entry of input) {
        if (entry === 'End') {
            break;
        }

        let [color, count] = entry.split(': ');

        for (let i = 0; i < count; i++) {
            box.push(color);
        }
    }
}

function onlyFirstColorLeft(box) {
    let firstColor = box[0];
    for (let ball in box) {
        if (box[ball] !== firstColor) {
            return false;
        }
    }
    return true;
}

const input = ['Red: 5', 'Blue: 3', 'Yellow: 2', 'Green: 3', 'End'];
console.log(coloredBalls(input));

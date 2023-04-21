function coloredBalls(data) {
 
    let [...input] = data;
    let box = [];
    let counter = 0;
 
    for (let entry of input) {
        if (entry === 'End') {
            break;
        }
        let [color, count] = entry.split(': ');
        for (let i = 0; i < count; i++) {
            box.push(color);
        }
    }
 
    for (let ball in box) {
        while(!onlyOneColor()) {
            box.pop();
            counter++;
        }
    }
 
    return counter;
 
    function onlyOneColor() {
        let pickedColor = box[0];
        for (let ball in box) {
            if (box[ball] !== pickedColor) {
                return false;
            }
        }
        return true;
    }
 
}
 
const input = ['Red: 5', 'Blue: 3','Yellow: 2','Green: 3','End'];
 
console.log(coloredBalls(input));

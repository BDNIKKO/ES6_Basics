
const numbers1 = [1, 5, 10];

const numbers2 = [25, 50, 100];

const numbers = [...numbers1, ...numbers2];

const square = num => num * num;

const squares = numbers.map(square);

const isEven = num => num % 2 === 0;

const evenSquares = squares.filter(isEven);

const [firstEvenSquare, secondEvenSquare] = evenSquares;

console.log(`Numbers array: ${numbers}`);
console.log(`Squares array: ${squares}`);
console.log(`Even squares array: ${evenSquares}`);
console.log(`First even square: ${firstEvenSquare}`);
console.log(`Second even square: ${secondEvenSquare}`);

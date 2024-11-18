// операция sprefd, concat

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(numbers);


// const numbers = [0, 5, 10,...[6,7,8], ...[1, 2, 3], 4, 5];
// console.log(numbers);

// Поиск самой маленькой или самой большой температуры (числа)

// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.min(...temps));
// console.log(Math.max(...temps));


// Сшивае несколько массиво в один через concat и spread

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [
    ...lastWeekTemps,
    ...currentTemps,
    ...nextWeekTemps];
console.log(allTemps);

// Распыление объектов
// -Object.prototype.assign() и spread

const a = {
    x: 1,
    y: 2,
};

const b = {
    x: 0,
    z: 3,
};

// *****распыление раньше

// const c = Object.assign({}, a, b);
// console.log(c); // объеут с = {x:0, y:2, z:3}

// ******современное распыление

const c = {
    ...a,
    ...b,
    y:20,
}

console.log(c); // одинаковые ключи заменяютя значениями ниже по коду с таким же иненем ключа.
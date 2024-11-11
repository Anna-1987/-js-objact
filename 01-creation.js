
//****** ---------Литерал - {} объекта--------

// const x = {};

// const fn = function (myObject) {
//     console.log(myObject);
// }

// fn({ a: 1, b: 2 });


// ******-------- доступ к свойству объекта
// const playList = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };

// //  достучаться до свойства через переменнуюІ
// const propertyName = 'tracks';
// console.log(playList[propertyName]);


// console.log(playList.rating);     // или так!
// console.log(playList['rating']);  // или так!

// console.log(playList.name);

//******* -------- вычисляемые свойства---------

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    [inputName]: inputValue,
}

console.log(colorPickerData);

// *******----добавить свойство в объект-----


const playList = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
};

playList.song = 'My live';

console.log(playList);


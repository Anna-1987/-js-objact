//********** Деструктуризация объекта

// const playList = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };

// const {
//     name,
//     rating,
//     tracks,
//     trackCount: numberOfTracks = 0,// переименновать ключь
//     author = 'user',// добаить свойство, которого нет в объекте
// } = playList; // деструктуризация

// console.log(name, ',',
//     rating, ',',
//     tracks,  ',',
//     numberOfTracks, ',',
// author);

 //********* Глобокая деструктуризация

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://cakeshop.com.ua/ru/product/vafelnaya-kartinka',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };
 
// const { name, tag, location, avatar, stats:{followers, views, likes} } = profile;

// // const { followers, views, likes } = stats;

// console.log(name, tag, location, avatar, followers, views, likes);


// ***********Деструктуризация массивов

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;
// console.log(red, green, blue);


// const authors = {
//     kivi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const entries = Object.entries(authors);

// for(const [name, raiting] of entries) {
    
//     // const [name, raiting] = entry;
//     console.log(name, raiting);
// }



const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://cakeshop.com.ua/ru/product/vafelnaya-kartinka',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

const { name, tag, location, ...restProps } = profile;

console.log(name, tag, location, restProps);

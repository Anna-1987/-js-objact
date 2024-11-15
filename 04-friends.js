const friends = [
    { name: 'Mango', online: false },
    { name: 'Kivi', online: false },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
       
]

console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

//     friend.newprop = 555;
// }
// console.table(friends);

// ****-------ищем друга по имени----------

// const friendFriendName = function (allFriends, name) {
//     for (const friend of allFriends) {
//         // console.log(friend.name === name);

//         if (friend.name === name) {
//             return 'YRA!!!'
//         }
//     }
//     return 'Oh, NO!'
// };

// console.log(friendFriendName(friends, 'Poly'));
// console.log(friendFriendName(friends, 'Chelsy'));

// *****-------получаем все имена друзей--------------

// const getFriendsName = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         console.log(friend.name);
//         names.push(friend.name);
//     }
//     return names;
// };

// // console.log(names);

// console.log(getFriendsName(friends));

// ****-------получае имена только тех друзей которіе онлайн ------

// const getAllFriendsOnline = function (allFriends) {
//     const onlineFriend = [];

//     for (const friend of allFriends) {
        
//         if (friend.online) {
//             onlineFriend.push(friend);   
//      }
//     }
//     return onlineFriend;
// }

// console.log(getAllFriendsOnline(friends));

// ****------получить друзей офлайн------
const getAllFriendsOffline = function (allFriends) {
    const offlineFriend = [];

    for (const friend of allFriends) {
        
        if (!friend.online) {
            offlineFriend.push(friend);   
     }
    }
    return offlineFriend;
}

console.log(getAllFriendsOffline(friends));
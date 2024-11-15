const playList = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
    // *********** метод объекта

    // getName: function () {      было
    //     console.log('Привет это getName :)');
    // }

    //  getName() {
    //     console.log('Привет это getName :)');
    // }

    changeName(newName) {
        console.log('this внутнри changeName', this);
        
        this.name = newName;
    },

    addTrack(track) {
        this.tracks.push(track);
    },

    updateRaiting(newRaiting) {
        this.updateRaiting = newRaiting;
    },
    getTrackCount() {
        return this.tracks.length;
    }
           
};

// playList.getName()

// console.log(playList);

playList.changeName('Новое имя');
playList.addTrack('новый трек');
console.log(playList.getTrackCount());

console.log(playList);
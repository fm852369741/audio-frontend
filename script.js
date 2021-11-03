window.document.body.onload = async () => {
    const songBox = document.querySelector('.song');
    const songs = await fetch('https://musify-server.herokuapp.com/assets/audio').then((res) => {
        return res.json().then((audios) => {
            return audios.audio;
        });
    });

    songs.map((song) => {
        const songList = document.createElement('li');

        songList.innerHTML = `
            <h2>${song.replace(/\.mp3|\.mp4/gm, '')}</h2>
            <p>Musify</p>
            <audio controls>
                <source src='https://musify-server.herokuapp.com/audio/${song}'></source>
            </audio>
        `;

        songBox.appendChild(songList);
    });
}
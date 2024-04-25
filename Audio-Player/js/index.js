const songs = [

{
    artist: 'Metallica',
    title: 'Enter Sandman',
    audioSrc: 'assets/audio/Metallica - Enter Sandman.mp3',
    photoSrc: 'assets/img/img_song_metallica.jpg',
    backgroundSrc: 'assets/img/background_img_metallica.webp',
},
{
    artist: 'Rammstein',
    title: 'Mutter',
    audioSrc: 'assets/audio/Rammstein - Mutter.mp3',
    photoSrc: 'assets/img/img_song_rammstein.jpg',
    backgroundSrc: 'assets/img/background_img_rammstein.jpg',
},
{
    artist: 'Yurcash',
    title: 'Minuets',
    audioSrc: 'assets/audio/The Yurcash - Minuets.mp3',
    photoSrc: 'assets/img/img_song_yurcash.jpg',
    backgroundSrc: 'assets/img/background_img_yurcash.jpg',
}
];

const playBtn = document.querySelector('.audio-btn-play');
const pauseBtn = document.querySelector('.audio-btn-pause');
const prewBtn = document.querySelector('.audio-btn-prew');
const nextBtn = document.querySelector('.audio-btn-next');
const backImg = document.documentElement;
const songImg = document.getElementById('img-song');
const songArtist = document.getElementById('artist-song');
const songTitle = document.getElementById('title-song');
const audio = document.getElementById('my-audio');
const audioSource = document.getElementById('audio-source');

let currentSongIndex = 0;

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    changeBackground(songs[currentSongIndex]);

    if (audio.play) {
        audio.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'block';
    }

    if (audio.paused) {
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    }
}

function playPrevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    changeBackground(songs[currentSongIndex]);

    if (audio.play) {
        audio.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'block';
    }

    if (audio.paused) {
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    }
}

function loadSong(index) {
    const song = songs[index];
    songImg.src = song.photoSrc;
    songArtist.textContent = song.artist;
    songTitle.textContent = song.title;
    audioSource.src = song.audioSrc;
    backImg.src = song.backgroundSrc;
    audio.load();
}

function changeBackground(song) {
    const backgroundElement = document.createElement('div');
    backgroundElement.style.position = 'fixed';
    backgroundElement.style.top = '0';
    backgroundElement.style.left = '0';
    backgroundElement.style.width = '100%';
    backgroundElement.style.height = '100%';
    backgroundElement.style.backgroundImage = `url(${song.backgroundSrc}), url('assets/img/background_img_metallica.webp')`;
    backgroundElement.style.backgroundRepeat = 'no-repeat';
    backgroundElement.style.backgroundSize = 'cover';
    backgroundElement.style.backgroundPosition = 'center center';
    backgroundElement.style.filter = 'blur(10px)';
    backgroundElement.style.zIndex = '-1';
    backgroundElement.style.color = '#008cff6e';

    document.body.appendChild(backgroundElement);
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    } else {
        audio.pause();
    }
});

pauseBtn.addEventListener('click', () => {
    if (!audio.paused) {
        audio.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'block';
    }
});

nextBtn.addEventListener('click', playNextSong);
prewBtn.addEventListener('click', playPrevSong);

const lineSong = document.querySelector('.line-song');
const timeSong = document.querySelector('.time-song');

// Обновление времени и положения ползунка при воспроизведении аудио
audio.addEventListener('timeupdate', () => {
    const audio = document.getElementById('my-audio');
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    // Обновление времени проигрывания
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    const totalTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    const minutesTotal = Math.floor(duration / 60);
    const secondsTotal = Math.floor(duration % 60);
    const totalTimeTotal = `${minutesTotal}:${secondsTotal}`;

    timeSong.textContent = `${totalTime} / ${totalTimeTotal}`;

    if (!isNaN(duration)) {
        const progress = (currentTime / duration) * 100;
        lineSong.value = progress;
    }
});

// Обработчик изменения положения ползунка
lineSong.addEventListener('input', () => {
    const progress = lineSong.value;
    const duration = audio.duration;
    const currentTime = (progress / 100) * duration;
    audio.currentTime = currentTime;
});

timeSong.textContent = `0:00 / 0:00`;

audio.addEventListener('loadedmetadata', () => {
    const duration = audio.duration;
    const minutesTotal = Math.floor(duration / 60);
    const secondsTotal = Math.floor(duration % 60);
    const totalTimeTotal = `${minutesTotal}:${secondsTotal}`;

    timeSong.textContent = `0:00 / ${totalTimeTotal}`;
});

audio.addEventListener('ended', () => {
    playNextSong();
});
document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('play-music');
    const audio = document.getElementById('music');
    
    image.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            image.style.opacity = '0.7'; // Opcional: Diminui a opacidade da imagem para indicar que a música está tocando
        } else {
            audio.pause();
            audio.currentTime = 0; // Opcional: Volta ao início da música
            image.style.opacity = '1'; // Restabelece a opacidade da imagem
        }
    });
});
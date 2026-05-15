const trackList = document.querySelectorAll('.track-list li');
const audio = document.getElementById('audio-player');

trackList.forEach(track => {
  if(track.dataset.platform === 'spotify') {
    track.textContent = '▶ Play on Spotify';
    track.addEventListener('click', () => {
      audio.src = track.dataset.src;
      audio.play();
    });
  }
});

// Social Links behavior
document.querySelectorAll('.social-links a').forEach(link=>{
  link.addEventListener('click', e=>{
    if(link.dataset.platform !== 'spotify'){
      window.open(link.href,'_blank');
      e.preventDefault();
    }
  });
});

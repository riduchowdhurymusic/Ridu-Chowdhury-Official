const trackList = document.querySelectorAll('.track-list li');
const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play');

trackList.forEach(track => {
  // Spotify লিঙ্ক হলে প্লে সক্রিয়
  if(track.dataset.platform === 'spotify') {
    track.textContent = '▶ Spotify Track';
    track.addEventListener('click', () => {
      audio.src = track.dataset.src;
      audio.play();
      playBtn.textContent = '⏸️';
    });
  }
});

// প্লে/পজ বাটন
playBtn.addEventListener('click', () => {
  if(audio.paused) { audio.play(); playBtn.textContent='⏸️'; }
  else { audio.pause(); playBtn.textContent='▶️'; }
});

// Social Links behavior
document.querySelectorAll('.social-links a').forEach(link=>{
  link.addEventListener('click', e=>{
    const platform = link.dataset.platform;
    if(platform !== 'spotify') {
      // অন্য প্ল্যাটফর্মে সাইটে যাবে, কিন্তু প্লে হবে না
      window.open(link.href, '_blank');
      e.preventDefault();
    }
  });
});

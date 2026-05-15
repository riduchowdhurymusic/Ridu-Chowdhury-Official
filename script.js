const profileData = {
    name: "Ridu Chowdhury",
    bio1: "Singer • Songwriter • Dreamer",
    bio2: "Creating music that touches hearts.",
    profileImage: "https://i.ibb.co/Lzd7P2P/profile.jpg", // Replace with your actual image URL

    // Social URLs
    spotify: "https://open.spotify.com/artist/example",
    appleMusic: "https://music.apple.com/artist/example",
    youtube: "https://youtube.com/c/example",
    facebook: "https://facebook.com/ridu.chowdhury",
    instagram: "https://instagram.com/ridu.chowdhury",
    twitter: "https://twitter.com/ridu.chowdhury",

    // Paste any Spotify Link here (Artist, Track, or Playlist)
    spotifyLink: "https://open.spotify.com/track/6ZpYF1A6H7X5Z6S6XvVjZ0" 
};

/**
 * Logic to convert standard Spotify URL to Embed URL
 */
function getSpotifyEmbed(url) {
    if (!url) return "";
    // Replaces 'open.spotify.com' with 'open.spotify.com/embed' 
    // and handles pathing for tracks/artists/playlists
    const embedUrl = url.replace("open.spotify.com/", "open.spotify.com/embed/");
    return `<iframe style="border-radius:12px" src="${embedUrl}?utm_source=generator&theme=0" 
            width="100%" height="352" frameBorder="0" allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"></iframe>`;
}

function initPortfolio() {
    // Fill Text
    document.getElementById('artist-name').innerText = profileData.name;
    document.getElementById('bio1').innerText = profileData.bio1;
    document.getElementById('bio2').innerText = profileData.bio2;
    document.getElementById('profile-img').src = profileData.profileImage;
    document.getElementById('year').innerText = new Date().getFullYear();

    // Generate Social Links
    const socialContainer = document.getElementById('social-links');
    const platforms = [
        { id: 'spotify', icon: 'fab fa-spotify', label: 'Spotify' },
        { id: 'appleMusic', icon: 'fab fa-apple', label: 'Apple Music' },
        { id: 'youtube', icon: 'fab fa-youtube', label: 'YouTube' },
        { id: 'facebook', icon: 'fab fa-facebook', label: 'Facebook' },
        { id: 'instagram', icon: 'fab fa-instagram', label: 'Instagram' },
        { id: 'twitter', icon: 'fab fa-x-twitter', label: 'Twitter' }
    ];

    platforms.forEach(p => {
        if (profileData[p.id]) {
            const link = document.createElement('a');
            link.href = profileData[p.id];
            link.target = "_blank";
            link.className = "social-item";
            link.innerHTML = `
                <div class="social-icon-wrapper"><i class="${p.icon}"></i></div>
                <span>${p.label}</span>
            `;
            socialContainer.appendChild(link);
        }
    });

    // Load Spotify Player
    document.getElementById('spotify-container').innerHTML = getSpotifyEmbed(profileData.spotifyLink);
}

document.addEventListener('DOMContentLoaded', initPortfolio);

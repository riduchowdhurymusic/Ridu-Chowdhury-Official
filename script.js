const artistProfile = {
  name: "Ridu Chowdhury",
  bio: "Ridu Chowdhury Bangladeshi singer and musician creating soulful songs that connect hearts.",
  profilePic: "assets/profile.jpg",
  spotifyEmbed: "https://open.spotify.com/embed/artist/7se5YQtsrXcxlvBxEtJq5s",
  socialLinks: [
    { platform: "Spotify", url: "https://open.spotify.com/artist/7se5YQtsrXcxlvBxEtJq5s", icon: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
    { platform: "Apple Music", url: "https://music.apple.com/us/artist/ridu-chowdhury/1896496372", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Apple_Music_Icon.svg/960px-Apple_Music_Icon.svg.png" },
    { platform: "YouTube", url: "https://www.youtube.com/@Ridu_Music", icon: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" },
    { platform: "Facebook", url: "https://www.facebook.com/riduchowdhurymusic", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
    { platform: "Instagram", url: "https://www.instagram.com/riduchowdhurymusic", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" },
    { platform: "Twitter", url: "https://twitter.com/ridu_music", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1280px-Logo_of_Twitter.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20220821125553" }
  ]
};

// Set profile info
document.getElementById("artist-name").textContent = artistProfile.name;
document.getElementById("artist-bio").textContent = artistProfile.bio;
document.getElementById("profile-pic").src = artistProfile.profilePic;

// Load social icons
const socialContainer = document.querySelector(".social-links");
artistProfile.socialLinks.forEach(link => {
  const a = document.createElement("a");
  a.href = link.url;
  a.target = "_blank";
  a.title = link.platform;

  const img = document.createElement("img");
  img.src = link.icon;
  img.alt = link.platform;

  a.appendChild(img);
  socialContainer.appendChild(a);
});

// Load Spotify embed
const spotifyContainer = document.getElementById("spotify-player");
const iframe = document.createElement("iframe");
iframe.src = artistProfile.spotifyEmbed;
iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
spotifyContainer.appendChild(iframe);

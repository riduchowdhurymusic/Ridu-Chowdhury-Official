// ==== CONFIGURATION ==== //
const artistProfile = {
  name: "Ridu Chowdhury",
  bio: "Creating music that touches hearts.",
  profilePic: "assets/profile.jpg",
  spotifyEmbed: "https://open.spotify.com/embed/artist/7se5YQtsrXcxlvBxEtJq5s",
  socialLinks: [
    { platform: "Spotify", url: "https://open.spotify.com/artist/7se5YQtsrXcxlvBxEtJq5s", icon: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
    { platform: "Apple Music", url: "https://music.apple.com/us/artist/ridu-chowdhury/1896496372", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Apple_Music_logo.svg" },
    { platform: "YouTube", url: "https://www.youtube.com/@RiduChowdhury", icon: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" },
    { platform: "Facebook", url: "https://www.facebook.com/riduchowdhury", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
    { platform: "Instagram", url: "https://www.instagram.com/riduchowdhury", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" },
    { platform: "Twitter", url: "https://twitter.com/riduchowdhury", icon: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" }
  ]
};

// ==== DYNAMIC CONTENT ==== //
document.getElementById("artist-name").innerHTML = artistProfile.name + ' <span class="verified">✔</span>';
document.getElementById("artist-bio").textContent = artistProfile.bio;
document.getElementById("profile-pic").src = artistProfile.profilePic;

// Add social links dynamically
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

// Add Spotify embed
const spotifyContainer = document.getElementById("spotify-player");
const iframe = document.createElement("iframe");
iframe.src = artistProfile.spotifyEmbed;
iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
spotifyContainer.appendChild(iframe);

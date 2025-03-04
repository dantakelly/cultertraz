import spotifyMusic from "../../public/spotifyMusic.svg"
import appleMusic from "../../public/applemusic.svg"
import amazonMusic from "../../public/amazonmusic.svg"
import youtubeMusic from "../../public/youtube.svg"

const MusicArray = [ 
    {
        id: 1, 
        MusicIcon: spotifyMusic, 
        PlatformName: "Spotify",
        MusicLink: "https://open.spotify.com/artist/2z9FKcUpksd9AvwcNUWJT4?si=-sX9Z-xPSyqK4vIAqMttxQ", 
        previewURL: "https://open.spotify.com/artist/2z9FKcUpksd9AvwcNUWJT4?si=-sX9Z-xPSyqK4vIAqMttxQ",
        boxShadowColor: "green", 
    },
    {
        id: 2, 
        MusicIcon: appleMusic, 
        PlatformName: "Apple Music",
        MusicLink: "https://music.apple.com/us/artist/cultertraz/1581565979", 
        previewURL: "https://music.apple.com/us/artist/cultertraz/1581565979",
        boxShadowColor: "#F44E61", 
    },
    {
        id: 3, 
        MusicIcon: amazonMusic, 
        PlatformName: "Amazon Music",
        MusicLink: "https://music.amazon.com/artists/B09CL5H9R2/cultertraz", 
        previewURL: "https://music.amazon.com/artists/B09CL5H9R2/cultertraz",
        boxShadowColor: "#4500ff", 
    },
    {
        id: 4, 
        MusicIcon: youtubeMusic, 
        PlatformName: "YouTube",
        MusicLink: "https://www.youtube.com/@cultertraz", 
        previewURL: "https://www.youtube.com/@cultertraz",
        boxShadowColor: "#FF0000", 
    }
]

export default MusicArray; 
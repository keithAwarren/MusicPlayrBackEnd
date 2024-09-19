module.exports = {
    clientId: 'process.env.SPOTIFY_CLIENT_ID',
    redirectUri: 'proess.env.SPOTIFY_REDIRECT_URI',
    scopes: [
        "user-library-read",
        "playlist-read-private",
        "streaming",
        "app-remote-control",
    ],
};
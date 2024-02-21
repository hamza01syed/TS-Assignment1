function make_album(artist , title) {
    let album = {
        artist: artist,
        title: title
    };

    return album;
}

// Make three dictionaries representing different albums
let album1 = make_album("Linkin Park", "Meteora");
let album2 = make_album("Ed Sheeran", "÷");
let album3 = make_album("Taylor Swift", "1989");

// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);

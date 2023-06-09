function sp3x_make_song_box(){
    const song_container = document.createElement('div');
    song_container.classList.add('song-container')
    
    const song_image = document.createElement('img')
    song_image.src = "assets/png/1.png"
    song_container.appendChild(song_image)

    const song_container_info = document.createElement('div');
    song_container_info.classList.add('song-container-info')
    
    const song_name = document.createElement('h2')
    song_name.classList.add('song-name')
    const song_name_text = document.createTextNode('Song Name')
    song_name.appendChild(song_name_text)
    song_container_info.appendChild(song_name)

    const artist_name = document.createElement('h3')
    artist_name.classList.add('artist-name')
    const artist_name_text = document.createTextNode('Artist Name')
    artist_name.appendChild(artist_name_text)
    song_container_info.appendChild(artist_name)

    const song_published = document.createElement('p')
    song_published.classList.add('song-published')
    const song_published_text = document.createTextNode("2023-04-10")
    song_published.appendChild(song_published_text)
    song_container_info.appendChild(song_published)
    
    const song_container_footer = document.createElement('div');
    song_container_footer.classList.add('song-container-footer')

    const play_button = document.createElement('button')
    play_button.classList.add('play-button')
    const play_button_text = document.createTextNode('Play')
    play_button.appendChild(play_button_text)
    song_container_footer.appendChild(play_button)

    const genre_label = document.createElement('p')
    genre_label.classList.add('genre-label')
    const genre_label_text = document.createTextNode('Genre')
    genre_label.appendChild(genre_label_text)
    song_container_footer.appendChild(genre_label)

    song_container_info.appendChild(song_container_footer)

    song_container.appendChild(song_container_info)

    return song_container
}

function sp3x_start(event){
    console.log('sp3x_start', event.type, Date())  
    const selection_output = document.getElementById('selection-output')

    
    let songs = 0;
    const size = 120;
    for (songs = 0; songs < size; songs++){
        const song_box = sp3x_make_song_box();
        selection_output.appendChild(song_box)
    }
    
}
document.addEventListener("DOMContentLoaded", sp3x_start)

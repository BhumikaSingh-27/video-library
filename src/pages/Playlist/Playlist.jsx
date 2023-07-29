import React from 'react'
import "./Playlist.css"
import PlaylistCard from '../../components/playlistCard/PlaylistCard'
import PlayModal from '../../components/ModalPlay/PlayModal'
const Playlist = () => {
  return (
    <div className='home-container play'>
      <h2>Playlists</h2>
      <div className='cat-items'>

      <PlaylistCard />
      </div>
      
      <button id='add-playlist'>+</button>
      <PlayModal />
    </div>
  )
}

export default Playlist
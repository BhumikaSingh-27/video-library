import React from "react";
import "./Playlist.css";
import PlaylistCard from "../../components/playlistCard/PlaylistCard";
import PlayModal from "../../components/ModalPlay/PlayModal";
import { useData } from "../../contexts/VideoContext";

const Playlist = () => {
  const {addPlayList, setAddPlayList,videoData} = useData()


  return (
    <div className="play-container">
      <h2>Playlists</h2>
      <div className="cat-items"></div>
      {
        videoData.playlist.map((data)=><div key={data.id}><PlaylistCard data={data} /></div>)
      }
      <div>
        <button id="add-playlist" onClick={() => setAddPlayList(!addPlayList)}>
          +
        </button>
      </div>
      <div>{addPlayList ? <PlayModal /> : <></>}</div>
    </div>
  );
};

export default Playlist;

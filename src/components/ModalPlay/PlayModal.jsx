import React, { useEffect, useState } from "react";
import "./play.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useData } from "../../contexts/VideoContext";
import { NEW_PLAYLIST } from "../../reducer/actions";
import { v4 as uuid } from "uuid";

const PlayModal = () => {
  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    desc: "",
    data:[]
  });
  const { setAddPlayList } = useData();
  const { videoData, videoDispatch } = useData();

  const createNewPlaylist = () => {
    videoDispatch({
      type: NEW_PLAYLIST,
      payload: { id: uuid(), ...newPlaylist },
    });
    setNewPlaylist({
      title: "",
      desc: "",
    });
    setAddPlayList(false);
  };

  

  return (
    <div className="modal-container">
      <div className="modal-play">
        <div className="heading">
          <h2>Add to playlist</h2>{" "}
          <span onClick={() => setAddPlayList(false)}>
            <CloseOutlinedIcon />
          </span>
        </div>
        {/* <div className="playlist-input"> */}
        <input
          className="input"
          type="text"
          value={newPlaylist.title}
          onChange={(e) =>
            setNewPlaylist({ ...newPlaylist, title: e.target.value })
          }
          placeholder="Enter title of the playlist"
        />
        <input
          className="input"
          type="text"
          value={newPlaylist.desc}
          onChange={(e) =>
            setNewPlaylist({ ...newPlaylist, desc: e.target.value })
          }
          placeholder="write description"
        />
        <button onClick={createNewPlaylist}>Create new playlist</button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default PlayModal;

import React from "react";
import "./play.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const PlayModal = () => {
  return (
    <div className="modal-container">
      <div className="modal-play">
        <div className="heading"><h2>Add to playlist</h2>{" "}
        <span>
          <CloseOutlinedIcon />
        </span></div>
        {/* <div className="playlist-input"> */}
        <input className="input" type="text" placeholder="Enter title of the playlist" />
        <input className="input" type="text" placeholder="write description" />
        <button>Create new playlist</button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default PlayModal;

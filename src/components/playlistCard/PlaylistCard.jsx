import React from "react";
import { NavLink } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import "./playlist.css";
import { REMOVE_PLAYLIST } from "../../reducer/actions";
import { useData } from "../../contexts/VideoContext";

const PlaylistCard = ({ data }) => {
  const { videoDispatch } = useData();

  return (
    <div>
      <span
        className="cross"
        onClick={() =>
          videoDispatch({ type: REMOVE_PLAYLIST, payload: data.id })
        }
      >
        <ClearIcon />
      </span>
      <NavLink className="not-link" to={`/playlist/${data.id}`}>
        {" "}
        <div className="cat-container">
          <div>
            <img
              src="https://i.ytimg.com/vi/D6QM3Xed2J0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf7CiFYfUks7dtieegGd3O_eK1hg"
              alt=""
            />
          </div>
          <div className="play-desc">
            <h3>{data.title}</h3>
            <span>{data.desc}</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default PlaylistCard;

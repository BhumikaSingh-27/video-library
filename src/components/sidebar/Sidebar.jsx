import React from "react";
import "./sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink className="not-link" to="/">
        <div className="side-box">
          <HomeOutlinedIcon fontSize="large" /> <h5>Home</h5>
        </div>{" "}
      </NavLink>
      <NavLink className="not-link" to="/explore">
        <div className="side-box">
          <ExploreIcon fontSize="large" /> <p>Explore</p>
        </div>{" "}
      </NavLink>
      <NavLink className="not-link" to="/playlist">
        <div className="side-box">
          <PlaylistAddIcon fontSize="large" /> <p>Playlist</p>
        </div>
      </NavLink>
      <NavLink className="not-link" to="/watchLater">
        <div className="side-box">
          <AccessTimeFilledIcon fontSize="large" /> <p>Watch Later</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;

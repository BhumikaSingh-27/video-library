import React from "react";
import { NavLink } from "react-router-dom";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import "./single.css"

const SingleVideo = ({ id }) => {
  return (
    <div>
      {/* <img src="https://www.youtube.com/embed/GBIIQ0kP15E" alt=""/> */}
      <div className="container" key={id}>
        <video width="700" height="500" controls>
          <source
            src="https://www.youtube.com/embed/GBIIQ0kP15E"
            alt="media/mp4"
          ></source>
        </video>
        <div className="card-detail">
          <img
            id="card-detail-img"
            src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1688031972/NegProjects/SocialMedia/waterfall_godsjq.avif"
            alt=""
          />
          <div className="single-title">
            <h3>title</h3>
            
          </div>
          <div className="edit">
              <span>
                <AccessTimeFilledIcon />
              </span>
              <span>
                <PlaylistAddIcon />
              </span>
              <span>
                <EditNoteOutlinedIcon />
              </span>
            </div>
        </div>
        <div><h2>My Notes</h2></div>
      </div>
    </div>
  );
};

export default SingleVideo;

import React from "react";
import "./videoCard.css";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { useData } from "../../contexts/VideoContext";
import {
  ADD_TO_WATCHLATER,
  REMOVE_FROM_WATCHLATER,
} from "../../reducer/actions";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const Video = ({ data }) => {
  const { videoDispatch } = useData();

  const addToWatchLater = () => {
    if (data.watchLater) {
      videoDispatch({ type: REMOVE_FROM_WATCHLATER, payload: data._id });
    } else {
      videoDispatch({ type: ADD_TO_WATCHLATER, payload: data._id });
    }
  };

  return (
    <div>
      <div className="video-list-container">
        <div className="img-div">
          <img id="video-card-img" src={data.thumbnail} alt={data.title} />
        </div>
        <span className="card-icon" onClick={addToWatchLater}>
          {data?.watchLater ? (
            <AccessTimeFilledIcon />
          ) : (
            <WatchLaterOutlinedIcon />
          )}
        </span>
        <div className="card-detail">
          <img
            id="card-detail-img"
            src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1688031972/NegProjects/SocialMedia/waterfall_godsjq.avif"
            alt=""
          />
          <div className="title">
            <h3>{data.title}</h3>
            <h3>{data.category}</h3>
            <span>
              {data.views} views | {data.creator}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

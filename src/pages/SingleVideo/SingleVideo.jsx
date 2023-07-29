import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import "./single.css";
import { useData } from "../../contexts/VideoContext";
import Suggestion from "../../components/suggestion/Suggestion";
import {
  ADD_TO_WATCHLATER,
  REMOVE_FROM_WATCHLATER,
} from "../../reducer/actions";
import CreatePlay from "../../components/ModalPlay/CreatePlay";
import NoteModal from "../../components/Note/NoteModal";
import Note from "../../components/Note/Note";

const SingleVideo = () => {
  const { vid } = useParams();
  const { videoData, videoDispatch, addNote, setAddNote } = useData();
  const [addPlay, setAddPlay] = useState(false);

  const data = videoData.videoList.find((ele) => ele._id.toString() === vid);

  const addToWatchLater = () => {
    if (data.watchLater) {
      videoDispatch({ type: REMOVE_FROM_WATCHLATER, payload: data._id });
    } else {
      videoDispatch({ type: ADD_TO_WATCHLATER, payload: data._id });
    }
  };

  return (
    <div className="single-page">
      <div className="container">
        <video width="700" height="500" controls>
          <source
            src="https://www.youtube.com/embed/GBIIQ0kP15E"
            alt="media/mp4"
          ></source>
        </video>
        <div className="card">
          <img
            id="card-detail-img"
            src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1688031972/NegProjects/SocialMedia/waterfall_godsjq.avif"
            alt=""
          />
          <div className="single-title">
            <h3>{data.title}</h3>
          </div>
          <div className="edit">
            <span onClick={addToWatchLater}>
              {data?.watchLater ? (
                <AccessTimeFilledIcon />
              ) : (
                <WatchLaterOutlinedIcon />
              )}
            </span>
            <span onClick={() => setAddPlay(true)}>
              <PlaylistAddIcon />
            </span>
            <div className="edit-play-container">
              {addPlay ? <CreatePlay /> : <></>}
            </div>
            <span onClick={() => setAddNote(true)}>
              <EditNoteOutlinedIcon />
              {addNote ? <NoteModal id={data._id} /> : <></>}
            </span>
          </div>
        </div>

        <div>
          <h2>My Notes</h2>
          <div>
            {data?.note?.map((ele) => (
              <Note data={ele} />
            ))}
          </div>
        </div>
      </div>
      {/* //Suggestion */}

      <div className="sug">
        {videoData.videoList?.map((data) => (
          <div>
            <Suggestion data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleVideo;

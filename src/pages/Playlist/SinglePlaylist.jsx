import React from "react";
import { useParams } from "react-router";
import { useData } from "../../contexts/VideoContext";

const SinglePlaylist = () => {
  const { videoData, videoDispatch } = useData();
  const { pid } = useParams();

  const videoList = videoData.playlist.find(
    (data) => data.id.toString() === pid
  );

  return (
    <div>
      
      
        <h2>{videoList?.title}</h2>
      <div>{videoList?.data.length ===0? <h2> No video added</h2> : <div></div> }</div>
      
      
      
    </div>
  );
};

export default SinglePlaylist;

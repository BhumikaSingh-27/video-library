import React from "react";
import "./style.css";
import Video from "../../components/videoCard/Video";
import { useParams } from "react-router";
import { useData } from "../../contexts/VideoContext";

const VideoListing = () => {
  const { videoData } = useData();
  console.log(videoData.selectedCat);
  const videoList = videoData.videoList.filter(
    (data) => data.category === videoData.selectedCat
  );

  return (
    <div className="category">
      <h2>Category name</h2>
      <div className="cat-items">
        {videoList.map((data) => (
          <div key={data._id}>
            {" "}
            <Video data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoListing;

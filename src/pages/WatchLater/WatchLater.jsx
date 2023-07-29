import React from "react";
import { useData } from "../../contexts/VideoContext";
import Video from "../../components/videoCard/Video";

const WatchLater = () => {
  const { videoData } = useData();

  const video = videoData.videoList.filter((data) => data.watchLater);

  return (
    <div className="category">
      <h2>Watch Later</h2>
      {video.length === 0 ? (
        <h3>No videos added to watch later</h3>
      ) : (
        <div className="cat-items">
          {video.map((data) => (
            <div key={data._id}>
              <Video data={data} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchLater;

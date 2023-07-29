import React, { useState } from "react";
import Video from "../../components/videoCard/Video";
import "./explore.css";
import { useData } from "../../contexts/VideoContext";

const Explore = () => {
  const { videoData } = useData();
  const [search, setSearch] = useState("");

  const searchData = search
    ? videoData.videoList.filter(({ title }) =>
        title.toLowerCase().trim().includes(search.toLowerCase().trim())
      )
    : [...videoData.videoList];

  return (
    <div className="explore-container">
      <h2>Explore</h2>
      <input
        type="text"
        value={search}
        placeholder="search video by title"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="cat-items">
        {searchData.map((data) => (
          <div key={data._id}>
            <Video data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;

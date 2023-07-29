import React from 'react'
import Video from "../../components/videoCard/Video";
import "./explore.css"

const Explore = () => {
  return (
    <div className='explore-container'><h2>Explore</h2>
    <input type="text" placeholder='search video by title'/>
    <Video />
    </div>
  )
}

export default Explore
import React from 'react'
import { NavLink } from 'react-router-dom'
import ClearIcon from '@mui/icons-material/Clear';
import "./playlist.css"

const PlaylistCard = ({name}) => {
  return (
    <div>
        <span className='cross'><ClearIcon /></span>
          <NavLink className="not-link" to={`//videoListing/${name}`}> <div className='cat-container'>
        <div><img src="https://i.ytimg.com/vi/D6QM3Xed2J0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf7CiFYfUks7dtieegGd3O_eK1hg" alt="" /></div>
        <h3>playlist name</h3>
        <span>description</span>
    </div>
    </NavLink>
    </div>
  )
}

export default PlaylistCard
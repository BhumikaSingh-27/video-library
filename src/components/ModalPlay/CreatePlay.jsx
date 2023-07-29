import React from 'react'
import PlayModal from './PlayModal'
import { useData } from '../../contexts/VideoContext'
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./play.css"

const CreatePlay = () => {
    const {videoData, videoDispatch} = useData()

  return (
    <div className='modal-container'>
 <PlayModal />
<hr />
<div>
{
    videoData.playlist.map((data)=><div>{data.title} <span><CloseOutlinedIcon /></span></div>)
}

</div>

    </div>
  )
}

export default CreatePlay
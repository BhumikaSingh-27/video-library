import React, { useState } from "react";
import "./note.css";
import { v4 as uuid } from "uuid";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useData } from "../../contexts/VideoContext";
import { ADD_NOTE } from "../../reducer/actions";

const NoteModal = ({id}) => {
  const [note, setNote] =  useState({id:uuid(),data:""})
  const {videoData, videoDispatch} = useData()
  return (
    <div className="note-container">
      <span>
        <CloseOutlinedIcon />
      </span>
      <div className="note-content">
        <input className="input" value={note.data} onChange={(e)=>setNote(e.target.value)} type="text" placeholder="New note" />
        <button onClick={()=>videoDispatch({type:ADD_NOTE, payload: {id,note}})}>Add Note</button>
      </div>
    </div>
  );
};

export default NoteModal;

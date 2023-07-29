import React from "react";
import "./note.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const NoteModal = () => {
  return (
    <div>
      <span>
        <CloseOutlinedIcon />
      </span>
      <div className="note-content">
        <input className="input" type="text" placeholder="New note" />
        <button>Add Note</button>
      </div>
    </div>
  );
};

export default NoteModal;

import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ data }) => {
  return (
    <div>
      <p>{data}</p>
      <div>
        <span>
          <EditIcon />
        </span>
        <span>
          <DeleteIcon />
        </span>
      </div>
    </div>
  );
};

export default Note;

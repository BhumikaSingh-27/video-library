import React from "react";
import "./category.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../../contexts/VideoContext";
import { SET_CATEGORY } from "../../reducer/actions";

const CategoryCard = ({ data }) => {
  const { videoDispatch } = useData();
  const navigate = useNavigate();
  return (
    // <NavLink className="not-link" to={`/videoListing/${data.category}`}>

    <div
      className="cat-container"
      onClick={() => {
        videoDispatch({ type: SET_CATEGORY, payload: data.category });
        localStorage.setItem("selectedCat", data.category);
        navigate("/videoListing");
      }}
    >
      <div>
        <img src={data.thumbnail} alt={data.category} />
      </div>
      <h3>{data.category}</h3>
    </div>
    // </NavLink>
  );
};

export default CategoryCard;

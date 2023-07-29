import React from "react";
import CategoryCard from "../../components/category/CategoryCard";
import "./home.css";
import { useData } from "../../contexts/VideoContext";
const Home = () => {
  const {
    videoData: { category },
  } = useData();

  return (
    <>
      <div className="home-container">
        <h2>Categories</h2>
        <div className="cat-items">
          {category.map((data) => (
            <div key={data._id}>
              <CategoryCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

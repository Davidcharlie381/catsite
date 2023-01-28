import React from "react";
import Header from "../components/Header";
import MainPage from "../components/MainPage";

const Home = ({ cats }) => {
  return (
    <div>
      
      <MainPage cats={cats} />
    </div>
  );
};

export default Home;

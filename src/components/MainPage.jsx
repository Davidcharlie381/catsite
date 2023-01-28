import React from "react";
import Cats from "./Cats";

const MainPage = ({cats}) => {
  return (
    <main className="mainpage mx-auto w-[88%]">
      <h1 className="font-semibold text-2xl mt-3 text-center">Cats</h1>
      <p className=" text-center mt-2 font-extralight">
        What does this page do? Nothing. It only generates ten random cat pictures and
        displays them on the page
      </p>
      <Cats cats={cats}/>
    </main>
  );
};

export default MainPage;

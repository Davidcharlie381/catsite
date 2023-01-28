import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Cat = ({ cats }) => {
  const { catId } = useParams();

  const title = document.title;

  title = "Cat" + " " + id;

  const navigate = useNavigate();

  let { id, url } = cats.find((cat) => cat.id == catId);

  return (
    <div className="flex flex-col items-center gap-5 mt-10">
      <span onClick={() => {navigate(-1)}} className="absolute grid rounded-lg md:left-24 text-2xl font-semibold cursor-pointer place-content-center h-10 w-10 bg-green-500 top-20 left-8">&larr;</span>
      <h1 className="font-semibold text-2xl mt-10 text-center">
        {"Cat" + " " + id}
      </h1>
      <div className="h-[300px] w-[300px] rounded-lg overflow-hidden">
        <img className="h-full w-full" src={url} alt={"Cat" + id} />
      </div>

      {url}
    </div>
  );
};

export default Cat;

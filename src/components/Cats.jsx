import React from "react";
import { Link } from "react-router-dom";

const Cats = ({ cats }) => {
  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2 mx-auto place-items-center mt-5">
      {cats.map(({ id, url }) => {
        return (
          <div className="cat h-[300px] w-[300px] rounded-xl overflow-hidden">
            <Link to={`/${id}`} className="block h-[full] w-[full]">
              <img className="h-[full] w-[full] object-cover" src={url} alt={"cat" + id} />
            </Link> 
          </div>
        );
      })}
    </section>
  );
};

export default Cats;

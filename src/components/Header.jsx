import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    
  return (
    <header className="bg-green-300">
      <div className="container mx-auto w-[88%] items-center py-4 flex justify-between">
        <h3 className="text-xl font-semibold cursor-pointer">
          <Link to="/">Catsite</Link></h3>
        <span>{}</span>
      </div>
    </header>
  );
};

export default Header;

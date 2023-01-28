import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Cat from "./pages/Cat";
import Home from "./pages/Home";

const App = () => {
  const url = "https://api.thecatapi.com/v1/images/search?limit=10";

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCats(data);
    };
    fetchCats();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home cats={cats} />} />
          <Route path=":catId" element={<Cat cats={cats} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

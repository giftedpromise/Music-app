import React, { useState, useEffect } from "react";
import { fetchData } from "./utils/fetchData";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [music, setMusic] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const result = await fetchData();
        setMusic(result.albums); // Ensure the result structure matches
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMusicData();
  }, []);

  return (
    <div className="App">
      <h1>Music Browser</h1>
      <SearchBar />
    </div>
  );
};

export default App;

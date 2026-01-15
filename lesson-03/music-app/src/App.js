import React, { useEffect, useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const handleSearchClick = () => {
    console.log(`searched clicked for artist ${searchInput}`);
  };

  return (
    <h1>Music App</h1> //This will be replaced
  );
}

export default App;

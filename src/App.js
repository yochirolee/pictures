import React, { useState, useEffect } from "react";
import "./App.css";

import Search from "./Components/search.jsx";
import Picture from "./Components/picture";
import Error from "./Components/error";

function App() {
  const [search, setSearch] = useState("");
  const [isError, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const SearchData = (searchPic) => {
    setSearch(searchPic);
    console.log(search);
  };

  useEffect(() => {
    if (search === "") return;
    setLoading(true);
    (async function () {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=16755236-832bc14626b9e673df92d791d&q=${search}&image_type=photo&pretty=true`
        );
        const json = await response.json();
      
        setData(json.hits);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    })();
  }, [search]);

  return (
    <div className="App container">
      <Search SearchData={SearchData} isLoading={isLoading} />
      <div className="row">
        {isError != null ? (
          <div className="col-12">
            <Error error={isError} />
          </div>
        ) : (
          data.map((image, index) => <Picture image={image} key={index} />)
        )}
      </div>
    </div>
  );
}

export default App;

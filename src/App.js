import React, { useState, useEffect, Fragment } from "react";
import "./App.css";

import Search from "./Components/search.jsx";
import Picture from "./Components/picture";
import Error from "./Components/error";
import NavBar from "./Components/navBar";

function App() {
  const [search, setSearch] = useState("");
  const [isError, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const SearchData = (searchPic) => {
    setSearch(searchPic);
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

  const HandeDeleteFavorites = (id) => {
    console.log(id);
    let auxImages = [...favorites];
    const result = auxImages.filter((image) => image.id !== id);
    setFavorites(result);
  };

  const HandleFavorites = (e, image) => {
   if( e.target.className === "fa fa-star mr-2 button-star-ylee")
      {  
     e.target.className += "-selected";
    let auxImages = [...favorites];
         auxImages.push(image);
    setFavorites(auxImages);
      }
    else {e.target.className = "fa fa-star mr-2 button-star-ylee";
            HandeDeleteFavorites(image.id);
  
  };
};
    
    
   
  return (
    <Fragment>
      <NavBar
        favorites={favorites}
        HandeDeleteFavorites={HandeDeleteFavorites}
      />
      <div className="App container mt-5">
        <Search SearchData={SearchData} isLoading={isLoading} />
        <div className="row">
          {isError != null ? (
            <div className="col-12">
              <Error error={isError} />
            </div>
          ) : (
            data.map((image, index) => (
              <Picture
                image={image}
                HandleFavorites={HandleFavorites}
                key={index}
              />
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;

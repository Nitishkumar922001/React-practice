import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState();
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState();

  
  async function movieFetchHandler() {
    try {
      setLoading(true);
      const respone = await fetch("https://swapi.dev/api/films");
      if (!respone.ok) {
        throw new Error("something went wrong");
      }
      const data = await respone.json();
      console.log(data);
      setMovies(data);
    } catch (Error) {
      console.log(Error);
      setLoading(false);
      setError(Error.message);
    }
    setLoading(false);
  }
  useEffect(()=>{movieFetchHandler()},[])
  let content;
  if (Loading) {
    content = <p>...Loading</p>;
  } else if (error) {
    content = <h4>{error}</h4>;
  } else if (movies) {
    content = <MoviesList movies={movies} />;
  } else {
    content = <p>no movies</p>;
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={movieFetchHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;

import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState();
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function addMovies(movies) {
    const respone = await fetch(
      "https://howtosendhttpreq-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movies),
        headers: {
          "content-type": "Application/json",
        },
      }
    );
  }

  async function movieFetchHandler() {
    try {
      setLoading(true);
      const respone = await fetch(
        "https://howtosendhttpreq-default-rtdb.firebaseio.com/movies.json"
      );
      if (!respone.ok) {
        throw new Error("something went wrong");
      }
      const data = await respone.json();
      console.log(data);
      const formattedData = [];

      for (let item in data) {
        formattedData.push(data[item]);
      }
      console.log(formattedData);
      setMovies(formattedData);
    } catch (Error) {
      console.log(Error);
      setLoading(false);
      setError(Error.message);
    }
    setLoading(false);
  }
  useEffect(() => {
    movieFetchHandler();
  }, []);
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
        <AddMovie onAddMovie={addMovies} />
      </section>
      <section>
        <button onClick={movieFetchHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;

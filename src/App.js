// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useEffect, useState } from "react";

// import Home from "./routes/Home";
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const reponse = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await reponse.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>{loading ? "Loading..." : "Done!"}</h1>
    </div>
  );
}

export default App;

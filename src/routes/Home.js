import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
      .then((response) => response.json)
      .then((json) => setMovies(json.data.movies));
  }, []);
  console.log(movies.title);
  return <div>Working</div>;
}

export default Home;

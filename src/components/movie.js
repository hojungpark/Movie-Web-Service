function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} />
      <h1>{title}</h1>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;

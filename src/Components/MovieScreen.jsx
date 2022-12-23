import MovieCard from "./MovieCard";




const MovieScreen = (props) => {
  const { watchlist, page, setPage, movieList, addMovie, removeMovie } = props;
  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard list={movieList} movie={movie} addMovie={addMovie} removeMovie={removeMovie} />
    );
  });

  const decrement=() => {
    setPage(page - 1)
  }
  const increment=() => {
    setPage(page + 1)
  }

  return (
    <div className="page">
      <h1>Aimee's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;

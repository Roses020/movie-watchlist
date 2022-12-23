import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import MovieScreen from "./Components/MovieScreen";
import Watchlist from "./Components/Watchlist";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchlist, setWatchList] = useState([]);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);

  function addMovie(movie) {
    setList([...list, movie]);
  }
  function removeMovie(movie){
    const newState = list.filter((mov) => {
      return mov !== (movie);

    });
    
    setList(newState);
  };

  const getData = () => {
    axios
      .get(
 `http://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovieList(res.data.results);
        //console.log(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
        removeMovie={removeMovie}
         page={page}
         setPage={setPage}
         movieList={movieList}
         watchlist={watchlist}
         addMovie={addMovie}
         />
       <Watchlist list={list} removeMovie={removeMovie}/>
       </main>
     </div>
  );
}

export default App;

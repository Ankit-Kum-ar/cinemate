import { Route, Routes } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark:bg-slate-800">
      <Header/>
      <Routes>
        {/* Routes go here */}
        <Route path="/" element={<MovieList api_text="movie/now_playing"/>}></Route>
        <Route path="/movie/:id" element={<MovieDetail/>}></Route> {/* For each movie, it show different detail by id property => useParams() */}
        <Route path="/movies/popular" element={<MovieList api_text="movie/popular"/>}></Route>
        <Route path="/movies/top" element={<MovieList api_text="movie/top_rated"/>}></Route>
        <Route path="/movies/upcoming" element={<MovieList api_text="movie/upcoming"/>}></Route>
        <Route path="/shows" element={<MovieList api_text="tv/top_rated"/>}></Route>
        <Route path="/search" element={<Search api_text="search/movie"/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

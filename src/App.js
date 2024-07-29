import { Route, Routes } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        {/* Routes go here */}
        <Route path="/" element={<MovieList/>}></Route>
        <Route path="/movie/:id" element={<MovieDetail/>}></Route> {/* For each movie, it show different detail by id property => useParams() */}
        <Route path="/movies/popular" element={<MovieList/>}></Route>
        <Route path="/movies/top" element={<MovieList/>}></Route>
        <Route path="/movies/upcoming" element={<MovieList/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

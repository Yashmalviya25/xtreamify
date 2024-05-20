import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from "./Browse";
import MovieDetails from "./MovieDetails";
const Body = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default Body;

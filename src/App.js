import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Netflix from "./Pages/Netflix";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Player from "./Pages/Player";
import Movies from './Pages/Movies';
import TVShows from './Pages/TVShows';
import UserListedMovies from "./Pages/UserListedMovies";
const Container = styled.div`
      display: flex;
`;

function App() {

  return (

    <Container>
      {/* menu */}
      <BrowserRouter>

        <Routes>
          <Route path="logIn" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="player" element={<Player />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TVShows />} />
          <Route path="/mylist" element={<UserListedMovies />} />
          <Route path="/" element={<Netflix />} />
        </Routes>

      </BrowserRouter>
    </Container>

  );
}

export default App;
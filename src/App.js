import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
//import AboutPage from './pages/AboutPage';
import DiscoverMoviesPage from './pages/DiscoverMoviesPage';
import MoviePage from './pages/MoviePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <h1 className='header-title'>React Week Movies Router</h1>
      </header>
      <NavBar />
      <Routes>
        <Route path='/discover' element={<DiscoverMoviesPage />}>
          <Route path=':searchtext' element={<DiscoverMoviesPage />} />
        </Route>
        <Route path='/movie/:imdb_id' element={<MoviePage />} />
        <Route path='/about' element={<MoviePage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

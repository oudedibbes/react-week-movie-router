import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MovieItem from '../components/MovieItem';
import axios from 'axios';
import '../App.scss';

export default function DiscoverMoviesPage() {
  const navigate = useNavigate();
  const { searchtext } = useParams();
  const [searchText, set_searchText] = useState('');
  const [state, setState] = useState({ status: 'idle' });

  const search = async () => {
    if (searchText === '') {
      setState({ status: 'idle' });
      return;
    }
    setState({ status: 'searching' });

    const queryParam = encodeURIComponent(searchText);

    const response = await axios.get(
      `https://omdbapi.com/?apikey=bc5aa1ee&s=${queryParam}`
    );
    console.log(response.data);
    if ('Search' in response.data) {
      setState({ status: 'done', data: response.data.Search });
    } else {
      setState({ status: 'error', data: [] });
    }
  };

  const navigateToSearch = (e) => {
    e.preventDefault();
    const routeParam = encodeURIComponent(searchText);
    navigate(`/discover/${routeParam}`);
  };

  return (
    <div className='main-page'>
      <h1 className='main-page-title'>Discover some movies!</h1>

      <form className='row with-form-elements' onSubmit={navigateToSearch}>
        <div>
          <input
            value={searchText}
            onChange={(e) => set_searchText(e.target.value)}
          />
        </div>
        <div>
          <button onClick={search}>Search</button>
        </div>
      </form>

      {state.status === 'idle' && (
        <div className='row'>
          <p>Type in a search term and click "Search" to start...</p>
        </div>
      )}
      {state.status === 'searching' && (
        <div className='row'>
          <h4 className='title'>Searching...</h4>
        </div>
      )}
      {state.status === 'done' && (
        <div className='movies-conntainer'>
          <h2 className='title'>Search results</h2>
          <div className='movie-grid'>
            {state.data.map((movie) => (
              <MovieItem key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}
      {state.status === 'error' && (
        <div className='row'>
          <h4 className='title'>No results...</h4>
        </div>
      )}
    </div>
  );
}

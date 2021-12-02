import { Link } from 'react-router-dom';
export default function MovieItem({ movie }) {
  return (
    <div className='row movie-item'>
      <h4 className='movie-title'>
        <Link to={`/movie/${movie.imdbID}`}>
          <strong>{movie.Title}</strong>
        </Link>
      </h4>
      <div className='movie-poster'>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    </div>
  );
}

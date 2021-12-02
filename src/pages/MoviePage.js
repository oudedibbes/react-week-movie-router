import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.scss';

export default function MoviePage() {
  const { imdb_id } = useParams();
  const [movieData, setMovieData] = useState();

  console.log('render...', movieData);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=bc5aa1ee&i=${imdb_id}`
      );
      //.then((r) => r.json());

      setMovieData(response.data);
    }

    fetchData();
  }, [imdb_id]);

  return (
    <div className='main-page movie-detail'>
      {movieData ? (
        <>
          <div className='row'>
            <h2 className='title'>{movieData.Title}</h2>
          </div>

          <div className='row'>
            {movieData.Genre.split(', ').map((genre, index) => (
              <span className='genre-label' key={index}>
                {genre}
              </span>
            ))}
          </div>
          <div className='row movie-info'>
            <div className='movie-poster'>
              <img alt={movieData.Title} src={movieData.Poster} />
            </div>
            <div className='movie-caption'>
              <div className='row'>
                <h3>Director</h3>
                <p>{movieData.Director}</p>
              </div>
              <div className='row'>
                <h3>Language</h3>
                <p>{movieData.Language}</p>
              </div>

              <div className='row'>
                <h3>Plot</h3>
                <p>{movieData.Plot}</p>
              </div>
              <div className='row'>
                <h3>IMDB Rating</h3>
                <p>{movieData.imdbRating}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}

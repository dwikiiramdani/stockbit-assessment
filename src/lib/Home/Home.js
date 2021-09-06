import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './home.css';
import { getMovieBySearch, getMovieList } from './action/homeAction';

function Home() {
  const [keyWord, setKeyWord] = useState('')
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const totalResults = useSelector((state) => state.totalResults);
  useEffect(() => {
    dispatch(getMovieList())
  }, [dispatch])

  return (
    <div className="Home">
      <header className="Home-header">
        <h2>
          Stockbit React Dev Test {totalResults}
        </h2>
        <div>
          <input
            className="Home-textbox"
            aria-label="Find your movie"
            value={keyWord}
            onChange={(val) => setKeyWord(val.target.value)}
          />
          <button
            className="Home-button"
            onClick={() => {
              dispatch(getMovieBySearch(keyWord, page))
            }}
          >
            Find Movie
          </button>
          <div>
            {movies.map(item =>
              <React.Fragment key={item.id}>
                <div className="Home-movie-list">
                  <img src={item.Poster} height="160" width="100" />
                  <div className="Home-movie-list-content">
                    <h4 className="Home-movie-list-text">{item.Title}</h4>
                    <p className="Home-movie-list-text">{item.Year}</p>
                    <p className="Home-movie-list-text">{item.Type}</p>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>

      </header>
    </div>
  );
}

export default Home;

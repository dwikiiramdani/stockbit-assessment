import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import './home.css';
import Movies from '../Home/component/homeComponent';
import { getMovieBySearch, getMovieList } from './action/homeAction';

function Home() {
  const selectMovie = useSelector((state) => state.movies);
  const [keyWord, setKeyWord] = useState('')
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getMovieList())
  }, [dispatch])

  return (
    <div className="Home">
      <header className="Home-header">
        <h2>
          Stockbit React Dev Test
        </h2>
        <div>
          <input
            className="Home-textbox"
            aria-label="Set increment amount"
            value={keyWord}
            onChange={(val) => setKeyWord(val.target.value)}
          />
          <button
            className="Home-button"
            onClick={() => {
              console.log(keyWord)
              dispatch(getMovieBySearch(keyWord))
              console.log(keyWord)
            }}
          >
            Find Movie
          </button>
          <div>
            {movies.map(u =>
              <React.Fragment key={u.id}>
                <h6 >{u.Title}</h6>
              </React.Fragment>
            )}
          </div>
        </div>

      </header>
    </div>
  );
}

export default Home;

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './home.css';
import { getMovieBySearch, getMovieBySearchMore, getMovieList } from './action/homeAction';

function Home() {
  const [keyWord, setKeyWord] = useState('Batman')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const totalResults = useSelector((state) => state.totalResults);
  useEffect(() => {
    dispatch(getMovieList())
  }, [dispatch])

  const handleLoadMore = () =>  {
    setLoading(true)
    dispatch(getMovieBySearchMore(keyWord, page+1))
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }

  const observer = useRef()

  const lastMovieElement = useCallback(node => {
    if (loading) return
    const {current: currentObserver} = observer
    if (observer.current) currentObserver.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && movies.length < totalResults) {
        handleLoadMore()
        setPage(page+1)
      }
    })
    if (node) observer.current.observe(node)
  },)

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
            onChange={(val) => {
              setKeyWord(val.target.value)
            }}
          />
          <button
            className="Home-button"
            onClick={() => {
              setPage(1)
              setTimeout(() => {
                dispatch(getMovieBySearch(keyWord, 1))
              }, 200);
            }}
          >
            Find Movie
          </button>
          <div>
            {movies.map((item, index) =>
              <React.Fragment key={item.imdbID}>
                <div className="Home-movie-list" key={item.imdbID} ref={movies.length === index + 1 ? lastMovieElement : null}>
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

import { RETRIEVE_MOVIE_LIST, RETRIEVE_MOVIE_SEARCH, RETRIEVE_ERROR } from '../../../util/types'
import axios from 'axios'

export const getMovieList = () => async dispatch => {
    try {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=Batman&page=2`)
    console.log(res.data)
    dispatch({
      type: RETRIEVE_MOVIE_LIST,
      payload: res.data.Search
    })
  }
  catch (e) {
    dispatch({
      type: RETRIEVE_ERROR,
      payload: console.log(e),
    })
  }
}

export const getMovieBySearch = (keyWord) => async dispatch => {
  console.log('getMovieBySearch');
  try {
    const res = await axios.get(`http://www.omdbapi.com?apikey=faf7e5bb&s=${keyWord}`)
    console.log(res.data.Search)
    dispatch({
      type: RETRIEVE_MOVIE_SEARCH,
      payload: res.data.Search
    })
  }
  catch (e) {
    dispatch({
      type: RETRIEVE_ERROR,
      payload: console.log(e),
    })
  }
}

import { RETRIEVE_MOVIE_LIST, RETRIEVE_MOVIE_SEARCH, RETRIEVE_ERROR, RETRIEVE_MOVIE_SEARCH_MORE } from '../../../util/types'
import axios from 'axios'

export const getMovieList = () => async dispatch => {
    try {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=Batman&page=2`)
    console.log(res.data)
    dispatch({
      type: RETRIEVE_MOVIE_LIST,
      data: res.data.Search, 
      totalResults: res.data.totalResults,
    })
  }
  catch (e) {
    dispatch({
      type: RETRIEVE_ERROR,
      data: console.log(e),
      totalResults: 0,
    })
  }
}

export const getMovieBySearch = (keyWord, page) => async dispatch => {
  try {
    const res = await axios.get(`http://www.omdbapi.com?apikey=faf7e5bb&s=${keyWord}&page=${page}`)
    console.log(res.data.Search)
    dispatch({
      type: RETRIEVE_MOVIE_SEARCH,
      data: res.data.Search,
      totalResults: res.data.totalResults,
    })
  }
  catch (e) {
    dispatch({
      type: RETRIEVE_ERROR,
      data: console.log(e),
      totalResults: 0,
    })
  }
}

export const getMovieBySearchMore = (keyWord, page) => async dispatch => {
  try {
    const res = await axios.get(`http://www.omdbapi.com?apikey=faf7e5bb&s=${keyWord}&page=${page}`)
    console.log(res.data.Search)
    dispatch({
      type: RETRIEVE_MOVIE_SEARCH_MORE,
      data: res.data.Search,
      totalResults: res.data.totalResults,
    })
  }
  catch (e) {
    dispatch({
      type: RETRIEVE_ERROR,
      data: console.log(e),
      totalResults: 0,
    })
  }
}

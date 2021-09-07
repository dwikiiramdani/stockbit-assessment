import { RETRIEVE_MOVIE_DETAIL } from '../../../util/types'
import axios from 'axios'

export const getMovieDetail = (keyWord) => async dispatch => {
    try {
    const res = await axios({
      method: 'GET',
      url: "http://www.omdbapi.com/?apikey=faf7e5bb&",
      params: {t: keyWord}
    })
    dispatch({
      type: RETRIEVE_MOVIE_DETAIL,
      data: res.data, 
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
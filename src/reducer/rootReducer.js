import { RETRIEVE_MOVIE_DETAIL, RETRIEVE_MOVIE_LIST, RETRIEVE_MOVIE_SEARCH, RETRIEVE_MOVIE_SEARCH_MORE } from '../util/types'

const initialState = {
    movies: [],
    totalResults: 0,
    movieDetail: {},
}

function rootReducer(state = initialState, action) {

    switch (action.type) {

        case RETRIEVE_MOVIE_LIST:
            return {
                movies: action.data,
                totalResults: action.totalResults,
            }

        case RETRIEVE_MOVIE_SEARCH:
            return {
                movies: action.data,
                totalResults: action.totalResults,
            }

        case RETRIEVE_MOVIE_SEARCH_MORE:
            var combinedMovie = state.movies.concat(action.data)
            return {
                movies: combinedMovie,
                totalResults: action.totalResults,
            }

        case RETRIEVE_MOVIE_DETAIL:
            return {
                movieDetail: action.data,
            }

        default: return state
    }

}

export default rootReducer;
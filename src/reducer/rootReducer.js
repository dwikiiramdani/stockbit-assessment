import {RETRIEVE_MOVIE_LIST, RETRIEVE_MOVIE_SEARCH} from '../util/types'

const initialState = {
    movies:[],
    loading:true
}

function rootReducer(state = initialState, action){

    switch(action.type){

        case RETRIEVE_MOVIE_LIST:
        return {
            movies:action.payload,
        }

        case RETRIEVE_MOVIE_SEARCH:
        return {
            movies:action.payload,
        }

        default: return state
    }

}

export default rootReducer;
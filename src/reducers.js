import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from './actions'

const initial = {
  favs: [],
  current: null,
  error: null,
  loading: true,
}

function writeFavsToLocalStorage(state) {
  localStorage.setItem('s10g4', JSON.stringify(state.favs))
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('s10g4'))
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      return { ...state, favs: [...state.favs, action.payload] }

    case FAV_REMOVE:
      return state

    case FETCH_SUCCESS:
      return { ...state, loading: false, current: action.payload }

    case FETCH_LOADING:
      return { ...state, loading: true, error: '' }

    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload }

    case GET_FAVS_FROM_LS:
      return state

    default:
      return state
  }
}

import {
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_FAILURE,
  DELETE_FAILURE,
  DELETE_SUCCESS,
  DELETE_REQUEST,
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  EDIT_FAILURE,
  EDIT_REQUEST,
  EDIT_SUCCESS
} from "../actions/assuntos";

const initialState = {
  assuntos: [],
  loading: false,
  error: null,
};

function assuntoReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case LIST_FAILURE:
      return { ...state, loading: false, error: action.error };
    case LIST_SUCCESS:
      return { ...state, loading: false, assuntos: action.payload ?? [] };
    case DELETE_REQUEST:
      return { ...state, loading: true, error: null };
    case DELETE_FAILURE:
      return { ...state, loading: false, error: action.error };
    case DELETE_SUCCESS:
      return { ...state, loading: false, assuntos: [] };
    case CREATE_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_FAILURE:
      return { ...state, loading: false, error: action.error };
    case CREATE_SUCCESS:
      return { ...state, loading: false, assuntos: [] };
    case EDIT_REQUEST:
      return { ...state, loading: true, error: null };
    case EDIT_FAILURE:
      return { ...state, loading: false, error: action.error };
    case EDIT_SUCCESS:
      return { ...state, loading: false, assuntos: [] };
    default:
      return state;
  }
}

export default assuntoReducer;

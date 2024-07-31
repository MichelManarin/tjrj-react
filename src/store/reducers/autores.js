import {
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_FAILURE,
  DELETE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  EDIT_FAILURE,
  EDIT_REQUEST,
  EDIT_SUCCESS
} from "../actions/autores";

const initialState = {
  autores: [],
  loading: false,
  error: null,
};

function autorReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case LIST_FAILURE:
      return { ...state, loading: false, error: action.error };
    case LIST_SUCCESS:
      return { ...state, loading: false, autores: action.payload };
    case DELETE_REQUEST:
      return { ...state, loading: true, error: null };
    case DELETE_FAILURE:
      return { ...state, loading: false, error: action.error };
    case DELETE_SUCCESS:
      return { ...state, loading: false, autores: [] };
    case CREATE_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_FAILURE:
      return { ...state, loading: false, error: action.error };
    case CREATE_SUCCESS:
      return { ...state, loading: false, autores: [] };
    case EDIT_REQUEST:
      return { ...state, loading: true, error: null };
    case EDIT_FAILURE:
      return { ...state, loading: false, error: action.error };
    case EDIT_SUCCESS:
      return { ...state, loading: false, autores: [] };
  default:
      return state;
  }
}

export default autorReducer;

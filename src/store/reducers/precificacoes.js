import {
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_FAILURE,
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS
} from "../actions/precificacoes";

const initialState = {
  precificacoes: null,
  error: null,
  loading: false,
};

function precificacaoReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case LIST_FAILURE:
      return { ...state, loading: false, error: action.error };
    case LIST_SUCCESS:
      return { ...state, loading: false, precificacoes: action.payload };
    case CREATE_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_FAILURE:
      return { ...state, loading: false, error: action.error };
    case CREATE_SUCCESS:
      return { ...state, loading: false };
  default:
      return state;
  }
}

export default precificacaoReducer;

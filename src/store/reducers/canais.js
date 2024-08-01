import {
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_FAILURE
} from "../actions/canais";

const initialState = {
  canais: null,
  error: null,
  loading: false,
};

function canalReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case LIST_FAILURE:
      return { ...state, loading: false, error: action.error };
    case LIST_SUCCESS:
      return { ...state, loading: false, canais: action.payload };
  default:
      return state;
  }
}

export default canalReducer;
